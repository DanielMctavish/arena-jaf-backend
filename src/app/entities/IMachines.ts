import IArenaLocal from "./IArenaLocal";
import ISessions from "./ISessions";
import IUserAdm from "./IUserAdm";
import IUserColab from "./IUserColab";

interface IMachines {
    id: string;
    nano_id: string
    status: MACHINE_STATUS
    UserAdm?: IUserAdm;
    userAdmId?: string | any;
    UserColab?: IUserColab | any;
    userColabId?: string | any;
    local?: IArenaLocal | null;
    arenaLocalId?: string | any;
    sessions: ISessions[];
    created_at: Date
    updated_at: Date
}


const MACHINE_STATUS: { [x: string]: 'DESCONECTED' | 'CONECTED' } = {
    DESCONECTED: 'DESCONECTED',
    CONECTED: 'CONECTED'
}

export type MACHINE_STATUS = typeof MACHINE_STATUS[keyof typeof MACHINE_STATUS]

export default IMachines;
