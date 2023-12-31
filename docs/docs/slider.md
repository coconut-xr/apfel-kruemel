import Image from '@theme/IdealImage';
import { CodesandboxEmbed } from './CodesandboxEmbed.tsx'

# Slider

A component enabling the user to adjust a value within a specific range by dragging a handle along a track.

<!-- [Interactive Example](https://coconut-xr.github.io/apfel-kruemel/examples/#/sliders) | [CodeSandbox](https://codesandbox.io/s/apfel-kruemel-examples-ld9xk5?file=/src/pages/Sliders.tsx) -->

<div style={{display: "flex"}}>
  <Image img={require('@site/static/images/sliders.png')} style={{width: "73.1%"}}/>
  <Image img={require('@site/static/images/xr3.gif')} style={{width: "26.9%"}}/>
</div>

### Code Example

```tsx
import { Glass, Slider } from "@coconut-xr/apfel-kruemel";

export default function Checkboxes() {
  return (
    <Glass borderRadius={32} padding={16} flexDirection="column" gapRow={16}>
        <Slider size="sm" defaultValue={5} />
    </Glass>
  );
}
```

### Sandbox

<CodesandboxEmbed defaultPath="sliders"/>

#### _Params_

| Name   | Type    | Attributes               | Description        |
|------- |-------- |------------------------- |------------------- |
| value  | number  | optional  | The current value of the slider |
| defaultValue  | number  | optional  | The default value of the slider |
| onValueChange  | (value: number) => void  | optional | Callback that is fired when the user changes the slider position |
| range  | number  | optional / default: 10  | Min and max value of the slider given as a range (0 to 'range') |
| size  | Size  | optional / default: "md"  | Sets the size of the slider. Options are "xs" / "sm" / "md" / "lg" |
| icon  | ReactNode  | optional  | An icon displayed at the front of the slider |
| disabled  | boolean  | optional / default: false  | If true, disable all interactions for the slider |
