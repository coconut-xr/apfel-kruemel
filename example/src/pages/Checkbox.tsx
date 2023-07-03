import { Checkbox, Glass } from "@coconut-xr/apfel-kruemel";
import { RootContainer } from "@coconut-xr/koestlich";

export default function CheckboxPage() {
  return (
    <RootContainer
      anchorX="center"
      anchorY="center"
      precision={0.01}
      flexDirection="row"
      gapColumn={32}
      alignItems="center"
    >
      <Glass
        color="#999"
        borderRadius={32}
        padding={24}
        flexDirection="column"
        gapRow={16}
      >
        <Checkbox initialSelected={false} />
        <Checkbox initialSelected={true} />
      </Glass>
    </RootContainer>
  );
}
