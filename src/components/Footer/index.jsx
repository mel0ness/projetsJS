import { Link } from "react-router-dom";
import "../../style/components/Footer/footer.scss"
import Mail from "../../assets/mail.svg"
import gitHub from "../../assets/git.svg"
import Copy from "../../assets/copyright.svg"
import { useSelector } from "react-redux";
import {currentTheme} from "../../features/selector"

const Footer = () => {

    const colors = useSelector(currentTheme)
    return (
        <div className={"flexRowBetween "+colors}>

<div className="SVGcontainer"><Link to="#" onClick={(e) => {
                window.location.href = "mailto:bastien.baryla@gmail.com";
                e.preventDefault();
            }} className="SVGfooter"><img src={Mail} alt="Lien mail"/></Link><Link to="https://github.com/mel0ness" className="SVGfooter"><img src={gitHub} alt="Logo git"/></Link></div>
<div className="copyrightscontainer"><img src={Copy} alt="copyright" />2024 Bastien BARYLA, tous droits réservés.</div>
        </div>
    )
}

export default Footer;