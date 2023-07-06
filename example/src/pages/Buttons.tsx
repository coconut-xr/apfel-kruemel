import { Button, Glass, IconButton } from "@coconut-xr/apfel-kruemel";
import { Container, Text } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function ButtonsPage() {
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
              <BoxSelect />
            </IconButton>
            <IconButton size="sm">
              <BoxSelect />
            </IconButton>
            <IconButton size="md">
              <BoxSelect />
            </IconButton>
            <IconButton size="lg">
              <BoxSelect />
            </IconButton>
            <IconButton size="xl">
              <BoxSelect />
            </IconButton>
          </Container>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gapRow={16}
          >
            <IconButton size="xs" platter>
              <BoxSelect />
            </IconButton>
            <IconButton size="sm" platter>
              <BoxSelect />
            </IconButton>
            <IconButton size="md" platter>
              <BoxSelect />
            </IconButton>
            <IconButton size="lg" platter>
              <BoxSelect />
            </IconButton>
            <IconButton size="xl" platter>
              <BoxSelect />
            </IconButton>
          </Container>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gapRow={16}
          >
            <IconButton size="xs" selected>
              <BoxSelect />
            </IconButton>
            <IconButton size="sm" selected>
              <BoxSelect />
            </IconButton>
            <IconButton size="md" selected>
              <BoxSelect />
            </IconButton>
            <IconButton size="lg" selected>
              <BoxSelect />
            </IconButton>
            <IconButton size="xl" selected>
              <BoxSelect />
            </IconButton>
          </Container>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gapRow={16}
          >
            <IconButton size="xs" disabled>
              <BoxSelect />
            </IconButton>
            <IconButton size="sm" disabled>
              <BoxSelect />
            </IconButton>
            <IconButton size="md" disabled>
              <BoxSelect />
            </IconButton>
            <IconButton size="lg" disabled>
              <BoxSelect />
            </IconButton>
            <IconButton size="xl" disabled>
              <BoxSelect />
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
                <Text>Label</Text>
              </Button>
              <Button style="pill" size="md">
                <Text>Label</Text>
              </Button>
              <Button style="pill" size="lg">
                <Text>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="pill" size="sm" platter>
                <Text>Label</Text>
              </Button>
              <Button style="pill" size="md" platter>
                <Text>Label</Text>
              </Button>
              <Button style="pill" size="lg" platter>
                <Text>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="pill" size="sm" selected>
                <Text>Label</Text>
              </Button>
              <Button style="pill" size="md" selected>
                <Text>Label</Text>
              </Button>
              <Button style="pill" size="lg" selected>
                <Text>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="pill" size="sm" disabled>
                <Text>Label</Text>
              </Button>
              <Button style="pill" size="md" disabled>
                <Text>Label</Text>
              </Button>
              <Button style="pill" size="lg" disabled>
                <Text>Label</Text>
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
                <Text>Label</Text>
              </Button>
              <Button style="rect" size="md">
                <Text>Label</Text>
              </Button>
              <Button style="rect" size="lg">
                <Text>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="rect" size="sm" platter>
                <Text>Label</Text>
              </Button>
              <Button style="rect" size="md" platter>
                <Text>Label</Text>
              </Button>
              <Button style="rect" size="lg" platter>
                <Text>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="rect" size="sm" selected>
                <Text>Label</Text>
              </Button>
              <Button style="rect" size="md" selected>
                <Text>Label</Text>
              </Button>
              <Button style="rect" size="lg" selected>
                <Text>Label</Text>
              </Button>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              gapRow={16}
            >
              <Button style="rect" size="sm" disabled>
                <Text>Label</Text>
              </Button>
              <Button style="rect" size="md" disabled>
                <Text>Label</Text>
              </Button>
              <Button style="rect" size="lg" disabled>
                <Text>Label</Text>
              </Button>
            </Container>
          </Container>
        </Container>
      </Glass>
    </Container>
  );
}
