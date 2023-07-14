import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.light {
    background: ${({ theme }) => theme.colors.filter["002"]};
  }
  &.dark {
    background: ${({ theme }) => theme.colors.filter["001"]};
  }

  @media screen and (min-width: 0px) {
    padding: 12px 24px;
  }
  @media screen and (min-width: 744px) {
    padding: 24px 32px;
  }
  @media screen and (min-width: 1024px) {
    padding: 24px 64px;
  }
`;

export default Header;
