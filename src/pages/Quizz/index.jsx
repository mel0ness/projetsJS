import { Helmet } from "react-helmet-async";
import "../../style/pages/Quizz/quizz.scss"
import Datas from "../../assets/Question.json"
import QuestionP2 from "../../components/QuestionP2";
import { useState, useEffect, useRef } from "react";

const Quizz = () => {

    const firstRenderer = useRef(false)

    let allResponses = [];
  let note = 0;
  let intermediateResponses= [];
const [responses, updateresponsesGood] = useState([])


const StockResponses = (Datas) => {
    for(let i = 0; i < Datas.length; i++) {
        allResponses.push("a")
    }
    }
    
    const GetResponses = (Datas) => {
        for(let i = 0; i < Datas.length; i++) {
            intermediateResponses.push(Datas[i].correct)
        }
    }



useEffect(() => {

   
        if(firstRenderer.current) return;

    firstRenderer.current = true;    
    StockResponses(Datas);
    GetResponses(Datas);
    updateresponsesGood(intermediateResponses)
    updateResponses(allResponses)

    
}
    , [])

  

  const Submit = (e) => {
    e.preventDefault();
    note = 0;
    Note(Responses, responses);
    showResults(note, responses);
    error(Responses);
  }

 

  const getChecked = (e) => {
    for (let i = 0; i < e.length; i++) {
        if(e[i].checked === true) {
            allResponses.push(e[i].value)
            
        }
        
    }   
    }

    const Note = (e, f) => {
      for (let i = 0; i < e.length; i++) {
  if(e[i] === f[i]) {
      note++
  }
      }
  }

  const showResults = (e, f) => {
    let noteForIndex = (e/f.length*5);
    let noteIndex = null;
switch(true) {
    case(noteForIndex <= 1):
noteIndex = 0;
break;
case (noteForIndex <= 2):
    noteIndex = 1;
    break;
case (noteForIndex <= 4):
    noteIndex = 2;
    break;
case (noteForIndex < 5):
    noteIndex = 3;
    break;
case (noteForIndex === 5):
    noteIndex = 4;
    break;
}
updateConsignes((e) + '/' + f.length + ' ' + comment[noteIndex] +  ' ' + ' ' + emojis[noteIndex])
}

const error = (e) => {
  for (let i = 0; i< e.length; i++) {
      if(e[i] !== responses[i]) {
          let wrongAnswerNumber = i+1
          let wrongAnswer = document.getElementById(`q${wrongAnswerNumber}`);
  wrongAnswer.classList.add("false")
  wrongAnswer.classList.remove("reset")
  wrongAnswer.classList.remove("correct")
      }
      else {
          let goodAnswerNumber = i+1
          let goodAnswer = document.getElementById(`q${goodAnswerNumber}`);
          goodAnswer.classList.add("correct")
          goodAnswer.classList.remove("reset")
          goodAnswer.classList.remove("false")
      }
  }
  }


  const updateArray = () => {
 const all = document.querySelectorAll("input[type='radio']")
 allResponses = [];
getChecked(all)
updateResponses(allResponses)
  }

  const [Responses, updateResponses] = useState([])
  const [Consignes, updateConsignes] = useState("")
  



const emojis = ["👎", "😭" , "👀", "✨", "✔️" ];
const comment = ["Catastrophique!", "Oula ce n'est pas bon", "Moyen", "Presque!", "Vous êtes excellent!"];



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
  <form method="get" action="" id="form" onSubmit={ (e) => Submit(e)}>
    {Datas.map(({id, title, rep1, rep2, rep3}) => 
<QuestionP2 id={id} title={title} rep1={rep1} rep2={rep2} rep3={rep3} key={id} function={updateArray} />
    )}
  <div className="P2-valider">
      <button className="P2-button">VALIDER <div>✔️</div>
      </button>
    </div>
    <div className="P2-consignes" id="consignes">{Consignes === "" ? <div>Cliquez sur <span className="P2-boldy">valider</span> pour voir les <span className="P2-boldy">résultats.</span></div> : Consignes}
    </div>
  </form>

        </div>
    )
}

export default Quizz;