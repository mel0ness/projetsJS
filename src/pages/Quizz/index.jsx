import { Helmet } from "react-helmet-async";
import "../../style/pages/Quizz/quizz.scss"
import Datas from "../../assets/Question.json"
import QuestionP2 from "../../components/QuestionP2";

const Quizz = () => {
    return (
<div className="P2-body">
    <Helmet>
        <title>Quizz</title>
        <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap"
    rel="stylesheet"></link>
    </Helmet>
    
    <div className="P2-title">
    <h1 className="P2-h1"><span className="P2-boldy">Quizz</span> Culture générale et personnelle.</h1>
    <div className="P2-check">
      <div className="P2-littleCheck"></div>
      <div className="P2-bigCheck"></div>
    </div>
  </div>
  <form method="get" action="" id="form">
    {Datas.map(({id, title, rep1, rep2, rep3}) => 
<QuestionP2 id={id} title={title} rep1={rep1} rep2={rep2} rep3={rep3} key={id} />
    )}
  <div className="P2-valider">
      <button className="P2-button">VALIDER <div>✔️</div>
      </button>
    </div>
    <div className="P2-consignes" id="consignes">
      Cliquez sur <span className="P2-boldy">valider</span> pour voir les <span className="P2-boldy">résultats.</span>
    </div>
  </form>

        </div>
    )
}

export default Quizz;