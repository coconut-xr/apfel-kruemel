import {
  ActivityIndicator,
  Glass,
  ProgressIndicator,
} from "@coconut-xr/apfel-kruemel";
import { Container } from "@coconut-xr/koestlich";

export default function ProgressIndicatorsPage() {
  return (
    <Container flexDirection="column" gapRow={32}>
      <Glass borderRadius={32} padding={16} flexDirection="column" gapRow={16}>
        <ProgressIndicator value={0} />
        <ProgressIndicator value={0.25} />
        <ProgressIndicator value={0.5} />
        <ProgressIndicator value={0.75} />
        <ProgressIndicator value={1} />
      </Glass>
      <Glass borderRadius={32} padding={16} flexDirection="row" gapColumn={16}>
        <ActivityIndicator size="sm" />
        <ActivityIndicator size="md" />
        <ActivityIndicator size="lg" />
      </Glass>
    </Container>
  );
}
