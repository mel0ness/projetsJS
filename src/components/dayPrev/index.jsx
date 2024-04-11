import "../../style/components/dayPrev/dayPrev.scss"

const DayPrev = (Props) => {

return(


<div>

{!Props.display? <div className="P5-dayTemp"></div>   
: 
<div className="P5-dayTemp"><img className="P5-dayTempIMG" src={`../jour/${Props.resultsDaily.weather[0].icon}.svg`} alt="Kind of day prevision" />{`${Props.resultsDaily.temp.day.toFixed(0)}°`}</div>} 
</div>
)
}

export default DayPrev;