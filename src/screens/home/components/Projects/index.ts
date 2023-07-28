// momentary

import Section from "@/components/Section";
import styled from "styled-components";

const Projects = styled(Section)`
  width: 100%;
  height: 100vh;

  &.light {
    background-color: ${({ theme }) => theme.colors.main["050"]};
  }

  &.dark {
    background-color: ${({ theme }) => theme.colors.main["200"]};
  }
`;

export default Projects;
