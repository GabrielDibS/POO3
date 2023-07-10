import IConsole from "./plataforms/IConsole";
import PlayStation from "./plataforms/PlayStation";
import SteamDeck from "./plataforms/SteamDeck";
import XBox from "./plataforms/XBox";
import AdvancedPlay from "./play/AdvancedPlay";
import Play from "./play/Play";

function startPlay(platform : IConsole){
    console.log("Iniciando...")
    const live = new Play(platform);
    live.playing();
    live.result();
}

function startAdvancedPlay(platform : IConsole){
    console.log("Iniciando...");
    const live = new AdvancedPlay(platform);
    live.playing();
    live.result();
    live.challenge();
    live.coop();
}

startPlay(new PlayStation());
startPlay(new XBox());
startPlay(new SteamDeck());

startAdvancedPlay(new PlayStation());
startAdvancedPlay(new XBox());
startAdvancedPlay(new SteamDeck());