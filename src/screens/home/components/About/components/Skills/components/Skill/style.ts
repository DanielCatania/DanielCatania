import styled from "styled-components";
import Text from "@/components/Text";

const SkillBox = styled.li`
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

export default SkillBox;
