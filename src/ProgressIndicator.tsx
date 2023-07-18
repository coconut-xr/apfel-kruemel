import { Container } from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef } from "react";

type ProgressIndicatorProps = ComponentPropsWithoutRef<typeof Container> & {
  value?: number;
};

export function ProgressIndicator({ value = 0, ...props }: ProgressIndicatorProps) {
  return (
    <Container
      width="100%"
      height={4}
      borderRadius={2}
      backgroundColor="white"
      backgroundOpacity={0.2}
      {...props}
    >
      <Container
        backgroundColor="white"
        backgroundOpacity={0.8}
        minWidth={4}
        width={`${value * 100}%`}
        height={4}
        borderRadius={2}
      />
    </Container>
  );
}
