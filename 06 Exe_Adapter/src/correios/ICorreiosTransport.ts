import Token from "../utils/Token"

export default interface IPayPalPayment{
    authToken() : Token
    sendCorreios() : void
    receiveCorreios() : void
}