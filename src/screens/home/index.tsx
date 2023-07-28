import React from "react";
import Header from "@/patterns/Header";
import Presentation from "./components/Presentation";
import About from "./components/About";

// momentary
import { useContext } from "react";
import AppContext from "@/AppContext";
import Projects from "./components/Projects";

export default function HomeScreen() {
  // momentary
  const mode = useContext(AppContext).mode.state;

  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Projects className={mode} /> {/* momentary */}
      </main>
    </>
  );
}
