import IConsole from "./IConsole"

export default class PlayStation implements IConsole{

    constructor(){
        this.configureGame()
        console.log("PlayStation: Iniciando o console...")
    }
    configureGame(): void {
        this.authToken()
        console.log("PlayStation: Configurando o jogo...")
    }
    authToken(): void {
        console.log("PlayStation: Instalando o jogo...")
    }
}