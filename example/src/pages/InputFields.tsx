import { Glass, TextInput } from "@coconut-xr/apfel-kruemel";
import { Container } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function InputFieldsPage() {
  return (
    <Glass borderRadius={32} padding={16}>
      <Container flexDirection="row" gapColumn={16}>
        <Container
          flexDirection="column"
          alignItems="stretch"
          gapRow={16}
          width={300}
        >
          <TextInput style="rect" placeholder="Value" />
          <TextInput style="rect" placeholder="Value" prefix={<BoxSelect />} />
          <TextInput style="rect" placeholder="Value" disabled />
          <TextInput
            style="rect"
            placeholder="Value"
            disabled
            prefix={<BoxSelect />}
          />
        </Container>
        <Container
          flexDirection="column"
          alignItems="stretch"
          gapRow={16}
          width={300}
        >
          <TextInput style="pill" placeholder="Value" />
          <TextInput style="pill" placeholder="Value" prefix={<BoxSelect />} />
          <TextInput style="pill" placeholder="Value" disabled />
          <TextInput
            style="pill"
            placeholder="Value"
            disabled
            prefix={<BoxSelect />}
          />
        </Container>
      </Container>
    </Glass>
  );
}
