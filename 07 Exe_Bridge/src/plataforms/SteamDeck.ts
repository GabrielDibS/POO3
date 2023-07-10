import IConsole from "./IConsole";

export default class SteamDeck implements IConsole{

    constructor(){
        this.configureGame();
        console.log("SteamDeck: Iniciando o console...");
    }
    configureGame(): void {
        this.authToken();
        console.log("SteamDeck: Configurando o jogo...");
    }
    authToken(): void {
        console.log("SteamDeck: Instalando o jogo...");
    }
}