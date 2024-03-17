import IArenaLocal from "./IArenaLocal"
import IMachines from "./IMachines"
import ISessions from "./ISessions"
import ITransaction from "./ITransaction"
import IUserClient from "./IUserClient"

interface IUserAdm {
    id: string
    saldo: number
    email: string
    nome: string
    senha: string
    avatar_url: string
    Machines: IMachines[] | any
    ArenaLocal: IArenaLocal[] | any
    Transactions: ITransaction[] | any
    Sessions: ISessions[] | any
    UserClient: IUserClient[] | any
    created_at: Date
    updated_at: Date
}

export default IUserAdm;