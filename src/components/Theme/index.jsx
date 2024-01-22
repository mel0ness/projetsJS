import "../../Style/Components/Theme/theme.scss"
import Moon from "../../assets/moon.png"
import Sun from "../../assets/sun.png"
import { useDispatch } from "react-redux"
import {Dark, Light} from "../../Features/themeReducer"

const Theme = () => {
    const dispatch = useDispatch();

    const light = () => {
        dispatch(Light())
    }

    const dark = () => {
        dispatch(Dark())
    }
    return (
        <div className="theme">
<div>Choix du thème</div>
<div className="choice">
    <img src={Sun} alt="Light theme" className="imgTheme" onClick={() => light()} />
    <span className="slash">/</span>
    <img src={Moon} alt="Dark theme" className="imgTheme" onClick={() => dark()}/>
</div>


        </div>
    )
}

export default Theme;