import React, { useContext } from "react";
import Link from "next/link";
import HeaderBox from "./style";
import AppContext from "@/AppContext";

import VisibilityContainer from "@/components/VisibilityContainer/";
import Logo from "./components/Logo";
import Controls from "./components/Controls";
import Menu from "./components/Menu";

export default function Header() {
  const mode = useContext(AppContext).mode.state;

  return (
    <HeaderBox className={mode}>
      <Link href="/">
        <Logo />
      </Link>
      <VisibilityContainer willApperIn="bigScreens">
        <Controls />
      </VisibilityContainer>
      <VisibilityContainer willApperIn="smallScreens">
        <Menu />
      </VisibilityContainer>
    </HeaderBox>
  );
}
