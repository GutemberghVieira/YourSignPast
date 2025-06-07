import "./Light_Night.css";
import "./global.css";

export const metadata = 
{
title:"Your Sign",
description:"Explore sobre o seu signo e descubra como cada fibra do seu ser reage a força das 12 constelações, veja a qual elemento ele pertence,qual simbolo o representa e qual planeta o rege, você vai se surpreender lendo sobre os magnifícos signos do zodiaco, cada informação mostra-rá uma autobiografia de como cada signo age aos sentimentos como amor,ódio,tristeza e alegria, Leia e  Aprenda sobre como os Signos formam uma pessoa alegre,inteligente,intruitiva,raivosa e cheia de sentimentos que podem mudar o mundo,essa pessoa é muito especial,Você! O seu signo pode ser o mais poderoso entre as 88 constelações,vai ficar só na curiosidade?",
}

export default function appRouter({children}) 
{
return(
<html>
<body lang="pt-BR" className="BodyStyle">
{children}
</body>
</html>
)
}