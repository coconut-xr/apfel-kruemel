import { Container, DefaultStyleProvider } from "@coconut-xr/koestlich";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { Glass } from ".";

type TabBarContext = {
  value: unknown;
  setValue(value: unknown): void;
  isExpanded: boolean;
  setIsExpanded(value: SetStateAction<boolean>): void;
};

const TabBarContext = createContext<TabBarContext | undefined>(undefined);

type TabBarProps<T> = ComponentPropsWithoutRef<typeof Glass> & {
  value?: T;
  defaultValue?: T;
  onValueChange?(value: T): void;
};

export function TabBar<T>({
  value: valueProp,
  defaultValue,
  onValueChange,
  ...props
}: TabBarProps<T>) {
  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue,
  );
  const value = valueProp !== undefined ? valueProp : internalValue;

  const setValue = useCallback((value: T) => {
    setInternalValue(value);
    onValueChange?.(value);
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const context = useMemo(
    () => ({ isExpanded, setIsExpanded, value, setValue }),
    [isExpanded, value],
  );

  const hoverCountRef = useRef<number>(0);
  const timeoutRef = useRef<number>();

  function onPointerEnter() {
    hoverCountRef.current += 1;
    timeoutRef.current = setTimeout(() => setIsExpanded(true), 300);
  }

  function onPointerLeave() {
    hoverCountRef.current -= 1;
    if (hoverCountRef.current === 0 && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setIsExpanded(false);
    }
  }

  return (
    <TabBarContext.Provider value={context}>
      <Container width={68} minHeight={68} positionType="relative">
        <Glass
          positionType="absolute"
          positionLeft={0}
          borderRadius={34}
          minHeight={68}
          minWidth={68}
          padding={8}
          border={4}
          flexDirection="column"
          gapRow={8}
          {...props}
          onPointerEnter={(e) => {
            onPointerEnter();
            props.onPointerEnter?.(e);
          }}
          onPointerLeave={(e) => {
            onPointerLeave();
            props.onPointerLeave?.(e);
          }}
        />
      </Container>
    </TabBarContext.Provider>
  );
}

type TabBarItemProps<T> = ComponentPropsWithoutRef<typeof Container> & {
  value: T;
  icon: ReactNode;
};

export function TabBarItem<T>({
  value: tabValue,
  children,
  icon,
  ...props
}: TabBarItemProps<T>) {
  const { isExpanded, value, setValue } = useContext(TabBarContext)!;

  const isSelected = value === tabValue;

  const [isHovered, setIsHovered] = useState(false);
  const hoverCountRef = useRef<number>(0);

  return (
    <Container
      minWidth={44}
      height={44}
      borderRadius={22}
      backgroundColor="white"
      backgroundOpacity={isSelected ? 0.2 : isHovered ? 0.1 : 0}
      flexDirection="row"
      alignItems="center"
      gapColumn={10}
      {...props}
      onPointerEnter={(e) => {
        if (hoverCountRef.current === 0) setIsHovered(true);
        hoverCountRef.current += 1;
        props.onPointerEnter?.(e);
      }}
      onPointerLeave={(e) => {
        hoverCountRef.current -= 1;
        if (hoverCountRef.current === 0) setIsHovered(false);
        props.onPointerLeave?.(e);
      }}
      onClick={(e) => {
        setValue(tabValue);
        props.onClick?.(e);
      }}
    >
      <DefaultStyleProvider color="white" fontSize={16}>
        <Container width={44} flexDirection="row" justifyContent="center">
          <DefaultStyleProvider width={18} height={18}>
            {icon}
          </DefaultStyleProvider>
        </Container>
        {isExpanded && <Container paddingRight={28}>{children}</Container>}
      </DefaultStyleProvider>
    </Container>
  );
}
