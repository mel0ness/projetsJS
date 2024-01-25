import { Helmet } from "react-helmet-async";
import "../../style/pages/WikiApp/wikiapp.scss"
import Logo from "../../assets/wiki-logo.png"
import { useState } from "react";
import SiteResults from "../../components/siteResults";

const WikiApp = () => {
    const [datas, updateDatas] = useState([]);


    const [loader, updateLoader] = useState(false);
    const [inputValue, updateInputValue] = useState(null);
    const [inputLoad, updateInputLoad] = useState("");
    const [error, updateError] = useState(false);
    const [errorContent, updateErrorContent] = useState(null);


    const validate = (e) => {
        updateDatas([])
        e.preventDefault();
        updateLoader(true);

        checkInputValue(inputValue);

    }

    async function GetResults(value) {
        try {
    const response = await fetch(`https://fr.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${value}`);
    const Results = await response.json();
    CheckResults(Results);
    updateLoader(false);
        }
        catch (error) {
    const Results = error;
    updateDatas([])
    updateError(true)
    updateErrorContent("Oups! Une erreur s'est produite, veuillez réessayer :" + Results)
        }
        }

    const checkInputValue = (e) => {
        if(!e) {
            updateLoader(false)
            updateErrorContent("Oups! Vous n'avez pas lancé de recherche!")
            updateError(true)
        }
        else {
            updateErrorContent(null)
            updateError(false)
            GetResults(e);
        }
    }

    const newInput = (e) => {
        updateInputValue(e)
        updateInputLoad(e)
    }



    const CheckResults = (e) => {
        if(e.query.search.length === 0 && e.query.searchinfo.suggestion) {
            updateError(true)
            updateErrorContent(`Oups! Il n'y a pas de resultats pour cette recherche. Peut-être devriez vous essayer : ${e.query.searchinfo.suggestion}`)
        }
        else if (e.query.search.length === 0 && !e.query.searchinfo.suggestion) {
            updateError(true)
            updateErrorContent(`Oups! Il n'y a pas de resultats pour cette recherche.`)
        }
        else {
            updateDatas(e.query.search);
        }
    }
    return (
<div className="P3-body">
    <Helmet>
        <title>Recherche Wiki</title>
    </Helmet>
    <div className="P3-logo"><img src={Logo} alt="Logo wiki" className="P3-imgLogo" /></div>
  <div className="P3-title">Recherche <span className="P3-boldy">Wikipedia</span></div>
  <form method="get" action="" id="form" className="P3-form" onSubmit={(e) => validate(e)}>
    <input type="search" className="P3-search P3-input" placeholder="Recherche" value={inputLoad} onChange={(e) => newInput(e.target.value)} />
  </form>
  {loader? <div className="P3-loader" id="loader">
    <div className="P3-dot P3-dot1"></div>
    <div className="P3-dot P3-dot2"></div>
    <div className="P3-dot P3-dot3"></div>
  </div> : 
<div></div>}
   <div className="P3-results" id="resultsSpace">
{error? <div className="P3-error">{errorContent}</div> :  <SiteResults datas={datas} />  }

   </div>

  
 
        </div>
    )
}

export default WikiApp; 