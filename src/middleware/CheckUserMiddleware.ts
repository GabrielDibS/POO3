import DataBase from "../server/DataBase";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{
    public check(email: any, password: any): boolean {
        if(email.indexOf("@") == -1){
            console.log("Email invalido")
            return false
        }
        const verifiEmail = (DataBase.filter(item => item.email == email))
        if(!verifiEmail.length){
            console.log("Email invalido")
            return false
        }
        const verifiSenha = (DataBase.filter(item => item.password == password))
            if(!verifiSenha.length){
                console.log("Senha invalido")
                return false
            }
        return this.checkNext(email, password)
    }
}