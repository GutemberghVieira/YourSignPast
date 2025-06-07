import Image from "next/image";


export const ReturnIMG = (StyleTwoSigns,classRemove,Mark,IMGAries,IMGTouro,IMGemeos,IMGCancer,IMGLeao,IMGVirgem,IMGLibra,IMGEscorpiao,IMGSagitario,IMGCapricornio,IMGAquario,IMGPeixes) => 
{

if(Mark == "Áries")
{   
return(
<>
<Image className={`${classRemove}`} src={IMGSagitario} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGLeao} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Touro")
{
return(
<>
<Image className={`${classRemove}`} src={IMGVirgem} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGCapricornio} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Gêmeos")
{
return(
<>
<Image className={`${classRemove}`} src={IMGLibra} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGAquario} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Câncer")
{
return(
<>
<Image className={`${classRemove}`} src={IMGPeixes} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGEscorpiao} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGCapricornio} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGTouro} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGVirgem} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Leão")
{
return(
<>
<Image className={`${classRemove}`} src={IMGemeos} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGLibra} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGAries} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGSagitario} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Virgem")
{
return(
<>
<Image className={classRemove} src={IMGCapricornio} alt={"IMG.png"}/>
<Image className={classRemove} src={IMGTouro} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Libra")
{
return( 
<>
<Image className={classRemove} src={IMGAries} alt={"IMG.png"}/>
<Image className={classRemove} src={IMGemeos} alt={"IMG.png"}/>
<Image className={classRemove} src={IMGAquario} alt={"IMG.png"}/>
<Image className={classRemove} src={IMGSagitario} alt={"IMG.png"}/>
<Image className={classRemove} src={IMGLeao} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Escorpião")
{
return(
<>
<Image className={classRemove} src={IMGCancer} alt={"IMG.png"}/>
<Image className={classRemove} src={IMGCapricornio} alt={"IMG.png"}/>
<Image className={classRemove} src={IMGPeixes} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Sagitário")
{
return (
<>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGAries} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGLeao} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGemeos} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGAquario} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGLibra} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Capricórnio")
{
return(
<>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGVirgem} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGTouro} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGCapricornio} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGCancer} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGPeixes} alt={"IMG.png"}/>
<Image className={`${StyleTwoSigns} ${classRemove}`} src={IMGEscorpiao} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Aquário")
{
return(
<>
<Image className={`${classRemove}`} src={IMGLeao} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGemeos} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGLibra} alt={"IMG.png"}/>
</>
);
}
else if(Mark == "Peixes")
{
return(
<>
<Image className={`${classRemove}`} src={IMGCancer} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGTouro} alt={"IMG.png"}/>
<Image className={`${classRemove}`} src={IMGEscorpiao} alt={"IMG.png"}/>
</>
);
}

}