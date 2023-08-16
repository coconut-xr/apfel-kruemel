import {
  Glass,
  SegmentedControl,
  SegmentedControlButton,
} from "@coconut-xr/apfel-kruemel";
import { Text } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function SegmentedControlsPage() {
  return (
    <Glass
      borderRadius={32}
      padding={16}
      flexDirection="column"
      alignItems="flex-start"
      gapRow={16}
    >
      <SegmentedControl defaultValue={1}>
        <SegmentedControlButton value={1}>
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={2}>
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={3}>
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={4}>
          <Text>Long Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={5} disabled>
          <Text>Disabled</Text>
        </SegmentedControlButton>
      </SegmentedControl>
      <SegmentedControl defaultValue={1}>
        <SegmentedControlButton value={1}>
          <BoxSelect height={12} width={12} />
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={2}>
          <BoxSelect height={12} width={12} />
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={3}>
          <BoxSelect height={12} width={12} />
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={4} disabled>
          <BoxSelect height={12} width={12} />
          <Text>Disabled</Text>
        </SegmentedControlButton>
      </SegmentedControl>
      <SegmentedControl defaultValue={1} disabled>
        <SegmentedControlButton value={1}>
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={2}>
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={3}>
          <Text>Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={4}>
          <Text>Long Label</Text>
        </SegmentedControlButton>
        <SegmentedControlButton value={5} disabled>
          <Text>Disabled</Text>
        </SegmentedControlButton>
      </SegmentedControl>
    </Glass>
  );
}
