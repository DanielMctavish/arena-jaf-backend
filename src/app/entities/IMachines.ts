import IArenaLocal from "./IArenaLocal";
import ISessions from "./ISessions";
import IUserAdm from "./IUserAdm";
import IUserColab from "./IUserColab";

interface IMachines {
    id: string;
    nano_id: string
    UserAdm?: IUserAdm;
    userAdmId?: string | any;
    UserColab?: IUserColab | null;
    userColabId?: string | any;
    local?: IArenaLocal | null;
    arenaLocalId?: string | any;
    sessions: ISessions[];
    created_at: Date
    updated_at: Date
}

export default IMachines;
