import IConsole from "../plataforms/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(plataform: IConsole){
        super(plataform);
    }
    challenge() : void{
        console.log("Desafios liberados");
    }
    coop() : void{
        console.log("Co-Op liberado");
    }
}