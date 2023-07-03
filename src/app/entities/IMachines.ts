import ArenaLocal from "./IArenaLocal"
import Sessions from "./ISessions"
import UserAdm from "./IUserAdm"
import UserColab from "./IUserColab"

interface IMachines {
    id: string
    local: ArenaLocal
    proprietario: UserAdm | UserColab
    status: string
    sessoes: Sessions[]
}

export default IMachines