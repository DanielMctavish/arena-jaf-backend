import IArenaLocal from "./IArenaLocal"
import IMachines from "./IMachines"
import IProducts from "./IProducts"
import UserClient from "./IUserClient"

interface ISessions {
    id: string
    proprietario_id: string
    duration: number
    value: number
    user?: UserClient
    userClientId: string
    status: SESSION_STATUS
    products?: IProducts[]
    location?: IArenaLocal
    arenaLocalId: string
    Machine?: IMachines
    machineId: string
}

const SESSION_STATUS: { [x: string]: 'RUNNING' | 'PAUSED' } = {
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED'
}

export type SESSION_STATUS = typeof SESSION_STATUS[keyof typeof SESSION_STATUS]

export default ISessions