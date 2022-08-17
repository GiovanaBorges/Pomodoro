import { LayoutContent, Navbar, Timer, Button } from "./layout.styles";
import { styleColors } from "../../styles";
import { useEffect, useState } from "react";

function Layout() {
  const [btnText, setBtnText] = useState("Start");
  const [bgColor, setbgColor] = useState("#DA4747");
  const [color, setColor] = useState("#F86A6A");
  const [time,setTime] = useState("25:00")

  function textStart() {
    btnText === "Start" ? setBtnText("Stop") : setBtnText("Start");
    show();
  }

  function show() {
    console.log(styleColors);
  }

  const changeColor = {
    pomodoro() {
      setbgColor(styleColors.pomodoro.bgcolor);
      setColor(styleColors.pomodoro.color);
      setTime(styleColors.pomodoro.time)
    },
    short() {
      setbgColor(styleColors.short.bgcolor);
      setColor(styleColors.short.color);
      setTime(styleColors.short.time)
    },
    long() {
      setbgColor(styleColors.long.bgcolor);
      setColor(styleColors.long.color);
      setTime(styleColors.long.time)
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
          <h1>{time}</h1>
          <Button onClick={textStart} bg={bgColor}>{btnText}</Button>
        </Timer>
      </LayoutContent>
    </>
  );
}

export default Layout;
