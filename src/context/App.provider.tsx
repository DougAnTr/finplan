import { HeroUIProvider } from "@heroui/react";
import { PropsWithChildren } from "react";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
