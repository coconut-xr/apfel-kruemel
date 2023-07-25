import { Container, DefaultStyleProvider, TextProperties } from "@coconut-xr/koestlich";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useRef,
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
  const hoverCountRef = useRef(0);
  const [isHovered, setIsHovered] = useState(hoverCountRef.current > 0);
  const activeSet = useMemo(() => new Set<number>(), []);
  const [isActive, setIsActive] = useState(activeSet.size > 0);

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
          ? isActive
            ? 0.3
            : selected
            ? 0.2
            : isHovered
            ? 0.1
            : 0
          : isHovered
          ? 0.1
          : 0.2
      }
      {...props}
      onPointerEnter={(e) => {
        hoverCountRef.current++;
        setIsHovered(hoverCountRef.current > 0);
        props.onPointerEnter?.(e);
      }}
      onPointerLeave={(e) => {
        hoverCountRef.current--;
        setIsHovered(hoverCountRef.current > 0);
        props.onPointerLeave?.(e);
      }}
      onPointerDown={(e) => {
        activeSet.add(e.pointerId);
        setIsActive(activeSet.size > 0);
        props.onPointerDown?.(e);
      }}
      onPointerUp={(e) => {
        activeSet.delete(e.pointerId);
        setIsActive(activeSet.size > 0);
        props.onPointerUp?.(e);
      }}
    >
      <DefaultStyleProvider color="white">
        {leadingAccessory && <Container index={0}>{leadingAccessory}</Container>}
        <Container index={1} flexDirection="column" flexGrow={1}>
          <DefaultStyleProvider<TextProperties> fontSize={18}>{children}</DefaultStyleProvider>
          <DefaultStyleProvider<TextProperties> fontSize={14} opacity={0.5}>
            {subtitle}
          </DefaultStyleProvider>
        </Container>
        {trailingAccessory && <Container index={2}>{trailingAccessory}</Container>}
      </DefaultStyleProvider>
    </Container>
  );
}
