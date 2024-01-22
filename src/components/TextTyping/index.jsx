import { TypeAnimation } from "react-type-animation";
import { useState} from "react";


const TextTyping = () => {


  
const [hidden, notHiddenAnymore] = useState(true)


setTimeout(() => {
    notHiddenAnymore(false)
}, 3200)

  return(<div> {hidden? <div></div> :  <TypeAnimation className="paragr " sequence={[
    "Ce site a simplement pour but de mettre en avant la réalisation de projets JS simples ou plus complexes, que j'ai réalisé. Vous y trouverez les projets terminés ainsi qu'un lien vers le code pour leur mise en place. N'hésitez pas à me contacter ;)"]}  wrapper='div' speed={{type: 'keyStrokeDelayInMs', value: 20}} /> }
 </div>)
};

export default TextTyping;