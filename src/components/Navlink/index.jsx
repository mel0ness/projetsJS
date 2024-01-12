import { Link, useLocation } from "react-router-dom";

const Navlink = (Props) => {

const path = useLocation().pathname;

    return (
        <div>
{path===Props.to? <Link className={"ongletActif header " + Props.className} to={Props.to}>{Props.name}</Link> : <Link onClick={Props.function} className={"header " + Props.className} to={Props.to}>{Props.name}</Link>}



        </div>
    )
}

export default Navlink;