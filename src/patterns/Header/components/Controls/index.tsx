import React from "react";
import ControlsBox from "./style";

import ThemeSwitch from "./components/ThemeSwitch";
import Nav from "./components/Nav";

export default function Controls() {
  return (
    <ControlsBox>
      <Nav />
      <ThemeSwitch />
    </ControlsBox>
  );
}
