import "../../style/components/Header/header.scss"
import Nav from "../Nav";
import { Link } from "react-router-dom";
import Theme from "../Theme";
import { useSelector } from "react-redux";
import { currentTheme } from "../../features/selector";

const Header = () => {
const colors = useSelector(currentTheme)

    return (
        <div className={"header "+colors}>
<Link to="/" className={"title "+colors}>Projets JS</Link>
<Theme />
<Nav/>
        </div>
    )
    }
    
    export default Header;