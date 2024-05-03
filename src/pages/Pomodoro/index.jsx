import "../../style/pages/Pomodoro/Pomodoro.scss"
import Play from "../../assets/play.svg"
import Pause from "../../assets/pause.svg"
import Reset from "../../assets/reset.svg"
import Timer from "../../components/Timer"
import { Helmet } from "react-helmet-async";
import { useState } from "react"
const Pomodoro = () => {

const [time, updateTime] = useState("Travail")
const [running, updateRunning] = useState(false)
const [cycles, updateCycles] = useState(0)
const [workTimer] = useState([30, 0])
const [breakTimer] = useState([5, 0])

    return (
        <div className="P7-body">
            <Helmet>
            <title>Pomodoro Timer</title>
            
            </Helmet>
  <div className="P7-title">Le <span className="P7-bold">POMODORO</span></div>

  <div className="P7-timers">
   <Timer moment="Travail" minutes={workTimer[0]} seconds={workTimer[1]} momentState={time} momentStateFunction={updateTime} isRunning={running} cycles={cycles} updateCycles={updateCycles} />
   <Timer moment="Repos" minutes={breakTimer[0]} seconds={breakTimer[1]} momentState={time} momentStateFunction={updateTime} isRunning={running} cycles={cycles} updateCycles={updateCycles} />
  </div>

  <div className="P7-actions">
    <div className="P7-action" id="play">
        {running? <img src={Pause} className="P7-play" id="playIMG" alt="play/pause" onClick={() => updateRunning(false)} /> :<img src={Play} className="P7-play" id="playIMG" alt="play/pause" onClick={() => updateRunning(true)} />}
    </div>
    <div className="P7-action" id="reset"><img src={Reset} className="P7-reset" alt="reset" /></div>
  </div>

  <div className="P7-cycles">Cycle(s): <span id="cycles">{cycles}</span></div>
</div>
    )
};

export default Pomodoro;