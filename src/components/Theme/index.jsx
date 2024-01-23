import "../../style/components/Theme/theme.scss"
import Moon from "../../assets/moon.png"
import Sun from "../../assets/sun.png"
import { useDispatch, useSelector } from "react-redux"
import {Dark, Light} from "../../Features/themeReducer"
import { currentTheme } from "../../features/selector"


const Theme = () => {
    const colors = useSelector(currentTheme)
    const dispatch = useDispatch();

    const light = () => {
        dispatch(Light())
    }

    const dark = () => {
        dispatch(Dark())
    }
    return (
        <div className={"theme "+colors}>
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