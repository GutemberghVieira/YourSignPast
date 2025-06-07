"use client";

/**Imported Background Color*/
import { returnColorAndBackground } from "./Components/Base/ButtonCombination/FuncServices/ReturnColorElement.js";

/**Imported UseState */
import { useState } from "react";

/**Data Card Signs Info*/
import { DataCards } from "./Components/Card/DataCards/index.js";

/**Imported Styles*/
import Style from "./style.module.css";

/**Style Card */
import CardStyles from "../app/Components/Card/Style.module.css";

/**Components reutilizáveis*/
import Topo  from "./Components/Topo";
import Cards from "./Components/Card";
import BaseContent from "./Components/Base";

export default function Home()
{

const [Signo,setSigno] = useState("");
const [StylePage,setNewStylePage] = useState("Night");
const [Light_Or_Dark,setLight_Or_Dark] = useState("Luz"); 
const [ColorText,setColorText] = useState("");
const [GoTransition,setGoTransition] = useState(false);

return(
<div className={`${Style.ContainerDaddy} ${StylePage}`}>
<Topo ColorText={ColorText} NewStyle={setNewStylePage} LightDarkness={Light_Or_Dark} SettarLightDark={setLight_Or_Dark}/>

<div className={Style.Container}>
{DataCards.map((val) =>(
<div className={`${Style.CardContainer}`} key={val.ID}>
<Cards
Ver={val.StandardText}
data_inicio={val.Data_Inicio}
data_fim={val.Data_Fim}
TextLightDark={Light_Or_Dark}
Imagem_SignoLight={val.IMGLight}
Imagem_SignoBlack={val.IMGBlack}
Imagem_SignoSmall={val.SmallIMG}
putSign={setSigno}
Signo={val.Signo}
SpecialStyle={CardStyles.SpecialStyles}
setGoTransition={setGoTransition}
/>
</div>
))}
</div>

<BaseContent SignButton={Signo} BackgroundColorElement={returnColorAndBackground} toChange={setSigno} ToSendLightDark={Light_Or_Dark} GetColorText={setColorText} GoTransition={GoTransition} setGoTransition={setGoTransition}/>

</div>
);
}