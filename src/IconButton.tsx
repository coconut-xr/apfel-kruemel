import { Container, DefaultStyleProvider } from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef, useState } from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | number;

type IconButtonProps = ComponentPropsWithoutRef<typeof Container> & {
  size?: Size;
  platter?: boolean;
  selected?: boolean;
  disabled?: boolean;
};

export function IconButton({
  children,
  size = "md",
  platter,
  selected,
  disabled,
  ...props
}: IconButtonProps) {
  const diameter = getDiameter(size);
  const iconHeight = getIconHeight(size);
  const [hoverCount, setHoverCount] = useState(0);

  return (
    <Container
      width={diameter}
      height={diameter}
      borderRadius={diameter / 2}
      alignItems="center"
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
      <DefaultStyleProvider
        color={selected && !disabled ? "black" : "white"}
        opacity={disabled ? 0.4 : 1}
        height={iconHeight}
        width={iconHeight}
      >
        {children}
      </DefaultStyleProvider>
    </Container>
  );
}

function getDiameter(size: Size) {
  if (typeof size === "number") return size;
  switch (size) {
    case "xs":
      return 28;
    case "sm":
      return 32;
    case "md":
      return 44;
    case "lg":
      return 50;
    case "xl":
      return 64;
  }
}

function getIconHeight(size: Size) {
  switch (size) {
    case "xs":
      return 12;
    case "sm":
      return 14;
    case "md":
      return 18;
    case "lg":
      return 22;
    case "xl":
      return 28;
  }
}
