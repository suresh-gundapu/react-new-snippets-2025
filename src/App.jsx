import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WelcomeReact from "./Tasks/1_Introduction/WelcomeReact";
import Props_child_parent_1 from "./Tasks/2_Components/Props_child_parent1";
import Props_child_parent_2 from "./Tasks/2_Components/Props_child_parent_2";
import TimerComp from "./Tasks/4_StateLifecycle/TimerComp";

function App() {
  return (
    <>
      <WelcomeReact />
      <Props_child_parent_1 />
      <TimerComp />
    </>
  );
}

export default App;
