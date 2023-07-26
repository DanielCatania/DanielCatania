import styled from "styled-components";

const Section = styled.section`
  @media screen and (min-width: 0px) {
    padding: ${({ theme }) => theme.sizes.padding.section["xs"]};
  }
  @media screen and (min-width: 744px) {
    padding: ${({ theme }) => theme.sizes.padding.section["md"]};
  }
  @media screen and (min-width: 1024px) {
    padding: ${({ theme }) => theme.sizes.padding.section["lg"]};
  }
`;

export default Section;
