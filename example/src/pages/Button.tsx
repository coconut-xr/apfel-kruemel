import { Button, Glass, IconButton } from "@coconut-xr/apfel-kruemel";
import { Container, Text } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function ButtonPage() {
  return (
    <Container flexDirection="row" alignItems="center" gapColumn={32}>
      <Glass borderRadius={32} padding={16}>
        <Container flexDirection="row" gapColumn={16}>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gapRow={16}
          >
            <IconButton size="xs">
              <BoxSelect height={12} width={12} />
            </IconButton>
            <IconButton size="sm">
              <BoxSelect height={14} width={14} />
            </IconButton>
            <IconButton size="md">
              <BoxSelect height={16} width={16} />
            </IconButton>
            <IconButton size="lg">
              <BoxSelect height={18} width={18} />
            </IconButton>
            <IconButton size="xl">
              <BoxSelect height={20} width={20} />
            </IconButton>
          </Container>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gapRow={16}
          >
            <IconButton size="xs" platter>
              <BoxSelect height={12} width={12} />
            </IconButton>
            <IconButton size="sm" platter>
              <BoxSelect height={14} width={14} />
            </IconButton>
            <IconButton size="md" platter>
              <BoxSelect height={16} width={16} />
            </IconButton>
            <IconButton size="lg" platter>
              <BoxSelect height={18} width={18} />
            </IconButton>
            <IconButton size="xl" platter>
              <BoxSelect height={20} width={20} />
            </IconButton>
          </Container>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gapRow={16}
          >
            <IconButton size="xs" selected>
              <BoxSelect height={12} width={12} />
            </IconButton>
            <IconButton size="sm" selected>
              <BoxSelect height={14} width={14} />
            </IconButton>
            <IconButton size="md" selected>
              <BoxSelect height={16} width={16} />
            </IconButton>
            <IconButton size="lg" selected>
              <BoxSelect height={18} width={18} />
            </IconButton>
            <IconButton size="xl" selected>
              <BoxSelect height={20} width={20} />
            </IconButton>
          </Container>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gapRow={16}
          >
            <IconButton size="xs" disabled>
              <BoxSelect height={12} width={12} />
            </IconButton>
            <IconButton size="sm" disabled>
              <BoxSelect height={14} width={14} />
            </IconButton>
            <IconButton size="md" disabled>
              <BoxSelect height={16} width={16} />
            </IconButton>
            <IconButton size="lg" disabled>
              <BoxSelect height={18} width={18} />
            </IconButton>
            <IconButton size="xl" disabled>
              <BoxSelect height={20} width={20} />
            </IconButton>
          </Container>
        </Container>
      </Glass>

      <Glass color="#999" borderRadius={32} padding={24}>
        <Container flexDirection="column" gapRow={32}>
          <Container flexDirection="row" gapColumn={16}>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="pill" size="sm">
                <Text fontSize={12}>Label</Text>
              </Button>
              <Button style="pill" size="md">
                <Text fontSize={14}>Label</Text>
              </Button>
              <Button style="pill" size="lg">
                <Text fontSize={16}>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="pill" size="sm" platter>
                <Text fontSize={12}>Label</Text>
              </Button>
              <Button style="pill" size="md" platter>
                <Text fontSize={14}>Label</Text>
              </Button>
              <Button style="pill" size="lg" platter>
                <Text fontSize={16}>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="pill" size="sm" selected>
                <Text fontSize={12}>Label</Text>
              </Button>
              <Button style="pill" size="md" selected>
                <Text fontSize={14}>Label</Text>
              </Button>
              <Button style="pill" size="lg" selected>
                <Text fontSize={16}>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="pill" size="sm" disabled>
                <Text fontSize={12}>Label</Text>
              </Button>
              <Button style="pill" size="md" disabled>
                <Text fontSize={14}>Label</Text>
              </Button>
              <Button style="pill" size="lg" disabled>
                <Text fontSize={16}>Label</Text>
              </Button>
            </Container>
          </Container>

          <Container flexDirection="row" gapColumn={16}>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="rect" size="sm">
                <Text fontSize={12}>Label</Text>
              </Button>
              <Button style="rect" size="md">
                <Text fontSize={14}>Label</Text>
              </Button>
              <Button style="rect" size="lg">
                <Text fontSize={16}>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="rect" size="sm" platter>
                <Text fontSize={12}>Label</Text>
              </Button>
              <Button style="rect" size="md" platter>
                <Text fontSize={14}>Label</Text>
              </Button>
              <Button style="rect" size="lg" platter>
                <Text fontSize={16}>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="rect" size="sm" selected>
                <Text fontSize={12}>Label</Text>
              </Button>
              <Button style="rect" size="md" selected>
                <Text fontSize={14}>Label</Text>
              </Button>
              <Button style="rect" size="lg" selected>
                <Text fontSize={16}>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="rect" size="sm" disabled>
                <Text fontSize={12}>Label</Text>
              </Button>
              <Button style="rect" size="md" disabled>
                <Text fontSize={14}>Label</Text>
              </Button>
              <Button style="rect" size="lg" disabled>
                <Text fontSize={16}>Label</Text>
              </Button>
            </Container>
          </Container>
        </Container>
      </Glass>
    </Container>
  );
}
