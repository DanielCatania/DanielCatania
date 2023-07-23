import styled from "styled-components";
import TextProps from "./types";

const Text = styled.p.withConfig({
  shouldForwardProp: (props) => !["size", "colors"].includes(props),
})<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme, colors }) =>
    theme.colors[colors?.default?.palette || "neutral"][
      colors?.default?.intensity || "050"
    ]};

  &.dark {
    color: ${({ theme, colors }) =>
      theme.colors[colors?.dark?.palette || "neutral"][
        colors?.dark?.intensity || "050"
      ]};
  }

  &.light {
    color: ${({ theme, colors }) =>
      theme.colors[colors?.light?.palette || "neutral"][
        colors?.light?.intensity || "050"
      ]};
  }

  @media screen and (min-width: 0px) {
    font-size: ${({ theme, size }) =>
      theme.typography.fontSize[`${size?.type || "b"}${size?.scale + 2 || 3}`]};
  }
  @media screen and (min-width: 744px) {
    font-size: ${({ theme, size }) =>
      theme.typography.fontSize[`${size?.type || "b"}${size?.scale + 1 || 2}`]};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme, size }) =>
      theme.typography.fontSize[`${size?.type || "b"}${size?.scale || 1}`]};
  }
`;

export default Text;
