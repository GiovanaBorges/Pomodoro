import {useContext, useState} from "react"
import {Countdown} from "../components/Countdown"
import {PomodoroContext} from "../context/PomodoroContext"
import {CountdownContext} from "../context/CountdownContext"
import { Timer } from "../pages/layout/layout.styles"


export function PomodoroMethods(){
    
    const {alterColor,bgColor,Pomodoro,Short,Long} = useContext(PomodoroContext)
    
    return(
        <>
        <Timer bg={alterColor} colors={bgColor}>
        <ul>
            <li onClick={()=> Pomodoro()}>Pomodoro</li>
            <li onClick={()=> Short()}>Short break</li>
            <li onClick={()=> Long()}>Long break</li>
          </ul>
        <Countdown/>
          </Timer>
        </>
    )
}