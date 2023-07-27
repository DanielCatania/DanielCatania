import SkillBox, { SkillImage, SkillName } from "./style";

export interface SkillProps {
  src: string;
  alt: string;
  children: string;
}

export default function Skill({ src, alt, children }: SkillProps) {
  return (
    <SkillBox>
      <SkillImage src={`/img/skills/${src}`} alt={alt} />
      <SkillName>{children}</SkillName>
    </SkillBox>
  );
}
