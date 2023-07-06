import IMachines from "./IMachines"
import IProducts from "./IProducts"
import ISessions from "./ISessions"
import IUserAdm from "./IUserAdm"
import UserColab from "./IUserColab"

interface IArenaLocal {
    id: string;
    nome: string;
    end_url_google: string;
    proprietario?: IUserAdm;
    userAdmId: string;
    proprietario_colab?: UserColab | null;
    userColabId?: string | null;
    Sessions?: ISessions[];
    Products?: IProducts[];
    Machines?: IMachines[];
}


export default IArenaLocal