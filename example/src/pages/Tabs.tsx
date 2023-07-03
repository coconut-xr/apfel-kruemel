import { Glass, Tab, Tabs } from "@coconut-xr/apfel-kruemel";
import { Text } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function TabsPage() {
  return (
    <Glass
      borderRadius={32}
      padding={16}
      flexDirection="column"
      alignItems="flex-start"
      gapRow={16}
    >
      <Tabs defaultValue={1}>
        <Tab value={1}>
          <Text>Label</Text>
        </Tab>
        <Tab value={2}>
          <Text>Label</Text>
        </Tab>
        <Tab value={3}>
          <Text>Label</Text>
        </Tab>
        <Tab value={4}>
          <Text>Long Label</Text>
        </Tab>
        <Tab value={5} disabled>
          <Text>Disabled</Text>
        </Tab>
      </Tabs>
      <Tabs defaultValue={1}>
        <Tab value={1}>
          <BoxSelect height={12} width={12} />
          <Text>Label</Text>
        </Tab>
        <Tab value={2}>
          <BoxSelect height={12} width={12} />
          <Text>Label</Text>
        </Tab>
        <Tab value={3}>
          <BoxSelect height={12} width={12} />
          <Text>Label</Text>
        </Tab>
        <Tab value={4} disabled>
          <BoxSelect height={12} width={12} />
          <Text>Disabled</Text>
        </Tab>
      </Tabs>
      <Tabs defaultValue={1} disabled>
        <Tab value={1}>
          <Text>Label</Text>
        </Tab>
        <Tab value={2}>
          <Text>Label</Text>
        </Tab>
        <Tab value={3}>
          <Text>Label</Text>
        </Tab>
        <Tab value={4}>
          <Text>Long Label</Text>
        </Tab>
        <Tab value={5} disabled>
          <Text>Disabled</Text>
        </Tab>
      </Tabs>
    </Glass>
  );
}
