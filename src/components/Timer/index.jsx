import { useEffect, useState} from "react";
import styled, { keyframes } from "styled-components";
import "../../style/components/Timer/timer.scss"

const playing = keyframes`
0% {
  width : 0;
  left: 30%;
  right: unset;
}
40% {
  width: 40%;
  left: 30%;
  right: unset;
}
60% {
  width: 40%;
  left: unset;
  right: 30%;
}
100% {
  width: 0;
  right: 30%;
  left: unset;
}
`

const paused = keyframes`
0% {
 opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const StyledTitle = styled.div`
width: 0;
height: 5px;
border-radius: 5px;
border-color: white;
background-color: black;
position: absolute;
left: 30%;

&.play {
animation: ${playing} 2s infinite both;}

&.paused {
  width: 40%;
  animation: ${paused} 1s infinite both;
}

&.stopped {
  animation: unset;
}
`

const Timer = (Props) => {

  useEffect(() => {
if(Props.moment === Props.momentState && Props.running === true) {
updateStyle("play")
}
else if (Props.moment === Props.momentState && Props.running === false) {
  updateStyle("paused")
}
else {
  updateStyle("stopped")
}
  }, [Props])

      
  const [style, updateStyle] = useState("stopped")

    return(
        <div className="P7-timer">
      <div className="P7-timeTitle">{Props.moment}</div>
      <StyledTitle className={style}></StyledTitle>
      <div className="P7-timeUnits"><span>{Props.minutes}</span>:{Props.seconds < 10? <span>0{Props.seconds}</span> : <span>{Props.seconds}</span>}</div>
    </div>
    )
}

export default Timer;