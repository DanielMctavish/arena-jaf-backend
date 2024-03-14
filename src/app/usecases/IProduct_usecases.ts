import { FilePhoto } from "../../utils/Firebase/FirebaseOperations"
import IProducts from "../entities/IProducts"
import { AdmResponses, params } from "./IUserAdm_usecases"


interface IProduct_usecases {

    //PRODUCTS
    registerNewProduct(data: IProducts): Promise<AdmResponses>
    listProducts(data: any, params: params): Promise<AdmResponses>
    updateNewProduct(data: IProducts, params: params): Promise<AdmResponses>
    deleteNewProduct(data: any, params: params): Promise<AdmResponses>

    //FIREBASE
    uploadProductCoverImg(data: any, params: params, File: FilePhoto): Promise<AdmResponses>
    deleteProductCoverImg(data: any, params: params, File: FilePhoto): Promise<AdmResponses>

}

export default IProduct_usecases;