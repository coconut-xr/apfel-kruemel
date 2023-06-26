import { RootContainer } from "@coconut-xr/koestlich";
import { PropsWithChildren } from "react";

type ScreenProps = PropsWithChildren;

export default function Screen({ children }: ScreenProps) {
  return (
    <group position={[-0.5, 2.08, -0.8]} scale={1 / 1200}>
      <RootContainer width={1200} height={700} precision={1}>
        {children}
      </RootContainer>
    </group>
  );
}
