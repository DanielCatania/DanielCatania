import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.main["050"]};
  font-size: ${({ theme }) => theme.typography.fontSize["h01"]};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export default function HomeScreen() {
  return <Title>Hello</Title>;
}
