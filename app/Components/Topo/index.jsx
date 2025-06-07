"use client";

import { returnColorAndBackground } from "../Base/ButtonCombination/FuncServices/ReturnColorElement";
import TopoStyle from "./StyleTopo.module.css";
import SignoWhite from "../../../public/Signos_White.png";
import SignoBlack from "../../../public/Signos_Black.png";
import Image from "next/image";
import { CiLight } from "react-icons/ci";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { WiMoonAltWaningCrescent6 } from "react-icons/wi";
import { useState } from "react"; 

export default function Topo({ColorText,NewStyle,LightDarkness,SettarLightDark}){

const [Welcome,setRemoveWelcome] = useState(false);
const [IMGLight,setIMGNight] = useState(SignoWhite);

function ComeWelcome()
{
setRemoveWelcome(!Welcome);
}

function StyleLightNight(ReciveNameStyle,ReciveIMG,LightDark){
setIMGNight(ReciveIMG);
NewStyle(ReciveNameStyle);
SettarLightDark(LightDark);
} 

const Moon = <WiMoonAltWaningCrescent6 onClick={() => StyleLightNight("Night",SignoWhite,"Luz")}/>
const Sun  = <CiLight onClick={() => StyleLightNight("Light",SignoBlack,"Dark")}/>

return(
<div className={TopoStyle.TopoContainer}>
<h2><Image src={IMGLight} alt="Logo_Signos.png"/>Baralho dos <span className={returnColorAndBackground(ColorText,TopoStyle.Fire,TopoStyle.Earth,TopoStyle.Wind,TopoStyle.Water)}>S</span>i<span className={returnColorAndBackground(ColorText,TopoStyle.Fire,TopoStyle.Earth,TopoStyle.Wind,TopoStyle.Water)}>g</span>nos</h2>

<i className={LightDarkness ? TopoStyle.MoonStyle : TopoStyle.SunStyle}>{LightDarkness == "Luz" ? Sun : Moon }</i> 

<p className={`${Welcome ? TopoStyle.Triangle : TopoStyle.RemoveWelcome}`}></p>

<p className={`${Welcome ? TopoStyle.StyleParagraph : TopoStyle.RemoveParagraph}`}><span className={returnColorAndBackground(ColorText,TopoStyle.Fire,TopoStyle.Earth,TopoStyle.Wind,TopoStyle.Water)}>D</span>e<span className={returnColorAndBackground(ColorText,TopoStyle.Fire,TopoStyle.Earth,TopoStyle.Wind,TopoStyle.Water)}>s</span>cubra curiosidades sobre o seu <span className={returnColorAndBackground(ColorText,TopoStyle.Fire,TopoStyle.Earth,TopoStyle.Wind,TopoStyle.Water)}>S</span>i<span className={returnColorAndBackground(ColorText,TopoStyle.Fire,TopoStyle.Earth,TopoStyle.Wind,TopoStyle.Water)}>g</span>no</p>


<button onClick={ComeWelcome} className={TopoStyle.ButtonEmergency}>Boas Vindas <MdOutlineKeyboardDoubleArrowDown/></button>

</div>
);

}