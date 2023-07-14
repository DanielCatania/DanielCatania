import styled from "styled-components";

export const SizeOne = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};

  @media screen and (min-width: 0px) {
    font-size: ${({ theme }) => theme.typography.fontSize["h03"]};
  }
  @media screen and (min-width: 744px) {
    font-size: ${({ theme }) => theme.typography.fontSize["h02"]};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.fontSize["h01"]};
  }
`;

export const SizeTwo = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};

  @media screen and (min-width: 0px) {
    font-size: ${({ theme }) => theme.typography.fontSize["b01"]};
  }
  @media screen and (min-width: 744px) {
    font-size: ${({ theme }) => theme.typography.fontSize["h03"]};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.fontSize["h02"]};
  }
`;

export const SizeThree = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};

  @media screen and (min-width: 0px) {
    font-size: ${({ theme }) => theme.typography.fontSize["b02"]};
  }
  @media screen and (min-width: 744px) {
    font-size: ${({ theme }) => theme.typography.fontSize["b01"]};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.fontSize["h03"]};
  }
`;
