import styled from "styled-components";
import Text from "@/components/Text";

export const SkillsContainer = styled.ul`
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
      3,
      ${({ theme }) => theme.sizes.dimension.card.width}
    );

    max-height: none;
    overflow-y: initial;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(
      4,
      ${({ theme }) => theme.sizes.dimension.card.width}
    );
  }
`;

export const SkillBox = styled.li`
  width: ${({ theme }) => theme.sizes.dimension.card.width};
  height: ${({ theme }) => theme.sizes.dimension.card.height};

  padding: ${({ theme }) => theme.sizes.padding.card};
  border-radius: ${({ theme }) => theme.sizes.radius};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main["050"]};
`;

export const SkillName = styled(Text)`
  font-size: ${({ theme }) => theme.typography.fontSize["b3"]};

  color: ${({ theme }) => theme.colors.neutral["250"]};
`;

export const SkillImage = styled.img`
  width: ${({ theme }) => theme.sizes.dimension.icon.width};
  height: ${({ theme }) => theme.sizes.dimension.icon.height};
`;
