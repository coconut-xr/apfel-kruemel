import { FontFamilyProvider } from "@coconut-xr/koestlich";
import { PropsWithChildren } from "react";

type FontsProps = PropsWithChildren;

export function Fonts({ children }: FontsProps) {
  return (
    <FontFamilyProvider
      fontFamilies={{
        medium: ["/fonts/", "SF-Pro-Text-Medium.json"],
        bold: ["/fonts/", "SF-Pro-Text-Bold.json"],
      }}
      defaultFontFamily="medium"
    >
      {children}
    </FontFamilyProvider>
  );
}
