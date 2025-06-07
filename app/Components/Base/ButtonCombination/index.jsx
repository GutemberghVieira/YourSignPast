"use client";

import Style from "./style.module.css";
import Image from "next/image";

import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

/**Functions Services*/
import { ReturnClass } from "./FuncServices/ReturnClassName";
import { ReturnIMG   } from "./FuncServices/ReturnIMG";
import ContentOfButton from "../Content/index.jsx";

const Combination = ({Mark,PerfectCombination,ContentCombination,Aries,ContentAries,Bull,ContentBull,Twins,ContentTwins,Cancer,ContentCancer,Leo,ContentLeo,Virgo,ContentVirgo,Pound,ContentPound,Scorpion,ContentScorpion,Sagittarius,ContentSagittarius,Capricorn,ContentCapricorn,Aquarius,ContentAquarius,Pices,ContentPices,CoatOfAries,CoatOfTouro,CoatOfGemeos,CoatOfCancer,CoatOfLeao,CoatOfVirgem,CoatOfLibra,CoatOfEscorpiao,CoatOfSagitario,CoatOfCapricornio,CoatOfAquario,CoatOfPeixes,BadIMG,HellAstral,ContentHellAstral,ControlContent,setControlContent,OtherControl,setOtherContent}) => 
{

const [TextSlice,setTextSlice] = useState("");
const [Control,setControl] = useState(false);

function CONTENT_ON_OR_OF(Signo,ReturnText)
{
setControlContent(Signo);
setControl(!ReturnText);
}

function ReturnRestantText(ReciveText)
{
setTextSlice(ReciveText);
setOtherContent(!OtherControl);
}

const SliceCapricorn = Mark == "Capricórnio" ? `${PerfectCombination.slice(0,24)}...` : Mark == "Câncer" ? `${PerfectCombination.slice(0,16)}...` : PerfectCombination;

return(

<div>

<div className={Style.ContainersCombinations}>
<h2 className={Style.ParagraphMark}>Paraiso Astral de {Mark}</h2>

{/**Button Call Content Perfect Combination*/}
<button onClick={() => CONTENT_ON_OR_OF(PerfectCombination,ControlContent==PerfectCombination&&Control)} className={`${Style.ButtonHasContent} ${Style.PerfectStyle}`} type="button">

<section>
{SliceCapricorn} {Mark == "Capricórnio" || Mark == "Câncer" ? <p onClick={() => ReturnRestantText(Mark == "Capricórnio" || Mark != "Câncer" ? PerfectCombination.slice(25,51) : PerfectCombination.slice(17,47))} className={Style.SeeMoreStyle}>Ver Mais</p> : ""}
</section>

<div className={OtherControl ? Style.BlackStyle : Style.RemoveSVG}>
<p className={Style.TextCortado}>
{TextSlice}
</p>
<IoIosCloseCircle onClick={() => ReturnRestantText("")} className={OtherControl ? Style.MostSVG : Style.RemoveSVG}/>
</div> 

<div className={Mark == "Câncer" || Mark == "Capricórnio" ? Style.UnicStyle : ""}>
{ReturnIMG(Style.TwoSigns,Style.classRemove,Mark,CoatOfAries,CoatOfTouro,CoatOfGemeos,CoatOfCancer,CoatOfLeao,CoatOfVirgem,CoatOfLibra,CoatOfEscorpiao,CoatOfSagitario,CoatOfCapricornio,CoatOfAquario,CoatOfPeixes)}
</div>
<MdOutlineKeyboardArrowDown/>
</button>
</div>

{/**Content Perfect Combination Signs*/}
{<ContentOfButton Signo={Mark} Content={ContentCombination} Control={(ControlContent==PerfectCombination&&Control)&&ControlContent}/>}

<div  className={Style.ContainersCombinations}>
<h2 className={Style.ParagraphMark}>Signos Podem dar Certo com {Mark}</h2>

{/**Button Call Content Aries*/}
<button onClick={() => CONTENT_ON_OR_OF("Áries",ControlContent=="Áries"&&Control)} className={ReturnClass(Aries,"Áries",Style)}type="button">
<MdOutlineKeyboardArrowDown/>
{Aries}
<Image src={CoatOfAries} alt={"IMG.png"}/>
</button>

{/**Content Signs(Aries)*/}
{<ContentOfButton Signo={Mark} Content={ContentAries} Control={(ControlContent==Aries&&Control)&&ControlContent}/>}

{/**Button Call Content Bull*/}
<button onClick={() => CONTENT_ON_OR_OF("Touro",ControlContent=="Touro"&&Control)} className={ReturnClass(Bull,"Touro",Style)} type="button">
<MdOutlineKeyboardArrowDown/>
{Bull}
<Image src={CoatOfTouro} alt={"IMG.png"}/>
</button>

{/**Content Signs(Bull)*/}
{<ContentOfButton Signo={Mark} Content={ContentBull} Control={(ControlContent==Bull&&Control)&&ControlContent}/>}

{/**Button Call Content Twins */}
<button onClick={() => CONTENT_ON_OR_OF("Gêmeos",ControlContent=="Gêmeos"&&Control)} className={ReturnClass(Twins,"Gêmeos",Style)} type="button">
<MdOutlineKeyboardArrowDown/>
{Twins}
<Image src={CoatOfGemeos} alt={"IMG.png"}/>
</button>

{/**Content Signs(Twins)*/}
<ContentOfButton Signo={Mark} Content={ContentTwins} Control={(ControlContent==Twins&&Control)&&ControlContent}/>

{/**Button Call Content Cancer*/}
<button onClick={() => CONTENT_ON_OR_OF("Câncer",ControlContent=="Câncer"&&Control)} className={ReturnClass(Cancer,"Câncer",Style)} type="button">
<MdOutlineKeyboardArrowDown/>
{Cancer}
<Image src={CoatOfCancer} alt={"IMG.png"}/>
</button>

{/**Conteúdo dos botões Signo(Câncer)*/}
<ContentOfButton Signo={Mark} Content={ContentCancer} Control={(ControlContent==Cancer&&Control)&&ControlContent}/>

{/**Button Call Content Leo*/}
<button onClick={() => CONTENT_ON_OR_OF("Leão",ControlContent=="Leão"&&Control)} className={ReturnClass(Leo,"Leão",Style)} type="button">
<MdOutlineKeyboardArrowDown/>
{Leo}
<Image src={CoatOfLeao} alt={"IMG.png"}/>
</button>

{/**Content Signs(Leo)*/}
<ContentOfButton Signo={Mark} Content={ContentLeo} Control={(ControlContent==Leo&&Control)&&ControlContent}/>

{/**Button Call Content Virgo*/}
<button onClick={() => CONTENT_ON_OR_OF("Virgem",ControlContent=="Virgem"&&Control)} className={ReturnClass(Virgo,"Virgem",Style)} type="button">
<MdOutlineKeyboardArrowDown/>
{Virgo} 
<Image src={CoatOfVirgem} alt={"IMG.png"}/>
</button>

{/**Content Signs(Virgo)*/}
<ContentOfButton Signo={Mark} Content={ContentVirgo} Control={(ControlContent==Virgo&&Control)&&ControlContent}/>

{/**Button Call Content Pound*/}
<button onClick={() => CONTENT_ON_OR_OF("Libra",ControlContent=="Libra"&&Control)} className={ReturnClass(Pound,"Libra",Style)} type="button">
<MdOutlineKeyboardArrowDown/>
{Pound}
<Image src={CoatOfLibra} alt={"IMG.png"}/>
</button>

{/**Content Signs(Pound)*/}
<ContentOfButton Signo={Mark} Content={ContentPound} Control={(ControlContent ==Pound&&Control)&&ControlContent}/>

{/**Button Call Content Scorpion*/}
<button onClick={() => CONTENT_ON_OR_OF("Escorpião",ControlContent=="Escorpião"&&Control)} className={ReturnClass(Scorpion,"Escorpião",Style)} type="button">
<MdOutlineKeyboardArrowDown/>
{Scorpion} 
<Image src={CoatOfEscorpiao} alt={"IMG.png"}/>
</button>

{/**Content Signs(Scorpion)*/}
<ContentOfButton Signo={Mark} Content={ContentScorpion} Control={(ControlContent==Scorpion&&Control)&&ControlContent}/>

{/**Button Call Content Sagittarius*/}
<button onClick={() => CONTENT_ON_OR_OF("Sagitário",ControlContent=="Sagitário")} className={ReturnClass(Sagittarius,"Sagitário",Style)}type="button">
<MdOutlineKeyboardArrowDown/>
{Sagittarius} 
<Image src={CoatOfSagitario} alt={"IMG.png"}/>
</button>

{/**Content Signs(Sagittarius)*/}
<ContentOfButton Signo={Mark} Content={ContentSagittarius} Control={(ControlContent==Sagittarius&&Control)&&ControlContent}/>

{/**Button Call Content Capricorn*/}
<button onClick={() => CONTENT_ON_OR_OF("Capricórnio",ControlContent=="Capricórnio"&&Control)} className={`${ReturnClass(Capricorn,"Capricórnio",Style)} `}type="button">
<MdOutlineKeyboardArrowDown/>
{Capricorn} 
<Image src={CoatOfCapricornio} alt={"IMG.png"}/>
</button>

{/**Content Signs(Capricorn)*/}
<ContentOfButton Signo={Mark} Content={ContentCapricorn} Control={(ControlContent==Capricorn&&Control)&&ControlContent}/>

{/**Button Call Content Aquarius*/}
<button onClick={() => CONTENT_ON_OR_OF("Aquário",ControlContent=="Aquário"&&Control)} className={ReturnClass(Aquarius,"Aquário",Style)}type="button">
<MdOutlineKeyboardArrowDown/>
{Aquarius}
<Image src={CoatOfAquario} alt={"IMG.png"}/>
</button>

{/**Content Signs(Aquarius)*/}
<ContentOfButton Signo={Mark} Content={ContentAquarius} Control={(ControlContent==Aquarius&&Control)&&ControlContent} StyleAquarius={Mark==Aquarius&&"Aquarius"}/>

{/**Button Call Content Pices*/}
<button onClick={() => CONTENT_ON_OR_OF("Peixes",ControlContent=="Peixes"&&Control)} className={ReturnClass(Pices,"Peixes",Style)}type="button">
<MdOutlineKeyboardArrowDown/>
{Pices} 
<Image src={CoatOfPeixes} alt={"IMG.png"}/>
</button>

{/**Content Signs(Pices)*/}
<ContentOfButton Signo={Mark} Content={ContentPices} Control={(ControlContent ==Pices&&Control)&&ControlContent}/>

</div>

<div className={Style.ContainersCombinations}>
<h2 className={Style.ParagraphMark}>Inferno Astral de {Mark}</h2>

{/**Button Call Content Bad Astral*/}
<button onClick={() => CONTENT_ON_OR_OF(HellAstral,ControlContent==HellAstral&&Control)} className={Style.ButtonHasContent} type="button">
<MdOutlineKeyboardArrowDown/>
{HellAstral}
<Image src={BadIMG} alt={"IMG.png"}/>
</button>

{/**Content Signs(Bad Astral)*/}
<ContentOfButton Signo={Mark} Content={ContentHellAstral} Control={(ControlContent==HellAstral&&Control)&&ControlContent}/>

</div>

</div>
)
}

export default Combination;