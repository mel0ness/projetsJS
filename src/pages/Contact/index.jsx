import "../../style/pages/Contact/contact.scss"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {currentTheme} from "../../features/selector";
import { useSelector } from "react-redux";


const Contact = () => {

const colors = useSelector(currentTheme)

    return (
        <div className={"flexyContact "+colors}>
            <Helmet>
                <title>Contact</title>
            </Helmet>
<div className={"contactTitle "+colors}>Pour me contacter vous pouvez : </div>
<div className="flexyContent">
    <div className="relative"><div className={"band-3 band "+colors}></div><div className="appearContact1">Rejoindre ma page de <Link className={"contactLink "+colors} to="https://bastien-baryla.netlify.app/contact">contact</Link> du portfolio</div></div>
    <div className="ou">Ou</div>
    <div className="relative"><div className="band-4 band"></div><div className="appearContact2">Utiliser mes contacts directs en bas de page</div></div> 
</div>
        </div>
    )
    }
    
    export default Contact;