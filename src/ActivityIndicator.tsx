import { Container } from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef } from "react";

type Size = "sm" | "md" | "lg";

type ActivityIndicatorProps = ComponentPropsWithoutRef<typeof Container> & {
  size?: Size;
};

export function ActivityIndicator({
  size = "md",
  ...props
}: ActivityIndicatorProps) {
  const diameter = getDiameter(size);

  return (
    <Container
      width={diameter}
      height={diameter}
      borderRadius={diameter / 2}
      positionType="relative"
      {...props}
    >
      <Container
        positionType="absolute"
        inset={0}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Pill size={size} />
        <Pill size={size} />
      </Container>
    </Container>
  );
}

function getDiameter(size: Size) {
  switch (size) {
    case "sm":
      return 20;
    case "md":
      return 28;
    case "lg":
      return 44;
  }
}

type PillProps = { size: Size };

function Pill({ size }: PillProps) {
  const [pillHeight, pillWidth] = getPillSize(size);

  return (
    <Container
      width={pillWidth}
      height={pillHeight}
      borderRadius={pillHeight / 2}
      backgroundColor="white"
    />
  );
}

function getPillSize(size: Size) {
  switch (size) {
    case "sm":
      return [3, 6];
    case "md":
      return [4, 10];
    case "lg":
      return [6, 15];
  }
}
