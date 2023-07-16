import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResponsiveAppBar from "./Components/Appbar/appbar";
import Main from "./Components/Layout/Main";
import Intro from "./Components/Intro/intro";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Main>
        <Intro />

        <Contact />
      </Main>
    </>
  );
}

export default App;
