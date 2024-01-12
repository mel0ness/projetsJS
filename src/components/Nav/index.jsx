import Navlink from "../Navlink";
import "../../style/components/Nav/nav.scss"
import { useState } from "react";

const Nav = () => {
const Close = () => {
    updateBurgerOpenned(false)
}

 const [BurgerOpenned, updateBurgerOpenned] = useState(false);   
    return (<div>

        {BurgerOpenned?  <div className="burger" onClick={() => updateBurgerOpenned(false)}><span className="top topOpenned"></span>
        <span className="middle middleOpenned"></span>
        <span className="bottom bottomOpenned"></span>  </div> :    <div className="burger  background" onClick={() => updateBurgerOpenned(true)}><span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span></div>  }
         
  {BurgerOpenned? <nav className="visible">
  <div className="nav">
<Navlink function={Close} name="Home" to="/" className="onglet-1 onglet"/>
<Navlink function={Close} name="Projets" to="/projets" className="onglet-2 onglet"/>
<Navlink function={Close} name="Contact" to="/contact" className="onglet-3 onglet"/>
        </div></nav> : <nav className="invisible onglet">
        <div className="nav">
<Navlink name="Home" to="/" className="onglet-1 onglet"/>
<Navlink name="Projets" to="/projets" className="onglet-2 onglet"/>
<Navlink name="Contact" to="/contact" className="onglet-3 onglet"/>
        </div>
    </nav> }
    </div>

   
    )
}

export default Nav;