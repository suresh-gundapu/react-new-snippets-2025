import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WelcomeReact from "./Tasks/1_Introduction/WelcomeReact";
import Props_child_parent_1 from "./Tasks/2_Components/Props_child_parent1";
import Props_child_parent_2 from "./Tasks/2_Components/Props_child_parent_2";
import TimerComp from "./Tasks/4_StateLifecycle/TimerComp";
import UseFetchhook1 from "./Tasks/5_Hooks/UseFetchhook1";
import UseLoginForm from "./Tasks/5_Hooks/UseLoginForm";

import ProductSearch from "./Tasks/5_Hooks/ProductSearch";

function App() {
  return (
    <>
      <WelcomeReact />
      <Props_child_parent_1 />
      <TimerComp />
      <UseFetchhook1 />
      <UseLoginForm />
      <ProductSearch />
    </>
  );
}

export default App;
