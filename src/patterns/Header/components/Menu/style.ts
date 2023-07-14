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
  padding-top: 50px;
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
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;

  background-color: transparent;
  cursor: pointer;
`;

export const ControlsContainer = styled.div`
  width: 50%;
`;

export default Menu;
