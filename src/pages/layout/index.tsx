import { LayoutContent, Navbar, Timer, Button } from "./layout.styles";
import { styleColors } from "../../styles";
import {useState,useRef } from "react";


function Layout() {
  const [bgColor, setbgColor] = useState("#DA4747");
  const [color, setColor] = useState("#F86A6A");
  //const [time,setTime] = useState<String>('25:00')
  const [minutes,setMinutes] = useState<number>(25)
  const [seconds,setSeconds] = useState<number>(0)

  const timeRef = useRef<number>()
  const [timeStart,setTimeStart] = useState(false)
  

  function StartTime() {
    new Audio('/assets/click-stop.wav').play();
    setTimeStart(true)
    Count()
  }

  function Count(){
    let seconds = 59
    let minutesCurrent = minutes

    timeRef.current = window.setInterval(()=>{
      seconds -=1
      setSeconds(seconds)

      if(seconds === 0){
        if(minutesCurrent === 0 && seconds === 0 ){
          window.clearInterval(timeRef.current)
          new Audio('/assets/congratualations.mp3').play()
          alert("The time is over")
          StopTime()
        }else{
          
        setSeconds(seconds = 59)
        setMinutes(minutesCurrent -=1)
        }
      }

    },1000);
  }

  function StopTime(){
    new Audio('/assets/click-start.wav').play();
    window.clearInterval(timeRef.current)
    setTimeStart(false)
    
  }

  const changeColor = {
    pomodoro() {
      setbgColor(styleColors.pomodoro.bgcolor);
      setColor(styleColors.pomodoro.color);
      setMinutes(parseInt(styleColors.pomodoro.time.split(":",1).join("")))
    },
    short() {
      setbgColor(styleColors.short.bgcolor);
      setColor(styleColors.short.color);
      setMinutes(parseInt(styleColors.short.time.split(":",1).join("")))
    },
    long() {
      setbgColor(styleColors.long.bgcolor);
      setColor(styleColors.long.color);
      setMinutes(parseInt(styleColors.long.time.split(":",1).join("")))
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
          <h1>{minutes} : {seconds}</h1>
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
