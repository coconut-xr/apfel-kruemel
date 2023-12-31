import {
  Container,
  DefaultStyleProvider,
  TextProperties,
  useBaseNodeContext,
} from "@coconut-xr/koestlich";
import { makeBorderMaterial } from "@coconut-xr/xmaterials";
import {
  ComponentPropsWithoutRef,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { MeshPhongMaterial } from "three";

const material = makeBorderMaterial(MeshPhongMaterial, {
  specular: "#888",
  shininess: 50,
});

type SegmentedControlProps<T> = ComponentPropsWithoutRef<typeof Container> & {
  value?: T;
  defaultValue?: T;
  onValueChange?(value: T): void;
  disabled?: boolean;
};

type SegmentedControlContext<T> = {
  value?: T;
  onValueChange?(value: T): void;
  disabled?: boolean;
};

const SegmentedControlContext = createContext<SegmentedControlContext<unknown>>({});

export function SegmentedControl<T>({
  value,
  defaultValue,
  onValueChange,
  disabled,
  ...props
}: SegmentedControlProps<T>) {
  const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue);
  const currentValue = value != null ? value : internalValue;

  const onChange = useCallback((value: T) => {
    setInternalValue(value);
    onValueChange?.(value);
  }, []);

  const context = useMemo<SegmentedControlContext<T>>(
    () => ({ value: currentValue, onValueChange: onChange, disabled }),
    [currentValue, onChange, disabled],
  );

  const opacity = disabled ? 0.3 : 0.4;

  return (
    <SegmentedControlContext.Provider value={context}>
      <Container
        height={36}
        backgroundColor="#444"
        backgroundOpacity={opacity}
        border={2}
        borderColor="#444"
        borderOpacity={opacity}
        borderBend={disabled ? 0 : -0.3}
        borderRadius={18}
        material={material}
        flexDirection="row"
        {...props}
      />
    </SegmentedControlContext.Provider>
  );
}

type SegmentedControlButtonProps<T> = ComponentPropsWithoutRef<typeof Container> & {
  value: T;
  disabled?: boolean;
};

export function SegmentedControlButton<T>({
  children,
  value,
  disabled,
  ...props
}: SegmentedControlButtonProps<T>) {
  const {
    value: currentValue,
    onValueChange,
    disabled: tabsDisabled,
  } = useContext(SegmentedControlContext) as SegmentedControlContext<T>;

  const { id } = useBaseNodeContext();

  return (
    <Container
      height={32}
      paddingX={20}
      positionType="relative"
      {...props}
      onClick={(e) => {
        if (disabled) return;
        onValueChange?.(value);
        props.onClick?.(e);
      }}
    >
      {currentValue === value && !tabsDisabled && (
        <Container
          id={`tab-indicator-${id}`}
          positionType="absolute"
          inset={0}
          backgroundColor="white"
          backgroundOpacity={0.3}
          border={2}
          borderColor="white"
          borderOpacity={0.3}
          borderRadius={16}
          borderBend={0.3}
          material={material}
        />
      )}
      <DefaultStyleProvider<TextProperties>
        fontSize={16}
        color="white"
        opacity={disabled || tabsDisabled ? 0.4 : 1}
      >
        <Container height="100%" flexDirection="row" alignItems="center" gapColumn={10}>
          {children}
        </Container>
      </DefaultStyleProvider>
    </Container>
  );
}
