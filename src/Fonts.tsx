import { FontFamilyProvider } from "@coconut-xr/koestlich";
import { PropsWithChildren } from "react";

type FontsProps = PropsWithChildren;

export function Fonts({ children }: FontsProps) {
  return (
    <FontFamilyProvider
      fontFamilies={{
        medium: ["https://coconut-xr.github.io/msdf-fonts/", "inter.json"],
        bold: ["https://coconut-xr.github.io/msdf-fonts/", "inter-bold.json"],
      }}
      defaultFontFamily="medium"
    >
      {children}
    </FontFamilyProvider>
  );
}
