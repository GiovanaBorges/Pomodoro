import React from "react";
import Layout from "./pages/layout";
import { CountdownProvider } from "./context/CountdownContext";
import { PomodoroProvider } from "./context/PomodoroContext";

function App() {
  return (
    <>
    <PomodoroProvider>
    <CountdownProvider>
      <Layout />
    </CountdownProvider> 
    </PomodoroProvider>
    </> 
  )
}

export default App;
