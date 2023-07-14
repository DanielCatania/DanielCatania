import React, { useContext } from "react";
import ThemeSwitchBox from "./style";
import AppContext from "@/AppContext";
import Image from "next/image";

export default function ThemeSwitch() {
  const { mode } = useContext(AppContext);

  return (
    <ThemeSwitchBox
      onClick={() => mode.set(mode.state === "dark" ? "light" : "dark")}
    >
      <Image
        src={`/img/theme/${mode.state}.svg`}
        alt={mode.state}
        width={40}
        height={40}
      />
    </ThemeSwitchBox>
  );
}
