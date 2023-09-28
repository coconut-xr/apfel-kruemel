import Image from '@theme/IdealImage';
import { CodesandboxEmbed } from './CodesandboxEmbed.tsx'

# Tabs

A component providing a navigation mechanism to allow users to switch between different sections or views of an application.

<!-- [Interactive Example](https://coconut-xr.github.io/apfel-kruemel/examples/#/tab-bars) | [CodeSandbox](https://codesandbox.io/s/apfel-kruemel-examples-ld9xk5?file=/src/pages/TabBars.tsx) -->

<Image img={require('@site/static/images/tabBar.gif')}/>


### Code Example

```tsx
import { TabBar, TabBarItem } from "@coconut-xr/apfel-kruemel";
import { Text } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function TabBar() {
  return (
    <TabBar defaultValue={1}>
        <TabBarItem value={1} icon={<BoxSelect />}>
            <Text>Label</Text>
        </TabBarItem>
        <TabBarItem value={2} icon={<BoxSelect />}>
            <Text>Label</Text>
        </TabBarItem>
        <TabBarItem value={3} icon={<BoxSelect />}>
            <Text>Label</Text>
        </TabBarItem>
        <TabBarItem value={4} icon={<BoxSelect />}>
            <Text>Label</Text>
        </TabBarItem>
    </TabBar>
  );
}
```

### Sandbox

<CodesandboxEmbed defaultPath="tab-bars"/>

#### _Params_

##### _Tab Bar_

| Name   | Type    | Attributes               | Description        |
|------- |-------- |------------------------- |------------------- |
| value  | T  | optional  | The current selected tab of the tab bar  |
| defaultValue  | T  | optional  | The default selected tab of the tab bar |
| onValueChange  | (value: T) => void  | optional | Callback fired when the value is changed |

##### _Tab Bar Item_

| Name   | Type    | Attributes               | Description        |
|------- |-------- |------------------------- |------------------- |
| value  | T  | optional  | The value of the tab bar item |
| icon  | ReactNode  | optional  | An icon displayed at the front of the tab bar item |