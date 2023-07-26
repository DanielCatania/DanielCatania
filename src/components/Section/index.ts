import styled from "styled-components";

const Section = styled.section`
  @media screen and (min-width: 0px) {
    padding: ${({ theme }) => theme.sizes.padding["xs"]};
  }
  @media screen and (min-width: 744px) {
    padding: ${({ theme }) => theme.sizes.padding["md"]};
  }
  @media screen and (min-width: 1024px) {
    padding: ${({ theme }) => theme.sizes.padding["lg"]};
  }
`;

export default Section;
