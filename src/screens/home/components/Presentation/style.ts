import styled from "styled-components";

const Presentation = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  color: ${({ theme }) => theme.colors.neutral["050"]};

  &.dark {
    background: ${({ theme }) => theme.colors.gradient["001"]};
    background-size: 300% 300%;
    animation: gradient 5s ease infinite;
  }
  &.light {
    background: ${({ theme }) => theme.colors.gradient["002"]};
    background-size: 300% 300%;
    animation: gradient 5s ease infinite;
  }

  @media screen and (min-width: 0px) {
    height: 70vh;
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const PresentationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 0px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
  }
`;

export default Presentation;
