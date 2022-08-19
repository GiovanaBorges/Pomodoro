import { LayoutContent, Navbar, Timer, Button } from "./layout.styles";
import { styleColors } from "../../styles";
import { useEffect, useState,useRef } from "react";

function Layout() {
  const [bgColor, setbgColor] = useState("#DA4747");
  const [color, setColor] = useState("#F86A6A");
  const [time,setTime] = useState<number>(25)

  const horaAtual = useRef<number>()
  const [timeStart,setTimeStart] = useState(false)
  const [timeTest,setTimeTest] = useState(25)
  

  function StartTime() {
    new Audio('/assets/cavalo-ratinho.mp3').play();
    setTimeStart(true)
    horaAtual.current = window.setInterval(()=>{
      setTimeTest((prev) => prev -1)
    },1000);

  }

  function StopTime(){
    new Audio('/assets/pause.mp3').play();
    window.clearInterval(horaAtual.current)
    setTimeStart(false)
  }

  const changeColor = {
    pomodoro() {
      setbgColor(styleColors.pomodoro.bgcolor);
      setColor(styleColors.pomodoro.color);
      setTime(styleColors.pomodoro.time)
      setTimeTest(styleColors.pomodoro.time)
    },
    short() {
      setbgColor(styleColors.short.bgcolor);
      setColor(styleColors.short.color);
      setTime(styleColors.short.time)
      setTimeTest(styleColors.short.time)
    },
    long() {
      setbgColor(styleColors.long.bgcolor);
      setColor(styleColors.long.color);
      setTime(styleColors.long.time)
      setTimeTest(styleColors.long.time)
    },
  };

  return (
    <>
      <LayoutContent bg={bgColor} colors={color}>
        <Navbar colors={color}>
          <h1>Pomodoro</h1>
        </Navbar>
        <Timer colors={color} bg={bgColor}>
          <ul>
            <li onClick={changeColor.pomodoro}>Pomodoro</li>
            <li onClick={changeColor.short}>Short break</li>
            <li onClick={changeColor.long}>Long break</li>
          </ul>
          <h1>{timeTest}</h1>
          {timeStart? (
            <Button onClick={StopTime} shadow={timeStart} bg={bgColor} >Stop</Button>
          ):(
            <Button onClick={StartTime} shadow={timeStart} bg={bgColor} >Start</Button>
          )}
          
          
        </Timer>
      </LayoutContent>
    </>
  );
}

export default Layout;
