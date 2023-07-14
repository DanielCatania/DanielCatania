import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 2;

  color: ${({ theme }) => theme.colors.neutral["050"]};
  font-family: ${({ theme }) => theme.typography.fontFamily};

  @media screen and (min-width: 0px) {
    font-size: ${({ theme }) => theme.typography.fontSize["b04"]};
    flex-direction: column;
    gap: 16px;
  }
  @media screen and (min-width: 744px) {
    font-size: ${({ theme }) => theme.typography.fontSize["b03"]};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.fontSize["b02"]};
    flex-direction: row;
  }
`;

export default Nav;
