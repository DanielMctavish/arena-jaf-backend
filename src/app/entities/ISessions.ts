import IArenaLocal from "./IArenaLocal"
import IMachines from "./IMachines"
import IProducts from "./IProducts"
import IUserAdm from "./IUserAdm"
import UserClient from "./IUserClient"

interface ISessions {
    id: string
    value: number
    duration: number
    status: SESSION_STATUS
    UserAdm: IUserAdm | any
    adm_id: string
    Client: UserClient | any
    client_id: string
    location: IArenaLocal| any
    local_id: string
    Machine: IMachines
    machine_id: string
    products: IProducts[] | any
    created_at: Date
    updated_at: Date
}

const SESSION_STATUS: { [x: string]: 'RUNNING' | 'PAUSED' } = {
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED'
}

export type SESSION_STATUS = typeof SESSION_STATUS[keyof typeof SESSION_STATUS]

export default ISessions