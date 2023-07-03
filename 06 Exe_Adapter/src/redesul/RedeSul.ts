import Token from "../utils/Token";
import IRedeSulTransport from "./IRedeSulTransport";


export default class RedeSul implements IRedeSulTransport{

    private token : Token;
    authToken(): Token {
        return new Token;
    }
    send(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+this.token.token);
        console.log("REDESUL");
    }
    receive(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+this.token.token);
        console.log("REDESUL");
    }
}