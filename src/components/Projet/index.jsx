import "../../style/components/Projet/projet.scss"
import Closed from "../../assets/closed.svg"
import { useState } from "react"
import Git from "../../assets/gitColored.svg"
import Go from "../../assets/go.svg"

const Projet = () => {

const [openned, closed] = useState(false);    
    return(<div>
        {openned?         
        <div className="projetComponentOpenned height">
            <div className="line1Openned">
        <div className="projetName">Projet JS Maquette</div>
        <div className="openned" onClick={() => closed(false)}><img src={Closed} alt="closed" className="opennedIMG" /></div></div>
        <div>
        <div className="descriptionOpenned">Description du projet c&apos;est quand même simple non? Après on peut épiloguer et tout mais en vrai c&apos;est chiant non?</div></div>
        <div className="flexLinkOpenned"><img src={Git} alt="Link to git code" className="logoProjet" /><div>Lien vers le code GitHub</div></div>
        <div className="flexLinkOpenned"><img src={Go} alt="Go to project" className="logoProjet" /><div>Lien vers le projet réalisé</div></div>
             </div> 
             :


             <div className="projetComponentClosed height">
             <div className="line1Openned">
         <div className="projetName">Projet JS Maquette</div>
         <div className="openned" onClick={() => closed(true)}><img src={Closed} alt="closed" className="closedIMG" /></div></div>
         <div>
         <div className="descriptionClosed"></div></div>
         <div className="flexLinkClosed"></div>
         <div className="flexLinkClosed"></div>
              </div> }
                        </div>
    )
}

export default Projet;