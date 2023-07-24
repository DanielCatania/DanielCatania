import React, { useContext } from "react";
import PresentationBox, { PresentationContainer } from "./style";
import AppContext from "@/AppContext";
import Title, { FirstLine, SecondLine, Subtitle } from "./components/Title";

export default function Presentation() {
  const mode = useContext(AppContext).mode.state;

  return (
    <PresentationBox className={mode}>
      <PresentationContainer>
        <Title size={{ type: "h", scale: 1 }} as="h1">
          <FirstLine>Olá, eu sou</FirstLine>{" "}
          <SecondLine>Daniel Catania :)</SecondLine>
        </Title>
        <Subtitle size={{ type: "h", scale: 2 }} as="h1">
          Programador Front-End
        </Subtitle>
      </PresentationContainer>
    </PresentationBox>
  );
}
