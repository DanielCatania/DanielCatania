import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;

  color: ${({ theme }) => theme.colors.neutral["050"]};
  font-family: ${({ theme }) => theme.typography.fontFamily};

  @media screen and (min-width: 0px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default Nav;
