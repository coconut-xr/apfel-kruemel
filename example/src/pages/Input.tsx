import { Glass, Input } from "@coconut-xr/apfel-kruemel";
import { Container } from "@coconut-xr/koestlich";
import { Search } from "@coconut-xr/lucide-koestlich";

export default function InputPage() {
  return (
    <Glass borderRadius={32} padding={16}>
      <Container flexDirection="row" gapColumn={16}>
        <Container
          flexDirection="column"
          alignItems="stretch"
          gapRow={16}
          width={300}
        >
          <Input style="rect" placeholder="Value" />
          <Input
            style="rect"
            placeholder="Value"
            prefix={<Search height={14} width={14} />}
          />
          <Input style="rect" placeholder="Value" disabled />
          <Input
            style="rect"
            placeholder="Value"
            disabled
            prefix={<Search height={14} width={14} />}
          />
        </Container>
        <Container
          flexDirection="column"
          alignItems="stretch"
          gapRow={16}
          width={300}
        >
          <Input style="pill" placeholder="Value" />
          <Input
            style="pill"
            placeholder="Value"
            prefix={<Search height={14} width={14} />}
          />
          <Input style="pill" placeholder="Value" disabled />
          <Input
            style="pill"
            placeholder="Value"
            disabled
            prefix={<Search height={14} width={14} />}
          />
        </Container>
      </Container>
    </Glass>
  );
}
