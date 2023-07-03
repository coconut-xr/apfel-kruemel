import {
  Container,
  DefaultStyleProvider,
  TextProperties,
} from "@coconut-xr/koestlich";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type Type = "plain" | "inset";

type ListProps = ComponentPropsWithoutRef<typeof Container> & {
  type?: Type;
};

type ListContext = {
  type: Type;
};

const ListContext = createContext<ListContext>({
  type: "plain",
});

export function List({ type = "plain", ...props }: ListProps) {
  const context = useMemo(() => ({ type }), [type]);
  return (
    <ListContext.Provider value={context}>
      <Container
        flexDirection="column"
        alignItems="stretch"
        gapRow={type === "plain" ? 8 : 1}
        {...props}
      />
    </ListContext.Provider>
  );
}

type ListItemProps = ComponentPropsWithoutRef<typeof Container> & {
  subtitle?: ReactNode;
  selected?: boolean;
  leadingAccessory?: ReactNode;
  trailingAccessory?: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
};

export function ListItem({
  children,
  subtitle,
  selected,
  leadingAccessory,
  trailingAccessory,
  isFirst,
  isLast,
  ...props
}: ListItemProps) {
  const [hoverCount, setHoverCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  const { type } = useContext(ListContext);

  return (
    <Container
      height={subtitle ? 72 : 60}
      borderRadius={type === "plain" ? 16 : undefined}
      borderRadiusTop={type === "inset" ? (isFirst ? 16 : 0) : undefined}
      borderRadiusBottom={type === "inset" ? (isLast ? 16 : 0) : undefined}
      paddingX={20}
      flexDirection="row"
      alignItems="center"
      gapColumn={16}
      backgroundColor={type === "plain" ? "white" : "black"}
      positionType="relative"
      backgroundOpacity={
        type === "plain"
          ? activeCount > 0
            ? 0.3
            : selected
            ? 0.2
            : hoverCount > 0
            ? 0.1
            : 0
          : hoverCount > 0
          ? 0.1
          : 0.2
      }
      {...props}
      onPointerEnter={(e) => {
        setHoverCount((current) => current + 1);
        props.onPointerEnter?.(e);
      }}
      onPointerLeave={(e) => {
        setHoverCount((current) => current - 1);
        props.onPointerLeave?.(e);
      }}
      onPointerDown={(e) => {
        setActiveCount((current) => current + 1);
        props.onPointerDown?.(e);
      }}
      onPointerUp={(e) => {
        setActiveCount((current) => current - 1);
        props.onPointerUp?.(e);
      }}
    >
      <DefaultStyleProvider color="white">
        {leadingAccessory && (
          <Container index={0}>{leadingAccessory}</Container>
        )}
        <Container index={1} flexDirection="column" flexGrow={1}>
          <DefaultStyleProvider<TextProperties> fontSize={18}>
            {children}
          </DefaultStyleProvider>
          <DefaultStyleProvider<TextProperties> fontSize={14} opacity={0.5}>
            {subtitle}
          </DefaultStyleProvider>
        </Container>
        {trailingAccessory && (
          <Container index={2}>{trailingAccessory}</Container>
        )}
      </DefaultStyleProvider>
    </Container>
  );
}
