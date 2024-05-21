import "../../style/pages/Pomodoro/Pomodoro.scss"
import Play from "../../assets/play.svg"
import Pause from "../../assets/pause.svg"
import Reset from "../../assets/reset.svg"
import Timer from "../../components/Timer"
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react"
const Pomodoro = () => {

    const [time, updateTime] = useState("Travail")
const [running, updateRunning] = useState(true)
const [cycles, updateCycles] = useState(0)
const [workTimerMinutes, updateWorkTimerMinutes] = useState(30)
const [workTimerSeconds, updateWorkTimerseconds] = useState(0)
const [breakTimerMinutes, updateBreakTimerMinutes] = useState(5)
const [breakTimerSeconds, updateBreakTimerseconds] = useState(0)

    useEffect(() => {

        const play = (interval) => {
            if(running === false) {
                clearInterval(interval)
            }
        
           else if(time === "Travail" && workTimerMinutes >=0 && workTimerSeconds ===0) {
                updateWorkTimerMinutes(workTimerMinutes - 1);
                updateWorkTimerseconds(59);
            }
            else if( time === "Travail" && workTimerMinutes >= 0 && workTimerSeconds > 0) {
                updateWorkTimerseconds(workTimerSeconds - 1);
            }
           else if(time === "Repos" && breakTimerMinutes >=0 && breakTimerSeconds ===0) {
                updateBreakTimerMinutes(breakTimerMinutes - 1);
                updateBreakTimerseconds(59);
            }
            else if( time === "Repos" && breakTimerMinutes >= 0 && breakTimerSeconds > 0) {
                updateBreakTimerseconds(breakTimerSeconds - 1);
            }
            else {
                if(time === "Travail"){
                    updateWorkTimerMinutes(30)
                    updateWorkTimerseconds(0)
                    updateTime("Repos")
                }
                else {
                    updateBreakTimerMinutes(5)
                    updateBreakTimerseconds(0)
                updateTime("Travail")
                }
               
            }
        }   

        const timerFunction = setInterval(() =>
        {play(timerFunction)}, 1000);
        return () => clearInterval(timerFunction);
    }
            , [breakTimerMinutes, breakTimerSeconds, workTimerMinutes, workTimerSeconds, updateBreakTimerMinutes, updateBreakTimerseconds, updateWorkTimerMinutes, updateWorkTimerseconds, time, running])
    




const startRunning = () => {
    updateRunning(true)
}
const stopRunning = () => {
    updateRunning(false)
}



    return (
        <div className="P7-body">
            <Helmet>
            <title>Pomodoro Timer</title>
            
            </Helmet>
  <div className="P7-title">Le <span className="P7-bold">POMODORO</span></div>

  <div className="P7-timers">
   <Timer moment="Travail" minutes={workTimerMinutes} updateMinutes={updateWorkTimerMinutes} seconds={workTimerSeconds} updateSeconds={updateWorkTimerseconds} momentState={time} momentStateFunction={updateTime} isRunning={running} cycles={cycles} updateCycles={updateCycles} />
   <Timer moment="Repos" minutes={breakTimerMinutes} updateMinutes={updateBreakTimerMinutes} seconds={breakTimerSeconds} updateSeconds={updateBreakTimerseconds} momentState={time} momentStateFunction={updateTime} isRunning={running} cycles={cycles} updateCycles={updateCycles} />
  </div>

  <div className="P7-actions">
    <div className="P7-action" id="play">
        {running? <img src={Pause} className="P7-play" id="playIMG" alt="play/pause" onClick={() => stopRunning()} /> :<img src={Play} className="P7-play" id="playIMG" alt="play/pause" onClick={() => startRunning()} />}
    </div>
    <div className="P7-action" id="reset"><img src={Reset} className="P7-reset" alt="reset" /></div>
  </div>

  <div className="P7-cycles">Cycle(s): <span id="cycles">{cycles}</span></div>
</div>
    )
};

export default Pomodoro;