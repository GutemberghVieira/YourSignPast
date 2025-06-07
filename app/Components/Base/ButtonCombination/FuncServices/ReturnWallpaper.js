

const WallpaperOfCard = (Signo,Style) => 
{

if(Signo == "Áries")
{
return Style.AriesWallpaper;
}
else if(Signo == "Touro")
{
return Style.TouroWallpaper;
}
else if(Signo == "Gêmeos")
{
return Style.GemeosWallpaper;
}
else if(Signo == "Câncer")
{
return Style.CancerWallpaper;
}
else if(Signo == "Leão")
{
return Style.LeaoWallpaper;
}
else if(Signo == "Virgem")
{
return Style.VirgemWallpaper;
}
else if(Signo == "Libra")
{
return Style.LibraWallpaper;
}
else if(Signo == "Escorpião")
{
return Style.EscorpiaoWallpaper
}
else if(Signo == "Sagitário")
{
return Style.SagitarioWallpaper
}
else if(Signo == "Capricórnio")
{
return Style.CapricornioWallpaper
}
else if(Signo == "Aquário")
{
return Style.AquarioWallpaper
}
else if(Signo == "Peixes")
{
return Style.PeixesWallpaper;
}

}

export default WallpaperOfCard;