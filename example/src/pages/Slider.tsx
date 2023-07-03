import { Glass, Slider } from "@coconut-xr/apfel-kruemel";
import { Container } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function SliderPage() {
  return (
    <Glass borderRadius={32} padding={16} flexDirection="row" gapColumn={16}>
      <Container flexDirection="column" gapRow={16} width={250}>
        <Slider size="xs" defaultValue={2.5} />
        <Slider size="sm" defaultValue={5} />
        <Slider size="md" defaultValue={7.5} icon={<BoxSelect />} />
        <Slider size="lg" defaultValue={10} icon={<BoxSelect />} />
      </Container>
      <Container flexDirection="column" gapRow={16} width={250}>
        <Slider size="xs" defaultValue={2.5} disabled />
        <Slider size="sm" defaultValue={5} disabled />
        <Slider size="md" defaultValue={7.5} disabled icon={<BoxSelect />} />
        <Slider size="lg" defaultValue={10} disabled icon={<BoxSelect />} />
      </Container>
    </Glass>
  );
}
