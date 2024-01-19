import { Link } from "react-router-dom";
import "../../style/components/SiteResults/siteResults.scss"

const SiteResults = (Props) => {
    return (
        <div>
        {Props.datas.map(({title, snippet, pageid}) =>
        <div className="P3-result" key={pageid}>
        <Link to={"https://fr.wikipedia.org/wiki/?curid="+pageid} className='P3-siteName'>{title}</Link>
        <div className="P3-adress">{"https://fr.wikipedia.org/wiki/?curid="+pageid}</div>
        <div className="P3-description" dangerouslySetInnerHTML={{ __html: snippet}}></div>
        </div>
        
        ) }
        
        </div>
    )
}


export default SiteResults;