import React from "react";
import { BigScreens, SmallScreens } from "./style";

interface VisibilityContainerProps {
  children: React.ReactNode;
  willApperIn: "bigScreens" | "smallScreens";
}

export default function VisibilityContainer({
  willApperIn,
  children,
}: VisibilityContainerProps) {
  const Component = willApperIn === "bigScreens" ? BigScreens : SmallScreens;

  return <Component>{children}</Component>;
}
