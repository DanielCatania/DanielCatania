import React, { useContext } from "react";
import BackWaveBox from "./style";
import AppContext from "@/AppContext";
import { useTheme } from "styled-components";

export default function BackWave() {
  const mode = useContext(AppContext).mode.state;
  const theme = useTheme();

  return (
    <BackWaveBox
      d="M0 160L57.6 181.3C115.2 203 230.4 245 345.6 250.7C460.8 256 576 224 691.2 186.7C806.4 149 921.6 107 1036.8 117.3C1152 128 1267.2 192 1382.4 234.7C1497.6 277 1612.8 299 1670.4 309.3L1728 320H1670.4C1612.8 320 1497.6 320 1382.4 320C1267.2 320 1152 320 1036.8 320C921.6 320 806.4 320 691.2 320C576 320 460.8 320 345.6 320C230.4 320 115.2 320 57.6 320H0L0 160Z"
      fill={
        mode === "dark" ? theme.colors.main["200"] : theme.colors.main["050"]
      }
    />
  );
}
