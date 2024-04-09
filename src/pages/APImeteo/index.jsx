import "../../style/pages/APImeteo/APImeteo.scss"
import earth from "../../assets/earth.png"

const APImeteo = () => {


return (
    <div className="P5-body">

    <div className="P5-modaleBack" id="modaleBack">
      <div className="P5-modaleAPI" id="modaleAPI">
        <div className="P5-information" id="information">Veuillez renseigner votre APIKEY openWeather pour continuer :</div>
        <input type="text" className="P5-API" id="APIKEY" />
        <input type="button" className="P5-buttonAPI" value="Valider mon APIKEY" id="buttonAPI" />
      </div>
    </div>
  
    <div className="P5-mainDisplay">
  
      <div className="P5-h1">Application <span className="P5-title">météo</span></div>
      <div className="P5-loader" id="loader">
        <img src={earth} alt="earth" className="P5-imgLoader" />
        <div className="P5-imgLoaderMove"></div>
      </div>
      <img className="P5-img P5-hidden P5-current" alt="current" />
      <div className="P5-temp P5-hidden P5-current">18°</div>
      <div className="P5-localisation P5-hidden P5-current">Europe/Budapest</div>
    </div>
  
  
    <div className="P5-detailedDisplay">
      <div className="P5-selection">
        <div className="P5-button P5-active" id="hour">Heures</div>
        <div className="P5-button" id="future">Prévisions</div>
      </div>
      <div className="P5-hours" id="hourByHour">
        <div className="P5-hour">
          <div className="P5-time P5-time">-</div>
          <div className="P5-timeTemp P5-hourPrev">/</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">-</div>
          <div className="P5-timeTemp P5-hourPrev">/</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">-</div>
          <div className="P5-timeTemp P5-hourPrev">/</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">-</div>
          <div className="P5-timeTemp P5-hourPrev">/</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">-</div>
          <div className="P5-timeTemp P5-hourPrev">/</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">-</div>
          <div className="P5-timeTemp P5-hourPrev">/</div>
        </div>
        <div className="P5-hour P5-lastHour">
          <div className="P5-time P5-time">-</div>
          <div className="P5-timeTemp P5-hourPrev">/</div>
        </div>
      </div>
      <div className="P5-hours P5-hidden" id="dayByDay">
        <div className="P5-days">
          <div className="P5-day"></div>
          <div className="P5-dayTemp" id="tomorrow"></div>
        </div>
        <div className="P5-days">
          <div className="P5-day"></div>
          <div className="P5-dayTemp" id="dayPlusOne"></div>
        </div>
        <div className="P5-days P5-lastday">
          <div className="P5-day"></div>
          <div className="P5-dayTemp" id="dayPlusTwo"></div>
        </div>
      </div>
  </div>
  </div>
)    
}

export default APImeteo;

