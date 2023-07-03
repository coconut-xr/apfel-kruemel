import { Glass, IconButton, List, ListItem } from "@coconut-xr/apfel-kruemel";
import { Container, Text } from "@coconut-xr/koestlich";
import { BoxSelect, ChevronRight, Info } from "@coconut-xr/lucide-koestlich";

export default function ListPage() {
  return (
    <Container flexDirection="column" gapRow={32}>
      <Container flexDirection="row" gapColumn={32}>
        <Glass borderRadius={32} padding={16}>
          <List type="plain" width={300}>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              trailingAccessory={<ChevronRight height={12} width={12} />}
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              trailingAccessory={<ChevronRight height={12} width={12} />}
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              selected
              trailingAccessory={<ChevronRight height={12} width={12} />}
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              trailingAccessory={<ChevronRight height={12} width={12} />}
            >
              <Text>Title</Text>
            </ListItem>
          </List>
        </Glass>
        <Glass borderRadius={32} padding={16}>
          <List type="plain" width={300}>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <IconButton size="xs" platter>
                  <Info height={14} width={14} />
                </IconButton>
              }
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <IconButton size="xs" platter>
                  <Info height={14} width={14} />
                </IconButton>
              }
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              selected
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <IconButton size="xs" platter>
                  <Info height={14} width={14} />
                </IconButton>
              }
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <IconButton size="xs" platter>
                  <Info height={14} width={14} />
                </IconButton>
              }
            >
              <Text>Title</Text>
            </ListItem>
          </List>
        </Glass>
      </Container>
      <Container flexDirection="row" gapColumn={32}>
        <Glass borderRadius={32} padding={16}>
          <List type="inset" width={300}>
            <ListItem
              isFirst
              subtitle={<Text>Subtitle</Text>}
              trailingAccessory={<ChevronRight height={12} width={12} />}
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              trailingAccessory={<ChevronRight height={12} width={12} />}
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              trailingAccessory={<ChevronRight height={12} width={12} />}
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              isLast
              subtitle={<Text>Subtitle</Text>}
              trailingAccessory={<ChevronRight height={12} width={12} />}
            >
              <Text>Title</Text>
            </ListItem>
          </List>
        </Glass>
        <Glass borderRadius={32} padding={16}>
          <List type="inset" width={300}>
            <ListItem
              isFirst
              subtitle={<Text>Subtitle</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <IconButton size="xs" platter>
                  <Info height={14} width={14} />
                </IconButton>
              }
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <IconButton size="xs" platter>
                  <Info height={14} width={14} />
                </IconButton>
              }
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>Subtitle</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <IconButton size="xs" platter>
                  <Info height={14} width={14} />
                </IconButton>
              }
            >
              <Text>Title</Text>
            </ListItem>
            <ListItem
              isLast
              subtitle={<Text>Subtitle</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <IconButton size="xs" platter>
                  <Info height={14} width={14} />
                </IconButton>
              }
            >
              <Text>Title</Text>
            </ListItem>
          </List>
        </Glass>
      </Container>
    </Container>
  );
}
