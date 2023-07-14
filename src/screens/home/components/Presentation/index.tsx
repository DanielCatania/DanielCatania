import React, { useContext } from "react";
import PresentationBox, { Text, Emphasis } from "./style";
import AppContext from "@/AppContext";
import Title from "@/components/Title";

export default function Presentation() {
  const mode = useContext(AppContext).mode.state;

  return (
    <PresentationBox className={mode}>
      <Text>
        <Title size="S1">
          Olá, eu sou <Emphasis>Daniel Catania :)</Emphasis>
        </Title>
        <Title size="S2">Programador Front-End</Title>
      </Text>
    </PresentationBox>
  );
}
