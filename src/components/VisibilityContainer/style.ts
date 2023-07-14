import styled from "styled-components";

export const BigScreens = styled.div`
  @media screen and (min-width: 0px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
export const SmallScreens = styled.div`
  @media screen and (min-width: 0px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
