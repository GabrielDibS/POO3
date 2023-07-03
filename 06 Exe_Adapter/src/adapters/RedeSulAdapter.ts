import ICorreiosTransport from "../correios/ICorreiosTransport";
import RedeSul from "../redesul/RedeSul";
import Token from "../utils/Token";

export default class RedeSulAdapter implements ICorreiosTransport{

    private token : Token 
    constructor(private redesul: RedeSul){
        console.log("Adaptando...");
    }
    authToken(): Token {
        return new Token;
    }
    sendCorreios(): void {
        return this.redesul.send();
    }
    receiveCorreios(): void {
        return this.redesul.receive();
    }
}