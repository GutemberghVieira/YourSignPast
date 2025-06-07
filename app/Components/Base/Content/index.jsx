
import { returnClassName,returnTextElement,returnIMGSign,returnColorAndBackground} from "../../Base/ButtonCombination/FuncServices/ReturnColorElement";

import Style from "./style.module.css";
  

const ContentOfButton = ({Signo,Content,Control,StyleAquarius}) =>
{
return(
<div className={`${Control ? Style.ContentStyle : Style.RemoveContent} ${returnClassName(Signo,Style.FireStyle,Style.EarthStyle,Style.WindStyle,Style.WaterStyle)}`}>

<div className={Style.SubContent}>
<p className={StyleAquarius == "Aquarius" ? Style.AquarioStyle : ""}>{Content}</p>

<div className={`${Style.StyleElements}`}>

<p className={`${Style.Bold} ${returnClassName(Signo,Style.FireStyle,Style.EarthStyle,Style.WindStyle,Style.WaterStyle)}`}>
{Signo}
</p>

<span className={`${Style.Paragraph} ${returnColorAndBackground(Signo,Style.Fire,Style.Earth,Style.Wind,Style.Water)}`}>
{returnTextElement(Signo)} 
</span>

<div className={Style.ControlIMG}>
{returnIMGSign(Signo)} 
</div>

</div>

</div>
</div>

);
}

export default ContentOfButton;