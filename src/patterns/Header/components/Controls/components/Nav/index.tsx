import React from "react";
import Link from "next/link";
import NavBox from "./style";

export default function Nav() {
  return (
    <NavBox>
      <Link href="/">Home</Link>
      <Link href="/#about">Sobre</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/#contact">Contato</Link>
    </NavBox>
  );
}
