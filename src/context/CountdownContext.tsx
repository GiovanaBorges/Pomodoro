import {createContext,useContext, useEffect, useRef, useState} from "react"
import {PomodoroContext} from "./PomodoroContext"

interface Props {
    children: React.ReactNode;
}

  interface CountdownContextData{
    minutes:number,
    seconds:number,
    StartTime:() => void,
    StopTime:() => void,
    timeIsStop:boolean

}

export const CountdownContext = createContext({} as CountdownContextData)

export const CountdownProvider = ({ children }:Props)=>{
    const {time} = useContext(PomodoroContext)
    const [minutes,setMinutes] = useState(time)
    const [seconds,setSeconds] = useState(59)
    const [timeIsStop,setTimeIsStop] = useState(true)
    const timeRef = useRef<number>()


    function StartTime(){
        setTimeIsStop(false)
        new Audio('/assets/click-stop.wav').play();
        
        let second = seconds
        let minute= minutes

        timeRef.current = window.setInterval(()=>{
            second = second - 1
            setSeconds(second)
            setMinutes(minute)
            console.log(second +" seconds")
            console.log(minute +" minutes")
    
            if(second == 0){
                minute = minutes - 1
                setMinutes(minute)
                second = 59
                setSeconds(second)
                console.log(seconds)
            }
        },1000)  
    }

    function StopTime(){
        window.clearInterval(timeRef.current)
        new Audio('/assets/click-stop.wav').play();
        setTimeIsStop(true)
    }

    return(
       
        <CountdownContext.Provider value={{
            minutes,seconds,StartTime,StopTime,timeIsStop
        }}>
            {children}
        </CountdownContext.Provider>
       
    )    
}