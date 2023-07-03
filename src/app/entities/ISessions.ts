import IArenaLocal from "./IArenaLocal"
import IProducts from "./IProducts"
import UserClient from "./IUserClient"

interface ISessions {
    id: string
    duration: number
    value: number
    user: UserClient
    status: SESSION_STATUS
    products: IProducts[]
    location: IArenaLocal
}

const SESSION_STATUS: { [x: string]: 'RUNNING' | 'PAUSED' } = {
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED'
}

export type SESSION_STATUS = typeof SESSION_STATUS[keyof typeof SESSION_STATUS]

export default ISessions