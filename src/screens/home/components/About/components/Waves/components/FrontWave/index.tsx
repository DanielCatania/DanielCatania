import React, { useContext } from "react";
import FrontWaveBox from "./style";
import AppContext from "@/AppContext";
import { useTheme } from "styled-components";

export default function FrontWave() {
  const mode = useContext(AppContext).mode.state;
  const theme = useTheme();

  return (
    <FrontWaveBox
      d="M0 192L41.16 176C82.32 160 164.4 128 247.2 128C329.16 128 411.6 160 493.2 144C576 128 658.8 64 740.4 48C822.84 32 904.8 64 987.6 101.3C1069.68 139 1152 181 1234.8 170.7C1316.52 160 1399.2 96 1480.8 69.3C1563.48 43 1645.2 53 1687.2 58.7L1728 64V320H1686.84C1645.68 320 1563.6 320 1480.8 320C1398.84 320 1316.4 320 1234.8 320C1152 320 1069.2 320 987.6 320C905.16 320 823.2 320 740.4 320C658.32 320 576 320 493.2 320C411.48 320 328.8 320 247.2 320C164.52 320 82.8 320 40.8 320H0L0 192Z"
      fill={
        mode === "dark" ? theme.colors.main["050"] : theme.colors.main["200"]
      }
    />
  );
}
