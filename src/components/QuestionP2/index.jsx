import "../../style/components/QuestionP2/questionP2.scss"
import { useState } from "react"
const QuestionP2 = (Props) => {

const [style, updateStyle] = useState(false);
const Reset = () => {
    if(style) {
updateStyle(false);}
else {
    updateStyle(true)
}
}

    return(
        <div>
             <div className={style? "P2-question" : "P2-question reset"} id={"q"+Props.id} onClick={Reset} >
      <h2 className="P2-h2">{Props.title}</h2>
      <div className="P2-input"><input  type="radio" id={Props.id+"number1"} name={Props.id} value="a" defaultChecked onChange={Props.function} /><label htmlFor={Props.id+"number1"}>{Props.rep1}</label></div>
      <div className="P2-input"><input type="radio" id={Props.id+"number2"} name={Props.id} value="b" onChange={Props.function} /><label htmlFor={Props.id+"number2"}>{Props.rep2}</label>
      </div>
      <div className="P2-input"><input type="radio" id={Props.id+"number3"} name={Props.id} value="c" onChange={Props.function} /><label htmlFor={Props.id+"number3"}>{Props.rep3}</label>
      </div>
    </div>
        </div>
    )
}

export default QuestionP2