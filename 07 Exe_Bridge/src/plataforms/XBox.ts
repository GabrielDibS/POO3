import IConsole from "./IConsole";

export default class XBox implements IConsole{

    constructor(){
        this.configureGame()
        console.log("XBox: Iniciando o console...")
    }
    configureGame(): void {
        this.authToken()
        console.log("XBox: Configurando o jogo...")
    }
    authToken(): void {
        console.log("XBox: Instalando o jogo...")
    }
}