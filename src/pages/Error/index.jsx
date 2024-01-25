import { Helmet } from "react-helmet-async";
import "../../style/pages/Error/error.scss"
import Warning from "../../assets/warning.svg"
import DarkWarning from "../../assets/warning-dark.svg"
import { currentTheme } from "../../features/selector";
import { useSelector } from "react-redux";

const Error = () => {

    const colors = useSelector(currentTheme)

    return (
        <div>
            <Helmet>
                <title>Error - 404</title>
            </Helmet>
      <div className={"errorFlex "+colors}>
{colors === "Dark"? <img src={DarkWarning} alt="warning" className="warning" /> : <img src={Warning} alt="warning" className="warning" />}        

        <div>Cette page n&apos;existe pas!</div>
      </div>

      </div>
    )
}

export default Error;