import { Container, DefaultStyleProvider, Text } from "@coconut-xr/koestlich";
import { makeBorderMaterial } from "@coconut-xr/xmaterials";
import { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import { MeshPhongMaterial } from "three";

type Style = "pill" | "rect";

type TextInputProps = ComponentPropsWithoutRef<typeof Container> & {
  style?: Style;
  disabled?: boolean;
  placeholder?: string;
  prefix?: ReactNode;
};

const material = makeBorderMaterial(MeshPhongMaterial, {
  specular: "#888",
  shininess: 50,
});

export function TextInput({
  style = "rect",
  disabled,
  placeholder,
  prefix,
  ...props
}: TextInputProps) {
  const [hoverCount, setHoverCount] = useState(0);

  const opacity = disabled ? 0.3 : hoverCount > 0 ? 0.2 : 0.4;

  return (
    <Container
      height={44}
      width="100%"
      paddingRight={20}
      paddingLeft={prefix ? 0 : 20}
      flexDirection="row"
      alignItems="center"
      borderRadius={style === "pill" ? 22 : 12}
      backgroundColor="#444"
      backgroundOpacity={opacity}
      border={3}
      borderColor="#444"
      borderOpacity={opacity}
      borderBend={disabled ? 0 : -0.3}
      material={material}
      {...props}
      onPointerEnter={(e) => {
        setHoverCount((current) => current + 1);
        props.onPointerEnter?.(e);
      }}
      onPointerLeave={(e) => {
        setHoverCount((current) => current - 1);
        props.onPointerLeave?.(e);
      }}
    >
      <DefaultStyleProvider color="white" opacity={disabled ? 0.2 : 0.5}>
        {prefix && (
          <Container paddingX={12} index={0}>
            <DefaultStyleProvider width={14} height={14}>
              {prefix}
            </DefaultStyleProvider>
          </Container>
        )}
        <Text fontSize={14} index={1}>
          {placeholder}
        </Text>
      </DefaultStyleProvider>
    </Container>
  );
}
