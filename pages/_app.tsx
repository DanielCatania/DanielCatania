import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import GlobalStyle from "@/theme/GlobalStyle";
import theme from "@/theme/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
