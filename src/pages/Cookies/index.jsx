import "../../style/pages/Cookies/cookies.scss"
import { Helmet } from "react-helmet-async";
import Cookie from "../../assets/cookie.webp"
import { CookiesProvider, useCookies } from "react-cookie";
import { useState, useRef } from "react";

const Cookies = () => {
let AllCookies = [];
let FinalCookies = [];
const NameRef = useRef();
const ValueRef = useRef();
const Modale = useRef();

const [errorDisplay, updateErrorDisplay] = useState(false);
const [displayCookies, updateDisplayCookies] = useState(false);
const [name, updateName] = useState(null);
const [value, updateValue] = useState(null);
const [cookies, setCookies, removeCookie] = useCookies();
const [FinalCookiesToDisplay, udpateFinalCookiesToDisplay] = useState([]);

const createCookie = () => {
setCookies(name, value, {path: "/", maxAge: 86400})
NameRef.current.value = "";
ValueRef.current.value = "";
FinalCookies = [];
Toast("green", "ajouté", "Votre cookie a bien été ")
}

const readCookies = () => {
FinalCookies = [];
  AllCookies = Object.entries(cookies)
  for(let i = 0; i < AllCookies.length; i++) {
    let object = {name : AllCookies[i][0], value : AllCookies[i][1], id : i}
   FinalCookies.push(object)
  }
udpateFinalCookiesToDisplay(FinalCookies)
display(FinalCookies);
}

const display = (e) => {
  if(e.length < 1) {
    updateErrorDisplay(true)
    updateDisplayCookies(false)
  }
  else {
    updateErrorDisplay(false)
    updateDisplayCookies(true)
  }
}

const changeName = (e) => {
  if(e === "") {
    updateName(null)
}
else {
updateName(e);
}
}

const Toast = (color, message, intro) => {
  const toast = document.createElement("div");
  toast.classList.add("P4-modale");
  toast.innerHTML = `
 <div>${intro}<span class="P4-${color}">${message}</span></div>
`;
window.document.body.appendChild(toast)

setTimeout(() => {
toast.remove()
}, 3000)
}

const confirmDeleteCookie = (e) => {
  Modale.current.classList.add("P4-modaleVisible")
Modale.current.classList.remove("P4-modaleInvisible")
setTimeout(() => {
  Modale.current.innerHTML = `    <div class="P4-modaleTitle">Voulez-vous supprimer ce cookie?</div>
  <div class="P4-modaleButton" id="Yes">Oui</div>
  <div class="P4-modaleButton" id="No">Non</div>`
  const Yes = document.getElementById("Yes")
const No = document.getElementById("No")

Yes.addEventListener("click", () => {
  Modale.current.innerHTML = "";
  Modale.current.classList.remove("P4-modaleVisible")
  Modale.current.classList.add("P4-modaleInvisible")
  deleteCookie(e);
})
No.addEventListener("click", () => {
  Modale.current.innerHTML = "";
  Modale.current.classList.remove("P4-modaleVisible")
  Modale.current.classList.add("P4-modaleInvisible")
})
}, 500)
}

const deleteCookie = (e) => {
 removeCookie(FinalCookiesToDisplay[e].name, {path: "/"})
FinalCookiesToDisplay.splice(e, 1);
display(FinalCookiesToDisplay);
Toast("red", "supprimé", "Votre cookie a bien été ");
}

const changeValue = (e) => {
  if(e === "") {
    updateValue(null)
}
else {
updateValue(e);
}
}
    return( 
      <CookiesProvider>
        <div className="P4-body">
  
            <Helmet>
            <title>Cookies en JS</title>
            <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
            </Helmet>
         
            <h1 className="P4-h1">Création de <span className="P4-boldTitle">Cookies</span><img className="P4-img" src={Cookie} alt="Cookie" />
  </h1>

  <div className="P4-form">
    <div className="P4-input">
      <label className="P4-label" htmlFor="name">Son nom</label>
      <input className="P4-inputs" ref={NameRef} type="text" id="name" name="name" onChange={ (e) => changeName(e.target.value)} />
    </div>
    <div className="P4-input">
      <label className="P4-label" htmlFor="value">Sa valeur</label>
      <input className="P4-inputs" ref={ValueRef} type="number" id="value" name="value" min="0" onChange={ (e) => changeValue(e.target.value)} />
    </div>
    <div className="P4-buttons">
      <button className="P4-button" id="create" onClick={() => createCookie()}>Créer</button>
      <button className="P4-button" id="display" onClick={() => readCookies()}>Afficher</button>
    </div>
    <div className="P4-error" id="error"></div>
  </div>

  {displayCookies?   <div className="P4-cookies" id="displayDatas">
{FinalCookiesToDisplay.map((cookie) =>
<div key={cookie.id} className="P4-cookie" id={cookie.id}>
<div className="P4-close" value={cookie.id} onClick={(e) => confirmDeleteCookie(e.target.attributes.value.value)}>X</div>
    <div className="P4-name"><span className="P4-title">Nom : </span>{cookie.name}</div>
    <div className="P4-value"><span className="P4-title">Valeur : </span>{cookie.value}</div>
</div>
)}

</div> :   <div className="P4-cookies" id="displayDatas">


</div> }

  {errorDisplay? <div className="P4-datasError" id="datasError"><div>Vous n&apos;avez pas de cookies à afficher!</div></div> : <div className="P4-datasError" id="datasError"></div> }
  <div className="P4-modale P4-modaleInvisible" id="modale" ref={Modale}>

  </div>
        </div> </CookiesProvider>
    )
}

export default Cookies;