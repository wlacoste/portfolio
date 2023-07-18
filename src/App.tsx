import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResponsiveAppBar from "./Components/Appbar/appbar";
import Main from "./Components/Layout/Main";
import Intro from "./Components/Intro/intro";
import Contact from "./Components/Contact/Contact";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer speed={1}>
          {/* <h2>hola gente</h2> */}
          <Intro />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <Contact />
          {/* <h2>hola final</h2> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
