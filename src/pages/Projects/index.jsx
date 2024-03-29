import "../../style/pages/Projects/projects.scss"
import Projet from "../../components/Projet"
import {currentTheme} from "../../features/selector"
import { useSelector } from "react-redux"
import { Helmet } from "react-helmet-async"


const Projects = (Props) => {

    const colors = useSelector(currentTheme)
    return (
        <div className={"projets "+colors}>
            <Helmet>
                <title>Projets</title>
            </Helmet>
<div className="presProjets">Les projets sont directement intégrés en React-JS mais vous pouvez y trouver les liens pour le JS vanilla (Le code sur git comme le lien vers la page gitHub du projet)</div>

{Props.Datas.map(({id, nom, adresse, GithubCode, GithubPage, description}) => 
    <Projet id={id} name={nom} adress={adresse} git1={GithubCode} git2={GithubPage} description={description} key={id} />
) 


}


        </div>
    )
    }
    
    export default Projects;