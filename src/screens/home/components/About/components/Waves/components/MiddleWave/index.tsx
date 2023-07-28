import React from "react";
import MiddleWaveBox from "./style";
import { useTheme } from "styled-components";

export default function MiddleWave() {
  const theme = useTheme();

  return (
    <MiddleWaveBox
      d="M0 192L96 165.3C192 139 384 85 576 101.3C768 117 960 203 1152 224C1344 245 1536 203 1632 181.3L1728 160V320H1632C1536 320 1344 320 1152 320C960 320 768 320 576 320C384 320 192 320 96 320H0L0 192Z"
      fill={theme.colors.main["100"]}
    />
  );
}
