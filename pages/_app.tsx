import React, { useState } from "react";
import { AppProps } from "next/app";
import GlobalStyle from "@/theme/GlobalStyle";
import theme from "@/theme/theme";
import { ThemeProvider } from "styled-components";
import AppContext from "@/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  const [modeSelected, setModeSelected] = useState<"dark" | "light">("dark");

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{ mode: { state: modeSelected, set: setModeSelected } }}
        >
          <Component {...pageProps} />
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}
