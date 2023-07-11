import PermissionType from "./permissionType"

interface DataBaseItem{
    email: string
    password: string
    permission : PermissionType
}

const DataBase: DataBaseItem[] = [{email : "asdasd", password : "456", permission: PermissionType.USER}, {email : "dfsrg", password : "123", permission: PermissionType.ADMIN}]

export default DataBase