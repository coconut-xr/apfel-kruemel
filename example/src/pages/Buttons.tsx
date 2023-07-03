import { Glass, IconButton } from "@coconut-xr/apfel-kruemel";
import { Container, RootContainer } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";

export default function ButtonsPage() {
  return (
    <RootContainer anchorX="center" anchorY="center" precision={0.01}>
      <Glass color="#999" borderRadius={32} padding={24}>
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
    </RootContainer>
  );
}
