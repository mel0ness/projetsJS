// import { useEffect} from "react";
import "../../style/components/Timer/timer.scss"

const Timer = (Props) => {

// useEffect(() => {
//     let timerFunction = setInterval(function()
//     {play(Props.minutes,Props.updateMinutes, Props.seconds, Props.updateSeconds, Props.isRunning, Props.moment, Props.momentState, Props.momentStateFunction, timerFunction)}, 1000)
// }
//         , [Props.isRunning, Props.moment, Props.minutes, Props.updateMinutes, Props.seconds, Props.updateSeconds, Props.momentState, Props.momentStateFunction])

// const intervalBegin = () => {
//     let timerFunction = setInterval(function()
//     {play(Props.minutes,Props.updateMinutes, Props.seconds, Props.updateSeconds, Props.isRunning, Props.moment, Props.momentState, Props.momentStateFunction, timerFunction)}, 1000)
// }

// const play = (minutes, updateMinutes, seconds, updateSeconds, isRunning, moment, momentState, momentStateFunction, interval) => {
//     if(!isRunning || moment !== momentState) {
//         clearInterval(interval)
//     }

//    else if(minutes >= 0 && seconds ===0) {
//         updateMinutes(minutes - 1);
//         updateSeconds(59);
//     }
//     else if(minutes >= 0 && seconds > 0) {
//         updateSeconds(seconds - 1);
//     }
//     else {
//         if(momentState === "Travail"){
//             updateMinutes(30)
//             updateSeconds(0)
//             momentStateFunction("Repos")
//             clearInterval(interval)
//         }
//         else {
//             updateMinutes(5)
//             updateSeconds(0)
//         momentStateFunction("Travail")
//             clearInterval(interval)
//         }
       
//     }
// }        

    return(
        <div className="P7-timer">
      <div className="P7-timeTitle">{Props.moment}</div>
      <div className="P7-timeUnits"><span>{Props.minutes}</span>:{Props.seconds < 10? <span>0{Props.seconds}</span> : <span>{Props.seconds}</span>}</div>
    </div>
    )
}

export default Timer;