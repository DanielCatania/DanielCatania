import React, { useContext, useState } from "react";
import AppContext from "@/AppContext";
import MenuBox, { Window, ButtonMenu, ControlsContainer } from "./style";
import Controls from "../Controls";

export default function Menu() {
  const mode = useContext(AppContext).mode.state;
  const [itIsOpen, setItIsOpen] = useState(false);

  return (
    <MenuBox>
      <ButtonMenu
        onClick={() => setItIsOpen(!itIsOpen)}
        className={`${mode} ${itIsOpen ? "open" : "close"}`}
      />
      <Window className={`${mode} ${itIsOpen ? "open" : "close"}`}>
        <ControlsContainer>
          <Controls />
        </ControlsContainer>
      </Window>
    </MenuBox>
  );
}
