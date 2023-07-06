import { ActivityIndicator, Glass } from "@coconut-xr/apfel-kruemel";

export default function ProgressIndicatorsPage() {
  return (
    <Glass borderRadius={32} padding={16} flexDirection="row" gapColumn={16}>
      <ActivityIndicator size="sm" />
      <ActivityIndicator size="md" />
      <ActivityIndicator size="lg" />
    </Glass>
  );
}
