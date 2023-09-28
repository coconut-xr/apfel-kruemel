import Image from '@theme/IdealImage';
import { CodesandboxEmbed } from './CodesandboxEmbed.tsx'

# Indicators

## Progress Indicator

A component used to visually communicate the progress of a task or process to the user.

## Activity Indicator

A component used to indicate that a process is ongoing, and the system is working to retrieve data, perform a task, or load content. 

<!-- [Interactive Example](https://coconut-xr.github.io/apfel-kruemel/examples/#/progress-indicators) | [CodeSandbox](https://codesandbox.io/s/apfel-kruemel-examples-ld9xk5?file=/src/pages/ProgressIndicators.tsx) -->

<Image img={require('@site/static/images/progress.gif')}/>

### Code Example

```tsx
import {
  ActivityIndicator,
  Glass,
  ProgressIndicator,
} from "@coconut-xr/apfel-kruemel";

export default function Indicators() {
  return (
    <Glass borderRadius={32} padding={16} flexDirection="column" gapRow={16}>
        <ProgressIndicator value={0.75} />
        <ActivityIndicator size="md" />
    </Glass>
  );
}
```

### Sandbox

<CodesandboxEmbed defaultPath="progress-indicators"/>

#### _Params_

___Progress Indicator___

| Name   | Type    | Attributes               | Description        |
|------- |-------- |------------------------- |------------------- |
| value  | number  | optional / default: 0  | Value between 0 and 1 to indicate the progress   |

___Activity Indicator___

| Name   | Type    | Attributes               | Description        |
|------- |-------- |------------------------- |------------------- |
| size  | Size  | optional / default: 'md'  | Sets the size of the activity indicator. Options are "sm" / "md" / "lg" . |
