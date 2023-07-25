import { Glass, TextInput } from "@coconut-xr/apfel-kruemel";
import { Container } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";
import { useState } from "react";

export default function InputFieldsPage() {
  const [text, setText] = useState("");
  return (
    <Glass borderRadius={32} padding={16}>
      <Container flexDirection="row" gapColumn={16}>
        <Container flexDirection="column" alignItems="stretch" gapRow={16} width={300}>
          <TextInput value={text} onValueChange={setText} style="rect" placeholder="Placeholder" />
          <TextInput
            value={text}
            onValueChange={setText}
            style="rect"
            placeholder="Placeholder"
            prefix={<BoxSelect />}
          />
          <TextInput
            value={text}
            onValueChange={setText}
            style="rect"
            placeholder="Placeholder"
            disabled
          />
          <TextInput
            value={text}
            onValueChange={setText}
            style="rect"
            placeholder="Placeholder"
            disabled
            prefix={<BoxSelect />}
          />
        </Container>
        <Container flexDirection="column" alignItems="stretch" gapRow={16} width={300}>
          <TextInput value={text} onValueChange={setText} style="pill" placeholder="Placeholder" />
          <TextInput
            value={text}
            onValueChange={setText}
            style="pill"
            placeholder="Placeholder"
            prefix={<BoxSelect />}
          />
          <TextInput
            value={text}
            onValueChange={setText}
            style="pill"
            placeholder="Placeholder"
            disabled
          />
          <TextInput
            value={text}
            onValueChange={setText}
            style="pill"
            placeholder="Placeholder"
            disabled
            prefix={<BoxSelect />}
          />
        </Container>
      </Container>
    </Glass>
  );
}
