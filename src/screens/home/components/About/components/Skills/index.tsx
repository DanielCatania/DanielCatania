import React from "react";
import SkillslBox from "./style";
import skillsData from "./data";
import Skill from "./components/Skill";

export default function Skills() {
  return (
    <SkillslBox>
      {skillsData.map(({ children, ...props }) => (
        <Skill key={children} {...props}>
          {children}
        </Skill>
      ))}
    </SkillslBox>
  );
}
