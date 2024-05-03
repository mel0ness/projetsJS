import { useEffect, useState } from "react";
import "../../style/components/Timer/timer.scss"

const Timer = (Props) => {

useEffect(() => {
    let timerFunction = setInterval(function()
    {play(Props.minutes, Props.seconds, Props.isRunning, Props.moment, Props.momentState, Props.momentStateFunction, timerFunction)}, 1000)
}
        , [Props.isRunning, Props.moment, Props.minutes, Props.seconds, Props.momentState, Props.momentStateFunction])

const play = (minutes, seconds, isRunning, moment, momentState, momentStateFunction, interval) => {

}        
    
const [minutes, updateMinutes] = useState(Props.minutes)
const [seconds, updateSeconds] = useState(Props.seconds)

    return(
        <div className="P7-timer">
      <div className="P7-timeTitle">{Props.moment}</div>
      <div className="P7-timeUnits"><span>{minutes}</span>:{seconds < 10? <span>0{seconds}</span> : <span>{seconds}</span>}</div>
    </div>
    )
}

export default Timer;