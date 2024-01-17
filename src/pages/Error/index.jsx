import { Helmet } from "react-helmet-async";
import "../../style/pages/Error/error.scss"
import Warning from "../../assets/warning.svg"

const Error = () => {

    return (
        <div>
            <Helmet>
                <title>Error - 404</title>
            </Helmet>
      <div className="errorFlex">
<img src={Warning} alt="warning" className="warning" />
        <div>Cette page n&apos;existe pas!</div>
      </div>

      </div>
    )
}

export default Error;