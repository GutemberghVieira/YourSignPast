import Image from "next/image";

/**Images Colors Black */
import Mars_Aries_Black              from "../../../../../public/Mars_Sign_Aries_Black.png";
import Venus_Bull_And_Pound_Black    from "../../../../../public/Venus_Sign_Bull_And_Pound_Black.png";
import Mercury_Twins_And_Virgo_Black from "../../../../../public/Mercury_Signs_Twins_And_Virgo_Black.png";
import Moon_Cancer_Black             from "../../../../../public/Moon_Sign_Cancer_Black.png";
import Sun_Leo_Black                 from "../../../../../public/Sun_Sign_Leo_Black.png";
import Pluto_Scorpion_Black          from "../../../../../public/Pluto_Sign_Scorpion_Black.png"
import Jupter_Sagittarius_Black      from "../../../../../public/Jupiter_Sign_Sagittarius_Black.png";
import Saturn_Capricorn_Black        from "../../../../../public/Saturn_Sign_Capricorn_Black.png"
import Uranus_Aquarius_Black         from "../../../../../public/Uranus_Sign_Aquarius_Black.png";
import Neptune_Pices_Black           from "../../../../../public/Neptune_Sign_Pices_Black.png";

/**Images Colors White */
import Mars_Aries_White              from "../../../../../public/Mars_Sign_Aries_White.png";
import Venus_Bull_And_Pound_White    from "../../../../../public/Venus_Sign_Bull_And_Pound_White.png";
import Mercury_Twins_And_Virgo_White from "../../../../../public/Mercury_Signs_Twins_And_Virgo_White.png";
import Moon_Cancer_White             from "../../../../../public/Moon_Sign_Cancer_White.png";
import Sun_Leo_White                 from "../../../../../public/Sun_Sign_Leo_White.png";
import Pluto_Scorpion_White          from "../../../../../public/Pluto_Sign_Scorpion_White.png"
import Jupter_Sagittarius_White      from "../../../../../public/Jupiter_Sign_Sagittarius_White.png";
import Saturn_Capricorn_White        from "../../../../../public/Saturn_Sign_Capricorn_White.png";
import Uranus_Aquarius_White         from "../../../../../public/Uranus_Sign_aquarius_White.png";
import Neptune_Pices_White           from "../../../../../public/Neptune_Sign_Pices_White.png";

const WorldSigns = ({ReciveSign,On_Off}) =>
{

if(ReciveSign == "Áries")
{
return(
<>
<Image src={On_Off == "Luz" ? Mars_Aries_Black : Mars_Aries_White} alt={'Image.png'}/>
</>
);
}
else if(ReciveSign == "Touro" || ReciveSign == "Libra")
{
return(
<>
<Image src={On_Off == "Luz" ? Venus_Bull_And_Pound_Black : Venus_Bull_And_Pound_White} alt={"Image.png"}/>
</>
);
} 
else if(ReciveSign == "Gêmeos" || ReciveSign == "Virgem")
{
return(
<>
<Image src={On_Off == "Luz" ? Mercury_Twins_And_Virgo_Black : Mercury_Twins_And_Virgo_White} alt={"Image.png"}/>
</>
);
}
else if(ReciveSign == "Câncer")
{
return(
<>
<Image src={On_Off == "Luz" ? Moon_Cancer_Black : Moon_Cancer_White} alt={"Image.png"}/>
</>
);
}
else if(ReciveSign == "Leão")
{
return(
<>
<Image src={On_Off == "Luz" ? Sun_Leo_Black : Sun_Leo_White} alt={"Image.png"}/>
</>
);
}
else if(ReciveSign == "Escorpião")
{
return(
<>
<Image src={On_Off == "Luz" ? Pluto_Scorpion_Black : Pluto_Scorpion_White} alt={"Image.png"}/>
</>
);
}
else if(ReciveSign == "Sagitário")
{
return(
<>
<Image src={On_Off == "Luz" ? Jupter_Sagittarius_Black : Jupter_Sagittarius_White} alt={"Image.png"}/>
</>
);
}
else if(ReciveSign == "Capricórnio")
{
return(
<>
<Image src={On_Off == "Luz" ? Saturn_Capricorn_Black : Saturn_Capricorn_White} alt={"Image.png"}/>
</>
);
}
else if(ReciveSign == "Aquário")
{
return(
<>
<Image src={On_Off == "Luz" ? Uranus_Aquarius_Black : Uranus_Aquarius_White} alt={"Image.png"}/>
</>
);
}
else if(ReciveSign == "Peixes")
{
return(
<>
<Image src={On_Off == "Luz" ? Neptune_Pices_Black : Neptune_Pices_White} alt={"Image.png"}/>
</>
)
}

}

export default WorldSigns