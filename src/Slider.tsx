import { Container, DefaultStyleProvider } from "@coconut-xr/koestlich";
import { makeBorderMaterial } from "@coconut-xr/xmaterials";
import { ThreeEvent } from "@react-three/fiber";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  startTransition,
  useCallback,
  useRef,
  useState,
} from "react";
import { Box3, Mesh, MeshPhongMaterial, Vector3 } from "three";
import { clamp } from "three/src/math/MathUtils.js";

const vectorHelper = new Vector3();

const material = makeBorderMaterial(MeshPhongMaterial, {
  specular: "#888",
  shininess: 50,
});

type Size = "xs" | "sm" | "md" | "lg";

type SliderProps = ComponentPropsWithoutRef<typeof Container> & {
  value?: number;
  defaultValue?: number;
  onValueChange?(value: number): void;
  range?: number;
  size?: Size;
  icon?: ReactNode;
  disabled?: boolean;
};

export function Slider({
  value,
  defaultValue,
  onValueChange,
  range = 10,
  size = "md",
  icon,
  disabled,
  ...props
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? 0);
  const currentValue = value != null ? value : internalValue;

  const [hoverCount, setHoverCount] = useState(0);

  function onChange(value: number) {
    if (disabled) return;
    setInternalValue(value);
    onValueChange?.(value);
  }

  const downRef = useRef(false);

  const startSlide = useCallback((e: ThreeEvent<PointerEvent>) => {
    downRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    e.stopPropagation();
  }, []);

  const progressSlide = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      if (!downRef.current || !(e.object instanceof Mesh)) {
        return;
      }
      if (e.object.geometry.boundingBox == null) {
        e.object.geometry.computeBoundingBox();
      }
      vectorHelper.copy(e.point);
      e.object.worldToLocal(vectorHelper);
      const box: Box3 = e.object.geometry.boundingBox;
      const value = clamp((vectorHelper.x - box.min.x) / box.max.x - box.min.x, 0, 1) * range;
      startTransition(() => onChange(value));
      e.stopPropagation();
    },
    [onChange, range],
  );

  const endSlide = useCallback((e: ThreeEvent<PointerEvent>) => {
    if (!downRef.current) {
      return;
    }
    downRef.current = false;
    e.stopPropagation();
  }, []);

  const width = `${((1 - 0.03) * clamp(currentValue / range, 0, 1) + 0.03) * 100}%` as const;

  const height = getHeight(size);
  const knobHeight = getKnobHeight(size);
  const knobPadding = (height - knobHeight) / 2;
  const showIcon = ["md", "lg"].includes(size);
  const iconHeight = size === "md" ? 12 : 18;

  return (
    <Container
      height={height}
      borderRadius={height / 2}
      backgroundColor="#444"
      backgroundOpacity={0.4}
      positionType="relative"
      borderColor="#444"
      borderOpacity={0.4}
      border={2}
      borderBend={-0.3}
      material={material}
      {...props}
      onPointerDown={(e) => {
        startSlide(e);
        props.onPointerDown?.(e);
      }}
      onPointerMove={(e) => {
        progressSlide(e);
        props.onPointerMove?.(e);
      }}
      onPointerUp={(e) => {
        endSlide(e);
        props.onPointerUp?.(e);
      }}
      onPointerEnter={(e) => {
        setHoverCount((current) => current + 1);
        props.onPointerEnter?.(e);
      }}
      onPointerLeave={(e) => {
        setHoverCount((current) => current - 1);
        props.onPointerLeave?.(e);
      }}
    >
      <Container positionType="absolute" inset={-2}>
        <Container
          width={width}
          minWidth={height}
          height="100%"
          borderRadius={height / 2}
          backgroundOpacity={disabled ? 0.25 : 0.6}
        >
          {showIcon && (
            <Container width={height} height={height} alignItems="center" justifyContent="center">
              <DefaultStyleProvider
                color="white"
                width={iconHeight}
                height={iconHeight}
                opacity={disabled ? 0.4 : 1}
              >
                {icon}
              </DefaultStyleProvider>
            </Container>
          )}
          <Container
            positionType="absolute"
            height={knobHeight}
            width={knobHeight}
            borderRadius={knobHeight / 2}
            positionTop={knobPadding}
            positionRight={knobPadding}
            backgroundColor="white"
            backgroundOpacity={!disabled && hoverCount > 0 ? 1 : 0}
          />
        </Container>
      </Container>
    </Container>
  );
}

function getHeight(size: Size) {
  switch (size) {
    case "xs":
      return 12;
    case "sm":
      return 16;
    case "md":
      return 28;
    case "lg":
      return 44;
  }
}

function getKnobHeight(size: Size) {
  switch (size) {
    case "xs":
      return 8;
    case "sm":
      return 12;
    case "md":
      return 20;
    case "lg":
      return 32;
  }
}
