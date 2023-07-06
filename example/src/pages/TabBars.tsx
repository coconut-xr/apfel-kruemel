import { TabBar, TabBarItem } from "@coconut-xr/apfel-kruemel";
import { Text } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function TabBarsPage() {
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
