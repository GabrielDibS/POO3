import Token from "../utils/Token";
import ICorreiosTransport from "./ICorreiosTransport";


export default class Correios implements ICorreiosTransport{

    private token : Token;
    authToken(): Token {
        return new Token;
    }
    sendCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+this.token.token);
        console.log("CORREIOS");
    }
    receiveCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+this.token.token);
        console.log("CORREIOS");
    }

      
}