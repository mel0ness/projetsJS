import "../../style/components/Header/header.scss"
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
<Link to="/" className="title">Projets JS</Link>
<Nav/>
        </div>
    )
    }
    
    export default Header;