import {useState,useEffect,useContext} from "react"
import { PomodoroContext } from "../context/PomodoroContext"
import {CountdownContext} from "../context/CountdownContext"

export function Countdown(){
    const {minutes,seconds} = useContext(CountdownContext)
    const {time} = useContext(PomodoroContext)

    return(
        <>
        <h1>{minutes}:{seconds}</h1>
       </>
    )
}