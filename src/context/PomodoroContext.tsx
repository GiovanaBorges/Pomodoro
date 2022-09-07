import {createContext,useState} from "react"
import {styleColors} from "../styles"

interface Props {
    children: React.ReactNode;
  }

interface PomodoroContextData{
    Pomodoro:() => void,
    Short:()=>void,
    Long:()=>void,
    alterColor:string,
    bgColor:string,
    time:number,
}

export const PomodoroContext = createContext({} as PomodoroContextData)

export const PomodoroProvider= ({ children }:Props) =>{
    const [bgColor,setBgColor] = useState<string>(styleColors.pomodoro.bgcolor)
    const [alterColor,setAlterColor] = useState(styleColors.pomodoro.color)
    const [time,setTime] = useState<number>(25)
    
        function Pomodoro(){
            setBgColor(styleColors.pomodoro.bgcolor)
            setAlterColor(styleColors.pomodoro.color)
            setTime(styleColors.pomodoro.time)
            console.log(time)
        }
        function Short(){
            setBgColor(styleColors.short.bgcolor)
            setAlterColor(styleColors.short.color)
            setTime(styleColors.short.time)
            console.log(time)
        }
         function Long(){
            setBgColor(styleColors.long.bgcolor)
            setAlterColor(styleColors.long.color)
            setTime(styleColors.long.time)
            console.log(time)
        }
    
    return(
        <PomodoroContext.Provider value={{Pomodoro,Short,Long,alterColor,bgColor,time}}
        >
            {children}
        </PomodoroContext.Provider>
    )
    }