import Image from '@theme/IdealImage';
import { CodesandboxEmbed } from './CodesandboxEmbed.tsx'

# Checkbox

A component enabling the user to switch between a checked and unchecked state.

<!-- [Interactive Example](https://coconut-xr.github.io/apfel-kruemel/examples/#/checkboxes)   | [CodeSandbox](https://codesandbox.io/s/apfel-kruemel-examples-ld9xk5?file=/src/pages/Checkboxes.tsx) -->

<Image img={require('@site/static/images/checkbox.png')} style={{width: "50%"}}/>

### Code Example

```tsx
import { Checkbox, Glass } from "@coconut-xr/apfel-kruemel";

export default function Checkboxes() {
  return (
    <Glass borderRadius={32} padding={16} flexDirection="column" gapRow={16}>
      <Checkbox defaultSelected={false} />
      <Checkbox defaultSelected={true} />
    </Glass>
  );
}
```

### Sandbox

<CodesandboxEmbed defaultPath="checkboxes"/>

#### _Params_

| Name   | Type    | Attributes               | Description        |
|------- |-------- |------------------------- |------------------- |
| selected  | boolean  | optional / default: false  | If true, the checkbox is checked |
| defaultSelected  | boolean  | optional  | The default checked state |
| onSelectedChange  | (value: boolean) => void  | optional | Callback fired when the selected state is changed. |
