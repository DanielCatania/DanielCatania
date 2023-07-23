import React, { useContext } from "react";
import PresentationBox, { PresentationContainer, Emphasis } from "./style";
import AppContext from "@/AppContext";
import Text from "@/components/Text";

export default function Presentation() {
  const mode = useContext(AppContext).mode.state;

  return (
    <PresentationBox className={mode}>
      <PresentationContainer>
        <Text size={{ type: "h", scale: 1 }} as="h1">
          Olá, eu sou <Emphasis>Daniel Catania :)</Emphasis>
        </Text>
        <Text size={{ type: "h", scale: 2 }} as="h1">
          Programador Front-End
        </Text>
      </PresentationContainer>
    </PresentationBox>
  );
}
