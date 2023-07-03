import { PropsWithChildren } from "react";

type ScaleProps = PropsWithChildren;

export function Scale({ children }: ScaleProps) {
  return <group scale={1 / 200}>{children}</group>;
}
