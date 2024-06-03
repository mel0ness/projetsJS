import "../../style/pages/gradientGenerator/gradientGenerator.scss"
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
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

const StyledModale = styled.div`
    position: absolute;
    display: flex;
    visibility: ${props => props.visibility};
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: white;
    border: 3px solid black;
    border-radius: 20px;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-align: center;
    transition: 0.5s;

`

const GradientGenerator = () => {

const [colorOne, updateColorOne] = useState("#FF5F6D")    
const [colorTwo, updateColorTwo] = useState("#FFC371")    
const [range, updateRange] = useState("90")
const [colorLabelOne, updateColorLabelOne] = useState("black")
const [colorLabelTwo, updateColorLabelTwo] = useState("black")
const [modaleContent, updateModaleContent] = useState("")
const [modaleSize] = useState([0, 0])
const [modaleVisibility, updateModaleVisibility] = useState("hidden")
const [Colors] = useState([])  
const [modale, updateModale] = useState(false)  

useEffect(() => {
hex_to_RGB(colorOne, updateColorLabelOne)
hex_to_RGB(colorTwo, updateColorLabelTwo)}
, [colorOne, colorTwo])


const changeColor = (e, f, g, h) => {
   e(f.value.toUpperCase())
        hex_to_RGB(f.value, g)
        modaleValidator(`${h} couleur changée pour ${f.value.toUpperCase()}`)

    }

const changeRange = (e) => {
updateRange(e.value)
modaleValidator(`Orientation changée pour ${range}°`)
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
    modaleValidator("Gradient copié dans votre presse papier!")
}

const modaleValidator = (e) => {
  updateModale(true)
    
    
    setTimeout(
        function() {
            updateModaleVisibility("visible")
            modaleSize[0] = "300px"
            modaleSize[1] = "100px"
        },
        8
    )
    
    setTimeout(
        function() {
            updateModaleContent(e)
        },
        500
    )
    
    
    setTimeout(
        function() {
            updateModaleContent("")
            modaleSize[0] = 0
            modaleSize[1] = 0
            updateModaleVisibility("hidden")
        },
        1500
    )
    
    setTimeout(
        function() {
            updateModale(false)
        },
        1850
    )
    }

const random = () => {
    randomColor(updateColorOne, 0, 1, 2, colorOne, updateColorLabelOne);
    randomColor(updateColorTwo, 3, 4, 5, colorTwo, updateColorLabelTwo);
    randomRange();
//     hex_to_RGB(colorOne, updateColorLabelOne)
// hex_to_RGB(colorTwo, updateColorLabelTwo)
}
 
const randomColor = (updateColors, iOne, iTwo, iThree) => {
        
        let r = (Math.random()*255).toFixed(0)
        let g = (Math.random()*255).toFixed(0)
        let b = (Math.random()*255).toFixed(0)
        
        toHex(r, iOne);
        toHex(g, iTwo);
        toHex(b, iThree);
        
        updateColors(`#${Colors[iOne].toUpperCase()}${Colors[iTwo].toUpperCase()}${Colors[iThree].toUpperCase()}`);
        
        }
        const toHex = (e, f) => {
            let hex = parseInt(e).toString(16);
         hex.length === 1 ? hex = "0" + hex : hex === hex;
         Colors[f] = hex;
         
        }
        
        const randomRange = () => {
            let rangeProv = (Math.random()*360).toFixed(0)
        
            updateRange(rangeProv);
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
                <input type="color" className="P6-hiddenInput" id="color1" value={colorOne} onChange={(e) => changeColor(updateColorOne, e.target, updateColorLabelOne, "Première")} />
                </StyledBlock>
                <StyledBlock color={colorTwo} className="P6-inputColor">
                <StyleLabel htmlFor="color2" color={colorLabelTwo}>{colorTwo}</StyleLabel>
                <input type="color" className="P6-hiddenInput" id="color2" value={colorTwo} onChange={(e) => changeColor(updateColorTwo, e.target, updateColorLabelTwo, "Deuxième")} />
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
            <input type="button" className="P6-button" value="Random" onClick={() => random()}/>
        </div>
        {
            modale?       <StyledModale width={modaleSize[0]} height={modaleSize[1]} visibility={modaleVisibility}>{modaleContent}</StyledModale> : <div></div>
        }
  
    </div>

</StyledBody>
    )

}


export default GradientGenerator;