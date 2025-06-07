
import CardStyle  from "./Style.module.css";
import Image from "next/image";

export default function Cards({Ver, data_inicio, data_fim, TextLightDark,Imagem_SignoLight,Imagem_SignoBlack,Imagem_SignoSmall, putSign, Signo, SpecialStyle,setGoTransition}) 
{

const ReturnSign = () => {
putSign(Signo);
document.querySelector("body").style.overflowY = "hidden";

setTimeout(() => {
setGoTransition(true);
},0)
} 

return(
<div className={CardStyle.Card} onClick={ReturnSign}>
<h3 className={CardStyle.HeadingThree}>{`${Ver}`}</h3>
<Image className={CardStyle.SmallSignsImgs} src={Imagem_SignoSmall} alt={"IMG.png"}/>
<div className={CardStyle.ContainerParagraph}>
<p className={CardStyle.Paragraph}>{`${data_inicio}`}</p>
<p className={CardStyle.Paragraph}>á</p>
<p className={CardStyle.Paragraph}>{`${data_fim}`}</p>
</div>

<Image className={CardStyle.Representation} src={TextLightDark == "Luz" ? Imagem_SignoLight : Imagem_SignoBlack} alt={"ImagemSigno.png"}/>
<h2 className={`${SpecialStyle} ${CardStyle.HeadingTwo}`}>{Signo}</h2>
</div>
);
}