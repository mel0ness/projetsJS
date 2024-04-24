import "../../style/pages/gradientGenerator/gradientGenerator.scss"
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import styled from "styled-components";

const StyledBody = styled.div`
min-height: 100vh;
font-family: Arial, Helvetica, sans-serif;
background: linear-gradient(${props => props.$range}deg, ${props => props.$colorone}, ${props => props.$colortwo});
padding-top: 20vh;
position: relative;

@media (min-width: 500px) {
    padding: clamp(20px, 20vw, 200px) 20px 0;
  }
}
`;

const StyledBlock = styled.div`

    background-color: ${props => props.color};

`
const StyleLabel = styled.label`
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 1.4rem;
    font-weight: bold;
    width: 100%;
    height: 100%;
    color: ${props => props.color}
`

const GradientGenerator = () => {

const [colorOne, updateColorOne] = useState("#FF5F6D")    
const [colorTwo, updateColorTwo] = useState("#FFC371")    
const [range, updateRange] = useState("90")
const [colorLabelOne, updateColorLabelOne] = useState("black")
const [colorLabelTwo, updateColorLabelTwo] = useState("black")
const [Colors] = useState([])  
const [modale, updateModale] = useState(false)  



const changeColor = (e, f, g) => {
   e(f.value.toUpperCase())
        hex_to_RGB(f.value, g)
        // modaleValidator(`Première couleur changée pour ${colorOne.value}`)

    }

const changeRange = (e) => {
updateRange(e.value)
}

    const  hex_to_RGB = (hex, label) => {
        let m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
        let r = parseInt(m[1], 16);
        let g = parseInt(m[2], 16);
        let b = parseInt(m[3], 16);
    
    let rgb = (r * 299 + g * 587 + b * 144) / 1000;
    if(rgb < 128) {
    label("white")
    }
    else {
        label("black")
    }
    }

const copy = () => {
    navigator.clipboard.writeText(`linear-gradient(${range}deg, ${colorOne}, ${colorTwo})`);
}

    return (
        <StyledBody $range={range} $colorone={colorOne} $colortwo={colorTwo}>

<Helmet>
            <title>Gradient generator</title>
            
            </Helmet>
    <div className="P6-mainDiv">
        <div className="P6-inputsColor">
            <StyledBlock color={colorOne} className="P6-inputColor">
                <StyleLabel htmlFor="color1" color={colorLabelOne} >{colorOne}</StyleLabel>
                <input type="color" className="P6-hiddenInput" id="color1" value={colorTwo} onChange={(e) => changeColor(updateColorOne, e.target, updateColorLabelOne)} />
                </StyledBlock>
                <StyledBlock color={colorTwo} className="P6-inputColor">
                <StyleLabel htmlFor="color2" color={colorLabelTwo}>{colorTwo}</StyleLabel>
                <input type="color" className="P6-hiddenInput" id="color2" value={colorTwo} onChange={(e) => changeColor(updateColorTwo, e.target, updateColorLabelTwo)} />
                </StyledBlock>
        </div>
        <div className="P6-inputsRange">
            <div className="P6-labelsRange">
                <div>Orientation :</div>
                <label htmlFor="range" className="P6-labelRange" id="orientation">{range}°</label>
            </div>
            <input type="range" min="0" max="360" value={range} id="range" onChange={(e) => changeRange(e.target)} />
        </div>
        <div className="P6-inputsButton">
            <input type="button" className="P6-button" value="Copier" onClick={() => copy()}/>
            <input type="button" className="P6-button" value="Random" />
        </div>
        {
            modale?       <div className="P6-modale" id="modale"></div> : <div></div>
        }
  
    </div>

</StyledBody>
    )

}


export default GradientGenerator;