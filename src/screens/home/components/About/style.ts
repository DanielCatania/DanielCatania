import styled from "styled-components";
import Section from "@/components/Section";

const AboutBox = styled(Section)`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  @media screen and (min-width: 0px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.main["100"]};
  }
  &.dark {
    background-color: ${({ theme }) => theme.colors.main["150"]};
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 0px) {
    align-items: center;
    width: 100%;
    text-align: center;
  }
  @media screen and (min-width: 1024px) {
    width: min-content;
    align-items: flex-start;
    text-align: left;
  }
`;

export const TextContainer = styled(AboutContainer)`
  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 400px;
  }
`;

export default AboutBox;
