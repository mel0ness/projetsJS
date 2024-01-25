import "../../style/pages/Home/home.scss"
import TextTyping from "../../components/TextTyping";
import {currentTheme } from "../../features/selector"
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

const Home = () => {

const colors = useSelector(currentTheme)
    return (
        <div className={"home "+colors}>
             <Helmet>
                <title>Accueil</title>
            </Helmet>
<div className={"line-1 "+colors}><div className={"band band-1 "+colors}></div><div className="txt txt-1">Réalisations</div></div>
<div className={"line-2 "+colors}><div className={"band band-2 "+colors}></div><div className="txt txt-2">de projets JS</div></div>
<TextTyping />
 
        </div>
    )
    }
    
    export default Home;