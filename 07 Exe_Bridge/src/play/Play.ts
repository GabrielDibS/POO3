import IConsole from "../plataforms/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{

    constructor(private plataform: IConsole){}
    playing(): void {
        console.log("Abrindo...")
    }
    result(): void {
       console.log("**Jogo em execução**");
    }
}
