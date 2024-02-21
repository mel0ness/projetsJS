import "../../style/pages/Cookies/cookies.scss"
import { Helmet } from "react-helmet-async";
import Cookie from "../../assets/cookie.png"

const Cookies = () => {


    return(
        <div className="P4-body">

            <Helmet>
            <title>Cookies en JS</title>
            <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
            </Helmet>
            <h1 className="P4-h1">Création de <span className="P4-boldTitle">Cookies</span><img className="P4-img" src={Cookie} alt="Cookie" />
  </h1>

  <form action="" method="get" id="form">
    <div className="P4-input">
      <label className="P4-label" htmlFor="name">Son nom</label>
      <input className="P4-inputs" type="text" id="name" name="name" />
    </div>
    <div className="P4-input">
      <label className="P4-label" htmlFor="value">Sa valeur</label>
      <input className="P4-inputs" type="number" id="value" name="value" min="0" />
    </div>
    <div className="P4-buttons">
      <button className="P4-button" id="create">Créer</button>
      <button className="P4-button" id="display">Afficher</button>
    </div>
    <div className="P4-error" id="error"></div>
  </form>
  <div className="P4-cookies" id="displayDatas">


  </div>
  <div className="P4-datasError" id="datasError"></div>
  <div className="P4-modale P4-modaleInvisible" id="modale">

  </div>
        </div>
    )
}

export default Cookies;