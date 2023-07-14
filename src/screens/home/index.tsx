import React from "react";
import Header from "@/patterns/Header";
import Presentation from "./components/Presentation";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
      </main>
    </>
  );
}
