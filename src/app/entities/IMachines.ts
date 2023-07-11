import IArenaLocal from "./IArenaLocal";
import Sessions from "./ISessions";
import IUserAdm from "./IUserAdm";
import IUserColab from "./IUserColab";

interface IMachines {
    id: string;
    nano_id: string
    arenaLocalId: string;
    proprietario?: IUserAdm;
    userAdmId: string;
    status: string;
    local?: IArenaLocal | null;
    proprietario_colab?: IUserColab | null;
    userColabId?: string | null;
    sessoes?: Sessions[];
}

export default IMachines;
