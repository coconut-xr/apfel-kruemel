import { Checkbox, Glass } from "@coconut-xr/apfel-kruemel";

export default function CheckboxPage() {
  return (
    <Glass borderRadius={32} padding={16} flexDirection="column" gapRow={16}>
      <Checkbox initialSelected={false} />
      <Checkbox initialSelected={true} />
    </Glass>
  );
}
