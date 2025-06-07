"use client";

import Style from "./style.module.css"
import { DataMarks } from "./Data/index.js";
import  WallpaperOfCard  from "../Base/ButtonCombination/FuncServices/ReturnWallpaper.js";
import React,{useState,useRef, useEffect} from "react";
import Combination from "../Base/ButtonCombination/index.jsx";

/***World Signs Images*/
import WorldSigns  from "../Base/ButtonCombination/FuncServices/ReturnWorldSign"

/**Icon X*/
import { MdClose } from "react-icons/md";

import Image from "next/image";

const BaseContent = ({SignButton,BackgroundColorElement,toChange,ToSendLightDark,GetColorText,GoTransition,setGoTransition}) =>
{
    
const [ControlContent,setControlContent] = useState(false);
const [OtherControl,setOtherContent] = useState(false);
const GoReturnStart = useRef(null);

const RetireSign = (n) =>
{
toChange("");
setControlContent(n);
GetColorText(SignButton);
setOtherContent(""); 
document.querySelector("body").style.overflowY = "scroll";
setTimeout(() => {
setGoTransition(false)
},300)
};

useEffect(() => {
if(GoReturnStart.current)
{
GoReturnStart.current.scrollTo({top:0,behavior:"smooth"});
}
},[SignButton,GoTransition]);
 
if(!GoTransition && !SignButton) return null;

return(
DataMarks.map((PropSign) => (
<div key={PropSign.ID} className={`${SignButton == PropSign.Mark && GoTransition == true ? Style.ContainerBase : Style.Remove}`}>

<div className={`${Style.ContainerSign} ${WallpaperOfCard(SignButton,Style)}`}>

<div className={Style.Content}>

<div className={Style.ContentAllSign}>
    
<div ref={GoReturnStart} className={`${Style.SubContent} ${BackgroundColorElement(SignButton,Style.FireStyle,Style.EarthStyle,Style.WindStyle,Style.WaterStyle)}`}>
<MdClose onClick={() => RetireSign("")} className={Style.XSmallClose}/>

<h2 className={Style.HeadingMark}><Image src={PropSign.CoatOfArms} alt={"Img.png"}/>{PropSign.Mark}</h2>

<div className={Style.ContainerSmallWorld}>
<p className={Style.TextSmallWorld}>{PropSign.TextWorld}</p>
<Image src={PropSign.SignWorld} alt="IMG.png"/>
</div>

<h3 className={Style.ParagraphMark}>Pessoas de {PropSign.Mark}</h3>
<p className={Style.ParagraphMark}>{PropSign.Summary}</p>
<h3 className={Style.ParagraphMark}>Personalidade</h3>
<p className={Style.ParagraphMark}>{PropSign.Personality}</p>

<div className={Style.CombinationStyle}>
<Combination
Mark={PropSign.Mark}
PerfectCombination={PropSign.Combination}
ContentCombination={PropSign.WhyCombination}
Aries={PropSign.Aries}
ContentAries={PropSign.WhyCombinationAries}
Bull={PropSign.Bull}
ContentBull={PropSign.WhyCombinationBull}
Twins={PropSign.Twins}
ContentTwins={PropSign.WhyCombinationTwins}
Cancer={PropSign.Cancer}
ContentCancer={PropSign.WhyCombinationCancer}
Leo={PropSign.Leo}
ContentLeo={PropSign.WhyCombinationLeo}
Virgo={PropSign.Virgo}
ContentVirgo={PropSign.WhyCombinationVirgo}
Pound={PropSign.Pound}
ContentPound={PropSign.WhyCombinationPound}
Scorpion={PropSign.Scorpion}
ContentScorpion={PropSign.WhyCombinationScorpion}
Sagittarius={PropSign.Sagittarius}
ContentSagittarius={PropSign.WhyCombinationSagittarius}
Capricorn={PropSign.Capricorn}
ContentCapricorn={PropSign.WhyCombinationCapricorn}
Aquarius={PropSign.Aquarius}
ContentAquarius={PropSign.WhyCombinationAquarius}
Pices={PropSign.Pices}
ContentPices={PropSign.WhyCombinationPices}
CoatOfAries={PropSign.CoatAries}
CoatOfTouro={PropSign.CoatTouro}
CoatOfGemeos={PropSign.CoatGemeos}
CoatOfCancer={PropSign.CoatCancer}
CoatOfLeao={PropSign.CoatLeao}
CoatOfVirgem={PropSign.CoatVirgem}
CoatOfLibra={PropSign.CoatLibra}
CoatOfEscorpiao={PropSign.CoatEscorpiao}
CoatOfSagitario={PropSign.CoatSagitario}
CoatOfCapricornio={PropSign.CoatCapricornio}
CoatOfAquario={PropSign.CoatAquario}
CoatOfPeixes={PropSign.CoatPeixes}
BadIMG={PropSign.BadImg}
HellAstral={PropSign.HellAstral}
ContentHellAstral={PropSign.WhyHellAstral}
ControlContent={ControlContent}
setControlContent={setControlContent}
OtherControl={OtherControl}
setOtherContent={setOtherContent}
/>
</div>
</div>

</div>

</div>

<div className={Style.WorldSigns}>

<div className={Style.WorldContent}>

<div onClick={() => RetireSign('')} className={Style.ContainerXClose}>
<MdClose className={Style.CloseXStyle}/>
<p className={Style.ParagraphXClose}>Fechar</p>
</div>

<h2 className={Style.DangerText}>{PropSign.Mark} é Regido {PropSign.Mark == "Leão" ? "Pelo" : PropSign.Mark == "Câncer" ? "Pela" :  "Por"}</h2>
<WorldSigns ReciveSign={PropSign.Mark} On_Off={ToSendLightDark}/>
</div>

</div>

</div>

</div>
)));

}

export default BaseContent;