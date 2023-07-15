import React from "react";
import { AppProps } from "next/app";

import GlobalStyle from "@/theme/GlobalStyle";
import theme from "@/theme/theme";
import { ThemeProvider } from "styled-components";

import AppContext from "@/AppContext";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function App({ Component, pageProps }: AppProps) {
  const [modeSelected, setModeSelected] = useLocalStorage("MODE", "dark");

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
