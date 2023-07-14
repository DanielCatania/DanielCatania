import React from "react";
import { SizeOne, SizeThree, SizeTwo } from "./style";

interface TitleProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "S1" | "S2" | "S3";
  children?: React.ReactNode;
}

export default function Title({
  size = "S1",
  children,
  tag = "h1",
}: TitleProps) {
  let Component = SizeOne;
  switch (size) {
    case "S2":
      Component = SizeTwo;
      break;
    case "S3":
      Component = SizeThree;
      break;

    default:
      break;
  }
  return <Component as={tag}>{children}</Component>;
}
