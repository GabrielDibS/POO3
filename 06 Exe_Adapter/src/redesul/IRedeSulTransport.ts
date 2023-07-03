import Token from "../utils/Token"

export default interface IRedeSulTransport{
    authToken() : Token
    send() : void
    receive() : void
}
