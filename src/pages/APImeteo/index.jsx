import "../../style/pages/APImeteo/APImeteo.scss"
import earth from "../../assets/earth.png"
import { useRef, useState } from "react"
import { useGeolocated } from "react-geolocated";
import DayPrev from "../../components/dayPrev";

const APImeteo = () => {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,
        });
  const nextDay1 = new Date((new Date().getTime() + (24 * 60 * 60 * 1000))).toLocaleDateString("fr-FR", {weekday: "long"})
  const nextDay2 = new Date((new Date().getTime() + (48 * 60 * 60 * 1000))).toLocaleDateString("fr-FR", {weekday: "long"})
  const nextDay3 = new Date((new Date().getTime() + (72 * 60 * 60 * 1000))).toLocaleDateString("fr-FR", {weekday: "long"})
  const currentHour = new Date().getHours();

const [loader, updateLoader] = useState(true);  
const [currentIMG, updateCurrentIMG] = useState("../jour/01d.svg");  
const [currentLocation, updateCurrentLocation] = useState("Europe/Budapest");  
const [currentTemp, updateCurrentTemp] = useState(18);  
const [hours] = useState(["-", "-", "-", "-", "-", "-", "-"])
const [hoursTemp] = useState(["/", "/", "/", "/", "/", "/", "/"])
const [days] = useState(["-", "-", "-"])
const [APIKEY, updateAPIKEY] = useState("")
const [hourActive, updateHourActive] = useState(true)
const [infos, updateInfos] = useState("Veuillez renseigner votre APIKEY openWeather pour continuer :")
const [modale, updateModale] = useState(true)
const [resultsDaily, updateResultsDaily] = useState({}) 
const [displayDayByDay, updateDisplayDayByDay] = useState(false);
const info = useRef(null);
const API = useRef(null);

const fetching = () => {
  if(APIKEY === "") {
info.current.classList.add("P5-error")
  }
  else {
fetchCurrent(coords.latitude, coords.longitude)
  }
}

async function fetchCurrent(e, f) {
  try {
const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${e}&lon=${f}&lang=fr&units=metric&appid=${APIKEY}`);
const Results = await response.json();

if(Results.cod) {
switch (Results.cod) {
  case 401:
    updateInfos("Votre API n'est pas correcte, veuillez en entrer une valide")
    updateAPIKEY("")
    info.current.classList.add("P5-error")
    API.current.value = ""
    break;
  case 429:
    info.current.classList.add("P5-error")
    updateInfos("Votre plan ne vous permet pas autant de requêtes, veuillez réessayer plus tard!")
    API.current.value = "";
    updateAPIKEY("")
    break;
}
}
else {
updateModale(false);
displayCurrent(Results.timezone, Results.current.temp, Results.current.weather[0].icon);
displayByHour(Results.hourly);
displayNamePrevisions();
updateResultsDaily(Results.daily);
updateDisplayDayByDay(true);
}
  }
  catch (error) {
const Results = error;
console.log(Results);
  }
}

const displayCurrent = (e, f, g) => {

  const temp = f.toFixed(0);
  if(g.substring(2) === "d") {
    updateCurrentIMG(`../jour/${g}.svg`)
  }
  else{
    updateCurrentIMG(`../nuit/${g}.svg`)
  }
  updateCurrentLocation(e);
  updateCurrentTemp(temp);


setTimeout( function() {
updateLoader(false)
}
, 1500)  

}

const displayByHour=(e) => {
  for(let i=0; i<7; i++) {
    const calcul = i*3 +3 + currentHour;
    if(calcul >= 24) {
      hours[i] = `${calcul - 24}h`
      hoursTemp[i] = `${e[(i+1)*3].temp.toFixed()}°`
    }
    else {
      hours[i] = `${calcul}h`
      hoursTemp[i] = `${e[(i+1)*3].temp.toFixed()}°`
    }
  }
  }

  const displayNamePrevisions = () => {
    days[0] = nextDay1.substring(0, 3)
    days[1] = nextDay2.substring(0, 3)
    days[2] = nextDay3.substring(0, 3)
    }

return (
    <div className="P5-body">
{modale? 
    <div className="P5-modaleBack" id="modaleBack">
      <div className="P5-modaleAPI" id="modaleAPI">
        {!isGeolocationAvailable? <div className="P5-information" id="information">Votre naigateur ne supporte pas la géolocalisation :/</div> : <div className="P5-hidden"></div>}
{!isGeolocationEnabled? <div className="P5-information" id="information">Vous devez accepter la géolocalisation pour continuer!</div> : <div className="P5-information" id="information" ref={info}>{infos}</div> }
        
        <input type="text" className="P5-API" onChange={(e) => updateAPIKEY(e.target.value)} ref={API}/>
        {!isGeolocationEnabled? <input type="button" className="P5-buttonAPI" value="Valider mon APIKEY" disabled /> : <input type="button" className="P5-buttonAPI" value="Valider mon APIKEY" id="buttonAPI" onClick={() => fetching() } />}
      </div>
    </div>
: <div></div>}
    <div className="P5-mainDisplay">
  
      <div className="P5-h1">Application <span className="P5-title">météo</span></div>
      {loader?  <div className="P5-loader" id="loader">
        <img src={earth} alt="earth" className="P5-imgLoader" />
        <div className="P5-imgLoaderMove"></div>
      </div>
      :
      <div>
      <img className="P5-img P5-current" alt="current" src={currentIMG} />
      <div className="P5-temp P5-current">{currentTemp}°</div>
      <div className="P5-localisation P5-current">{currentLocation}</div></div>
       }
     
    
    </div>
  
  
    <div className="P5-detailedDisplay">
      <div className="P5-selection">
        {hourActive? <div className="P5-button P5-active" id="hour">Heures</div> : <div className="P5-button" id="hour" onClick={() => updateHourActive(true)}>Heures</div>}
       {hourActive? <div className="P5-button" id="future" onClick={() => updateHourActive(false)}>Prévisions</div> : <div className="P5-button P5-active" id="future">Prévisions</div>} 
      </div>
      {hourActive? 
      <div className="P5-hours" id="hourByHour">
        <div className="P5-hour">
          <div className="P5-time P5-time">{hours[0]}</div>
          <div className="P5-timeTemp P5-hourPrev">{hoursTemp[0]}</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">{hours[1]}</div>
          <div className="P5-timeTemp P5-hourPrev">{hoursTemp[1]}</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">{hours[2]}</div>
          <div className="P5-timeTemp P5-hourPrev">{hoursTemp[2]}</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">{hours[3]}</div>
          <div className="P5-timeTemp P5-hourPrev">{hoursTemp[3]}</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">{hours[4]}</div>
          <div className="P5-timeTemp P5-hourPrev">{hoursTemp[4]}</div>
        </div>
        <div className="P5-hour">
          <div className="P5-time P5-time">{hours[5]}</div>
          <div className="P5-timeTemp P5-hourPrev">{hoursTemp[5]}</div>
        </div>
        <div className="P5-hour P5-lastHour">
          <div className="P5-time P5-time">{hours[6]}</div>
          <div className="P5-timeTemp P5-hourPrev">{hoursTemp[6]}</div>
        </div>
      </div>
      :
      <div className="P5-hours" id="dayByDay">
        <div className="P5-days">
          <div className="P5-day">{days[0]}</div>
          <DayPrev resultsDaily={resultsDaily[1]} display={displayDayByDay} />
        </div>
        <div className="P5-days">
          <div className="P5-day">{days[1]}</div>
          <DayPrev resultsDaily={resultsDaily[2]} display={displayDayByDay} />
        </div>
        <div className="P5-days P5-lastday">
          <div className="P5-day">{days[2]}</div>
          <DayPrev resultsDaily={resultsDaily[3]} display={displayDayByDay} />
        </div>
      </div>}
  </div>
  </div>
)    
}

export default APImeteo;

