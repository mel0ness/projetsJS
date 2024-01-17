import { Helmet } from "react-helmet-async";
import "../../style/pages/IMC/imc.scss"
import { useState, useEffect} from "react";


const Imc = () => {

    const BMIData = [
        { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
        { name: "Bonne santé", color: "green", range: [18.5, 25] },
        { name: "Surpoids", color: "lightcoral", range: [25, 30] },
        { name: "Obésité modérée", color: "orange", range: [30, 35] },
        { name: "Obésité sévère", color: "crimson", range: [35, 40] },
        { name: "Obésité morbide", color: "purple", range: 40 },
      ];

      const [Poids, updatePoids] = useState(null);
      const [Taille, updateTaille] = useState(null);
      const [Resultat, updateResultat] = useState(0);
      const [TailleM, updateTailleM] = useState(0);
      const [ErrorContent, updateErrorContent] = useState("");
      const [ErrorStyle, updateErrorStyle] = useState("");
      const [CommentContent, updateCommentContent] = useState("En attente du résultat...");
      const [CommentStyle, updateCommentStyle] = useState("");
      const [IndexStyle, updateIndexStyle] = useState(false);

useEffect(() => {
    if(Resultat !== 0) {
        ResultFunction(Resultat);
    }
    
})


const changeTaille = (e) => {
    if(e === "") {
        updateTaille(null)
    }
    else {
    updateTaille(e);
    updateTailleM(e/100);}
}

const changePoids = (e) => {
    if(e === "") {
        updatePoids(null)
    }
    else{
    updatePoids(e);}
}

const ResultFunction = (Resultat) => {
    const Index = BMIData.find(data => {
      if(Resultat > data.range[0] && Resultat <= data.range[1]) return data;
      else if (typeof data.range === "number" && Resultat > data.range) return data;
    })
    
    updateIndexStyle(Index.color)
    updateCommentContent(Index.name);
    }

const Result = (e) => {

    e.preventDefault(); 
    if(Poids === null) {
        updateErrorStyle("P1-error")
        updateErrorContent("Veuillez renseigner votre Poids!")
        updateResultat(0);
        updateIndexStyle(false)
        updateCommentStyle("P1-black")
       updateCommentContent("En attente du résultat...")
          }
          else if(Taille === null) {
            updateErrorStyle("P1-error")
            updateErrorContent("Veuillez renseigner votre Taille!")
        updateResultat(0);
        updateIndexStyle(false)
        updateCommentStyle("P1-black")  
       updateCommentContent("En attente du résultat...")
          }
          else if(Taille <= 0 || Poids <= 0) {
            updateErrorStyle("P1-error")
            updateErrorContent("Les informations indiquées sont erronées.")
        updateResultat(0);
        updateIndexStyle(false)
        updateCommentStyle("P1-black")
        updateCommentContent("En attente du résultat...")
          }
          else if(Taille > 0 && Poids > 0) {
            updateErrorStyle("")
            updateErrorContent("")
      updateResultat(((Poids / (TailleM * TailleM)).toFixed(1)));

        
        
   
          }
}

    return (
<div className="P1-body">
    <Helmet>
        <title>Calculateur d&apos;IMC</title>
        <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
    </Helmet>
    <div className="P1-Global">
    <form action="" method="get" className="P1-form" onSubmit={(e) => Result(e)}>
      <div className="P1-h1">Calcul <span className="P1-strong">d&apos;IMC</span></div>
      <fieldset className="P1-fieldset">
        <div className="P1-input"><label className="P1-label" htmlFor="taille">Votre taille en centimètres, Ex : 180</label><input type="text"
            id="taille" name="taille" placeholder="Votre taille en centimètres" className="P1-input2" onChange={ (e) => changeTaille(e.target.value)} /></div>
        <div className="P1-input"><label htmlFor="poids" className="P1-label">Votre poids en Kg, Ex : 80</label><input className="P1-input2" type="text" id="poids"
            name="poids" placeholder="Votre poids en Kg" onChange={ (e) => changePoids(e.target.value)} /></div>
      </fieldset>
      <button id="calcul" className="P1-button">Calculer un IMC</button>
      <div id="error" className={ErrorStyle}>{ErrorContent}</div>
    </form>
    <div className="P1-result" id="result">{Resultat}</div>
    <div className={"P1-comment "+ CommentStyle} style={IndexStyle!== false?{color: IndexStyle} : {color: "black"}} id="comment">{CommentContent}</div>
  </div>
        </div> 
    )
}

export default Imc;