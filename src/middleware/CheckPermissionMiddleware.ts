import DataBase from "../server/DataBase";
import PermissionType from "../server/permissionType";
import Middleware from "./Middleware";

export default class CheckPermissioMiddleware extends Middleware{
    public check(email: any, password: any): boolean {
        const user = DataBase.filter(item => item.email == email)
            if(!user.length){
                console.log("Email não cadastrado")
                return false
        }
        if(user[0].permission == PermissionType.ADMIN){
            console.log("Bem vindo(a) Admin")
        }else{
            console.log("Bem vindo(a) Usuario")
        }
        return this.checkNext(email, password)
    }

}