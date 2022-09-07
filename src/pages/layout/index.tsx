import { useEffect, useState,useRef,useContext } from "react";
import { LayoutContent, Navbar, Timer, Button } from "./layout.styles";
import {PomodoroMethods} from "../../components/PomodoroMethods"
import {PomodoroContext} from "../../context/PomodoroContext"
import {CountdownContext} from "../../context/CountdownContext"

function Layout() {
  const {StartTime,StopTime,timeIsStop} = useContext(CountdownContext)
  const {alterColor,bgColor} = useContext(PomodoroContext)
 
  console.log("Renderizou")

  return (
    <>
      <LayoutContent bg={bgColor} colors={alterColor}>
        <Navbar colors={alterColor}>
          <h1>Pomodoro</h1>
        </Navbar>
         <PomodoroMethods/>
   

         {timeIsStop ? (
            <Button
            bg={bgColor}
            shadow={timeIsStop}
            onClick={() => StartTime()}>Start</Button>
         )
         :
         (
            <Button
            bg={bgColor}
            shadow={timeIsStop}
            onClick={() => StopTime()}>Pause</Button>
         )}
      </LayoutContent>
      
    </>
  );
}

export default Layout;
