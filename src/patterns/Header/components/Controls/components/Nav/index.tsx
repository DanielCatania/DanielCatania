import React from "react";
import Link from "next/link";
import NavBox from "./style";
import Text from "@/components/Text";
import { ISize } from "@/components/Text/types";

export default function Nav() {
  const size: ISize = {
    type: "b",
    scale: 2,
  };
  return (
    <NavBox>
      <Link href="/">
        <Text size={size}>Home</Text>
      </Link>
      <Link href="/#about">
        <Text size={size}>Sobre</Text>
      </Link>
      <Link href="/projects">
        <Text size={size}>Projetos</Text>
      </Link>
      <Link href="/#contact">
        <Text size={size}>Contato</Text>
      </Link>
    </NavBox>
  );
}
