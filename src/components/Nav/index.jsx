import Navlink from "../Navlink";
import "../../style/components/Nav/nav.scss"
import { useState } from "react";
import { useSelector } from "react-redux";
import {currentTheme} from "../../features/selector"

const Nav = () => {

    const colors = useSelector(currentTheme)
const Close = () => {
    updateBurgerOpenned(false)
}

 const [BurgerOpenned, updateBurgerOpenned] = useState(false);   
    return (<div>

        {BurgerOpenned?  <div className="burger" onClick={() => updateBurgerOpenned(false)}><span className={"top topOpenned "+colors}></span>
        <span className={"middle middleOpenned "+colors}></span>
        <span className={"bottom bottomOpenned "+colors}></span>  </div> :    <div className="burger  background" onClick={() => updateBurgerOpenned(true)}><span className="top"></span>
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