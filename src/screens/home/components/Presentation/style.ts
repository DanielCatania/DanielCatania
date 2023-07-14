import styled from "styled-components";

const Presentation = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  color: ${({ theme }) => theme.colors.neutral["050"]};

  &.dark {
    background: ${({ theme }) => theme.colors.gradient["001"]};
  }
  &.light {
    background: ${({ theme }) => theme.colors.gradient["002"]};
  }

  @media screen and (min-width: 0px) {
    height: 70vh;
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 0px) {
    max-width: 320px;
    align-items: flex-start;
  }

  @media screen and (min-width: 744px) {
    max-width: 420px;
  }

  @media screen and (min-width: 1024px) {
    max-width: none;
    align-items: center;
  }
`;

export const Emphasis = styled.span`
  color: ${({ theme }) => theme.colors.main["050"]};
`;

export default Presentation;
