import {
  Container,
  DefaultStyleProvider,
  TextProperties,
} from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef, useState } from "react";

type Size = "sm" | "md" | "lg";
type Style = "pill" | "rect";

type ButtonProps = ComponentPropsWithoutRef<typeof Container> & {
  size?: Size;
  style?: Style;
  platter?: boolean;
  selected?: boolean;
  disabled?: boolean;
};

export function Button({
  children,
  size = "md",
  style = "rect",
  platter,
  selected,
  disabled,
  ...props
}: ButtonProps) {
  const height = getHeight(size);
  const [hoverCount, setHoverCount] = useState(0);

  return (
    <Container
      height={height}
      paddingX={getPadding(size)}
      borderRadius={style === "pill" ? height / 2 : getBorderRadius(size)}
      justifyContent="center"
      backgroundColor="white"
      backgroundOpacity={
        disabled ? 0.1 : selected ? 1 : hoverCount > 0 ? 0.3 : platter ? 0.2 : 0
      }
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
      <DefaultStyleProvider<TextProperties>
        color={selected && !disabled ? "black" : "white"}
      >
        {children}
      </DefaultStyleProvider>
    </Container>
  );
}

function getHeight(size: Size) {
  switch (size) {
    case "sm":
      return 32;
    case "md":
      return 44;
    case "lg":
      return 52;
  }
}

function getPadding(size: Size) {
  switch (size) {
    case "sm":
      return 12;
    case "md":
      return 20;
    case "lg":
      return 25;
  }
}

function getBorderRadius(size: Size) {
  switch (size) {
    case "sm":
      return 8;
    case "md":
      return 12;
    case "lg":
      return 16;
  }
}
