import React, { useContext } from "react";
import AboutBox, { AboutContainer, TextContainer } from "./style";
import Text from "@/components/Text";
import AppContext from "@/AppContext";
import Skills from "./components/Skills";

export default function About() {
  const mode = useContext(AppContext).mode.state;

  return (
    <AboutBox className={mode}>
      <TextContainer>
        <Text size={{ type: "h", scale: 1 }} as="h2">
          Sobre Mim
        </Text>
        <Text>
          Um apaixonado por tecnologia, pendurador de peças profissional ♟️ e um
          escalador nas montanhas de Hyrule.
        </Text>
        <Text>
          Iniciei minha jornada no mundo da programação com um evento canônico 🕷
          para quase todo programador: o curso de {"HTML e CSS"} do lendário
          Gustavo Guanabara no {"Curso em Vídeo"}. Esse curso foi o ponto de
          partida que abriu as portas do universo da programação para mim,
          despertando meu interesse e me impulsionando a me aventurar nesse
          campo. 🌌🚀
        </Text>
        <Text>
          Mergulhei de cabeça 🤿 e aprofundei-me no HTML e CSS, logo em seguida,
          aprendi JavaScript e descobri o poder da combinação React + Next.js.
          Ao longo dessa jornada, desenvolvi diversos projetos e aprimorei
          minhas habilidades, que convido você a explorar na seção de projetos
          do meu portfólio ou em meu perfil do GitHub. Lá, você poderá conferir
          meu trabalho.
        </Text>
      </TextContainer>
      <AboutContainer>
        <Text size={{ type: "h", scale: 1 }} as="h2">
          Skills
        </Text>
        <Skills />
      </AboutContainer>
    </AboutBox>
  );
}
