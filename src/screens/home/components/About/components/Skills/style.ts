import styled from "styled-components";

const SkillsBox = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.sizes.gap.card};

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral["150"]};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.main["050"]};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #5e9fd1;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  @media screen and (min-width: 0px) {
    grid-template-columns: repeat(
      2,
      ${({ theme }) => theme.sizes.dimension.card.width}
    );

    max-height: 350px;

    overflow-y: scroll;
  }
  @media screen and (min-width: 744px) {
    grid-template-columns: repeat(
      4,
      ${({ theme }) => theme.sizes.dimension.card.width}
    );

    max-height: none;
    overflow-y: initial;
  }
`;

export default SkillsBox;
