import "../../style/components/Projet/projet.scss"
import Closed from "../../assets/closed.svg"
import { useRef, useState } from "react"
import Git from "../../assets/gitColored.svg"
import Go from "../../assets/go.svg"
import JS from "../../assets/js.svg" 
import { Link } from "react-router-dom"
import ScrollTop from "../../features/scrollTop"
import {currentTheme} from "../../features/selector"
import { useSelector } from "react-redux"

const Projet = (Props) => {
    const colors = useSelector(currentTheme)

const scroll = useRef(null)    
const [openned, closed] = useState(false);    

const executeScroll = () => {
    scroll.current?.scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
}
const openning = () => {
    closed(true);
    executeScroll();
}
    return(<div>
        {openned?         
        <div className={"projetComponentOpenned height "+colors}   ref={scroll}>
            <div className="line1Openned">
        <div className="projetName">{Props.name}</div>
        <div className="openned" onClick={() => closed(false)}><img src={Closed} alt="closed" className="opennedIMG" /></div></div>
        <div>
        <div className="descriptionOpenned" >{Props.description}</div></div>
        <Link to={Props.git1} className="flexLinkOpenned" onClick={() => ScrollTop()}><img src={Git} alt="Link to git code" className="logoProjet" /><div>Lien vers le code GitHub</div></Link>
        <Link to={Props.git2} className="flexLinkOpenned" onClick={() => ScrollTop()}><img src={JS} alt="Link to vanilla js" className="logoProjet" /><div>Lien vers la page GitHub</div></Link>
        <Link to={Props.adress} className="flexLinkOpenned" onClick={() => ScrollTop()}><img src={Go} alt="Go to project" className="logoProjet" /><div>Lien vers le projet réalisé</div></Link>
             </div> 
             :


             <div className={"projetComponentClosed height "+colors}   ref={scroll}>
             <div className="line1Openned">
         <div className="projetName">{Props.name}</div>
         <div className="openned" onClick={() => openning()}><img src={Closed} alt="closed" className="closedIMG" /></div></div>
         <div>
         <div className="descriptionClosed"></div></div>
         <Link className="flexLinkClosed"></Link>
         <Link className="flexLinkClosed"></Link>
         <Link className="flexLinkClosed"  ></Link>
              </div> }
                        </div>
    )
}

export default Projet;