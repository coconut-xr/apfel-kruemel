import { Container } from "@coconut-xr/koestlich";
import { makeBorderMaterial } from "@coconut-xr/xmaterials";
import { ComponentPropsWithoutRef } from "react";
import { ColorRepresentation, MeshPhongMaterial } from "three";

const material = makeBorderMaterial(MeshPhongMaterial, {
  specular: "#555",
  shininess: 100,
});

export type GlassProps = Omit<
  ComponentPropsWithoutRef<typeof Container>,
  "backgroundColor" | "backgroundOpacity" | "borderColor" | "borderOpacity" | "material"
> & {
  color?: ColorRepresentation;
};

export function Glass({ color = "#888", ...props }: GlassProps) {
  return (
    <Container
      backgroundColor={color}
      backgroundOpacity={0.8}
      borderColor={color}
      borderOpacity={0.8}
      border={4}
      borderBend={0.3}
      material={material}
      {...props}
    />
  );
}
