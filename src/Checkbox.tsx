import { Container } from "@coconut-xr/koestlich";
import { Check } from "@coconut-xr/lucide-koestlich";
import { ComponentPropsWithoutRef, useState } from "react";

type CheckboxProps = ComponentPropsWithoutRef<typeof Container> & {
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?(value: boolean): void;
};

export function Checkbox({ selected, defaultSelected, onSelectedChange, ...props }: CheckboxProps) {
  const [internalValue, setInternalValue] = useState(defaultSelected ?? false);
  const value = selected != null ? selected : internalValue;

  function toggle() {
    setInternalValue(!value);
    onSelectedChange?.(!value);
  }

  const [hoverCount, setHoverCount] = useState(0);

  const selectedColor = hoverCount > 0 ? "#2491ff" : "#0A84FF";

  return (
    <Container
      width={28}
      height={28}
      border={2}
      borderRadius={15}
      backgroundColor={value ? selectedColor : "white"}
      backgroundOpacity={value ? 1 : hoverCount > 0 ? 0.3 : 0.1}
      borderColor={value ? selectedColor : "white"}
      borderOpacity={value ? 1 : 0.5}
      justifyContent="center"
      alignItems="center"
      {...props}
      onClick={(e) => {
        toggle();
        props.onClick?.(e);
      }}
      onPointerEnter={(e) => {
        setHoverCount((current) => current + 1);
        props.onPointerEnter?.(e);
      }}
      onPointerLeave={(e) => {
        setHoverCount((current) => current - 1);
        props.onPointerLeave?.(e);
      }}
    >
      {value && <Check height={10} width={10} color="white" />}
    </Container>
  );
}
