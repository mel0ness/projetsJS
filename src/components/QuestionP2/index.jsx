
import "../../style/components/QuestionP2/questionP2.scss"
const QuestionP2 = (Props) => {

    return(
        <div>
             <div className="P2-question">
      <h2 className="P2-h2">{Props.title}</h2>
      <div className="P2-input"><input type="radio" id="number1" name={Props.id} value="a" checked /><label htmlFor="number1">{Props.rep1}</label></div>
      <div className="P2-input"><input type="radio" id="number2" name={Props.id} value="b" /><label htmlFor="number2">{Props.rep2}</label>
      </div>
      <div className="P2-input"><input type="radio" id="number3" name={Props.id} value="c" /><label htmlFor="number3">{Props.rep3}</label>
      </div>
    </div>
        </div>
    )
}

export default QuestionP2