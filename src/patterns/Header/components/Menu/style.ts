import styled from "styled-components";

const Menu = styled.div`
  position: relative;

  width: 30px;
  height: 30px;
`;

export const Window = styled.div`
  position: absolute;
  width: 300px;

  height: calc(100vh + 50px);
  padding: 40px 30px;
  top: -50px;

  transition: 0.5s;

  &.close {
    right: -400px;
  }

  &.open {
    right: -32px;
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.main["100"]};
  }
  &.dark {
    background-color: ${({ theme }) => theme.colors.main["150"]};
  }
`;

export const ButtonMenu = styled.button`
  z-index: 1;
  background-color: transparent;
  cursor: pointer;

  &,
  &::after,
  &::before {
    width: 30px;
    height: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    transition: 0.5s;
  }

  &::after {
    content: "";
    top: 10px;
  }

  &::before {
    content: "";
    top: 20px;
  }

  &.open {
    transform: rotate(45deg);
  }

  &.open::after,
  &.open::before {
    top: 0;
    transform: rotate(90deg);
  }

  &.dark,
  &.dark::after,
  &.dark::before {
    background-color: ${({ theme }) => theme.colors.main["050"]};
  }

  &.light,
  &.light::after,
  &.light::before {
    background-color: ${({ theme }) => theme.colors.main["150"]};
  }
`;

export const ControlsContainer = styled.div`
  width: 50%;
`;

export default Menu;
