import "../../style/components/Projet/projet.scss"
import Closed from "../../assets/closed.svg"
import { useState } from "react"
import Git from "../../assets/gitColored.svg"
import Go from "../../assets/go.svg"
import JS from "../../assets/js.svg" 
import { Link } from "react-router-dom"

const Projet = (Props) => {

const [openned, closed] = useState(false);    
    return(<div>
        {openned?         
        <div className="projetComponentOpenned height">
            <div className="line1Openned">
        <div className="projetName">{Props.name}</div>
        <div className="openned" onClick={() => closed(false)}><img src={Closed} alt="closed" className="opennedIMG" /></div></div>
        <div>
        <div className="descriptionOpenned">{Props.description}</div></div>
        <Link to={Props.git1} className="flexLinkOpenned"><img src={Git} alt="Link to git code" className="logoProjet" /><div>Lien vers le code GitHub</div></Link>
        <Link to={Props.git2} className="flexLinkOpenned"><img src={JS} alt="Link to vanilla js" className="logoProjet" /><div>Lien vers la page GitHub</div></Link>
        <Link to={Props.adress} className="flexLinkOpenned"><img src={Go} alt="Go to project" className="logoProjet" /><div>Lien vers le projet réalisé</div></Link>
             </div> 
             :


             <div className="projetComponentClosed height">
             <div className="line1Openned">
         <div className="projetName">{Props.name}</div>
         <div className="openned" onClick={() => closed(true)}><img src={Closed} alt="closed" className="closedIMG" /></div></div>
         <div>
         <div className="descriptionClosed"></div></div>
         <Link className="flexLinkClosed"></Link>
         <Link className="flexLinkClosed"></Link>
         <Link className="flexLinkClosed"></Link>
              </div> }
                        </div>
    )
}

export default Projet;