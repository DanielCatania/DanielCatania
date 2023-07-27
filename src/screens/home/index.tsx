import React from "react";
import Header from "@/patterns/Header";
import Presentation from "./components/Presentation";
import About from "./components/About";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
      </main>
    </>
  );
}
