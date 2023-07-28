import React from "react";

import WavesBox from "./style";
import FrontWave from "./components/FrontWave/";
import BackWave from "./components/BackWave/";
import MiddleWave from "./components/MiddleWave/";

export default function Waves() {
  return (
    <WavesBox viewBox="0 0 1440 320">
      <FrontWave />
      <MiddleWave />
      <BackWave />
    </WavesBox>
  );
}
