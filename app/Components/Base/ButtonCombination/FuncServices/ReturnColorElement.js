import Fire  from "../../../../../public/ElementFire.png";
import Earth from "../../../../../public/ElementEarth.png";
import Wind  from "../../../../../public/ElementWind.png";
import Water from '../../../../../public/ElementWater.png';
import Image from "next/image";

const returnClassName = (Signo,Fire,Earth,Wind,Water) => 
{
return(Signo == "Áries" || Signo == "Leão" || Signo == "Sagitário" ? Fire : Signo == "Touro" || Signo == "Virgem" || Signo == "Capricórnio" ? Earth : Signo == "Gêmeos" || Signo == "Libra" || Signo == "Aquário" ? Wind : Signo == "Câncer" || Signo == "Escorpião" || Signo == "Peixes" ? Water : "");
}

const returnTextElement = (Signo) =>
{
return(Signo == "Áries" || Signo == "Leão" || Signo == "Sagitário" ? "Elemento Fogo" : Signo == "Touro" || Signo == "Virgem" || Signo == "Capricórnio" ? "Elemento Terra" : Signo == "Gêmeos" || Signo == "Libra" || Signo == "Aquário" ? "Elemento Ar" : Signo == "Câncer" || Signo == "Escorpião" || Signo == "Peixes" ? "Elemento Água": "");
}

const returnIMGSign = (Signo) => 
{
return(Signo == "Áries" || Signo == "Leão" || Signo == "Sagitário" ? <Image src={Fire} alt={"IMG.png"}/> : Signo == "Touro" || Signo == "Virgem" || Signo == "Capricórnio" ? <Image src={Earth} alt={"IMG.png"}/> : Signo == "Gêmeos" || Signo == "Libra" || Signo == "Aquário" ? <Image src={Wind} alt={"IMG.png"}/> : Signo == "Câncer" || Signo == "Escorpião" || Signo == "Peixes" ? <Image src={Water} alt={"IMG.png"}/> : "");
}

const returnColorAndBackground = (Signo,Fire,Earth,Wind,Water) => 
{
return(
Signo == "Áries" || Signo == "Leão" || Signo == "Sagitário" ? Fire : Signo == "Touro" || Signo == "Virgem" || Signo == "Capricórnio" ? Earth : Signo == "Gêmeos" || Signo == "Libra" || Signo == "Aquário" ? Wind : Signo == "Câncer" || Signo == "Escorpião" || Signo == "Peixes" ? Water : ""
);
}

export {returnClassName,returnTextElement,returnIMGSign,returnColorAndBackground};