import { Container } from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef } from "react";

export type GlassProps = Omit<
  ComponentPropsWithoutRef<typeof Container>,
  "backgroundColor" | "backgroundOpacity"
>;

export function Glass({ ...props }: GlassProps) {
  return (
    <Container {...props} backgroundColor="white" backgroundOpacity={0.5} />
  );
}
