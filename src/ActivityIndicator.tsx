import { Container, Object } from "@coconut-xr/koestlich";
import { useFrame } from "@react-three/fiber";
import { ComponentPropsWithoutRef, useMemo } from "react";
import { Group, Mesh, MeshBasicMaterial, Shape, ShapeGeometry } from "three";

type Size = "sm" | "md" | "lg";

type ActivityIndicatorProps = ComponentPropsWithoutRef<typeof Container> & {
  size?: Size;
};

export function ActivityIndicator({ size = "md", ...props }: ActivityIndicatorProps) {
  const diameter = getDiameter(size);
  const pills = useMemo(() => createPills(size), [size]);

  useFrame(({ clock }) => {
    pills.children.forEach((pill, index) => {
      if (!(pill instanceof Mesh)) {
        return;
      }
      const material = Array.isArray(pill.material) ? pill.material[0] : pill.material;
      const interval = 0.8;
      const pillOffset = (index / pills.children.length) * interval;
      material.opacity = 1 - mod(clock.elapsedTime - pillOffset, interval);
    });
  });

  return (
    <Container width={diameter} height={diameter} borderRadius={diameter / 2} {...props}>
      <Object object={pills} height="100%" width="100%" />
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

function getPillSize(size: Size) {
  switch (size) {
    case "sm":
      return [5, 2];
    case "md":
      return [10, 4];
    case "lg":
      return [15, 6];
  }
}

function createPills(size: Size) {
  const [width, height] = getPillSize(size);
  const container = new Group();
  const pillGeometry = createRoundedRect(height, width, height / 2);
  const pillMaterial = new MeshBasicMaterial({ color: "white" });
  for (let i = 0; i < 8; i++) {
    const pill = new Mesh(pillGeometry, pillMaterial);
    const deg = (Math.PI / 4) * i;
    const x = Math.sin(deg);
    const y = Math.cos(deg);
    pill.position.x = x * width;
    pill.position.y = y * width;
    pill.rotation.z = -deg;
    container.add(pill);
  }
  return container;
}

function createRoundedRect(width: number, height: number, radius: number) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new Shape();
  shape.moveTo(x, y + radius);
  shape.lineTo(x, y + height - radius);
  shape.quadraticCurveTo(x, y + height, x + radius, y + height);
  shape.lineTo(x + width - radius, y + height);
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  shape.lineTo(x + width, y + radius);
  shape.quadraticCurveTo(x + width, y, x + width - radius, y);
  shape.lineTo(x + radius, y);
  shape.quadraticCurveTo(x, y, x, y + radius);
  return new ShapeGeometry(shape);
}

function mod(value: number, mod: number) {
  return (value % mod) / mod;
}
