import { FilePhoto } from "../../../utils/Firebase/FirebaseOperations";
import IProducts from "../../entities/IProducts";
import IProduct_usecases from "../IProduct_usecases";
import { AdmResponses, params } from "../IUserAdm_usecases";
import { updateNewProduct } from "../user-adm/functions/UpdateNewProduct";
import firebaseDeleteProductCover from "./firebase/FirebaseDeleteProductCover";
import firebaseUploadProductCover from "./firebase/FirebaseUploadProductCover";
import { deleteNewProduct } from "./functions/DeleteNewProduct";
import { listProductsByOwner } from "./functions/ListProductsByOwner";
import { registerNewProduct } from "./functions/RegisterNewProduct";



class MainProduct implements IProduct_usecases {
    RegisterNewProduct(data: IProducts): Promise<AdmResponses> {
        return registerNewProduct(data)
    }
    ListProducts(data: any, params: params): Promise<AdmResponses> {
        return listProductsByOwner(params.owner_id)
    }
    UpdateNewProduct(data: IProducts, params: params): Promise<AdmResponses> {
        return updateNewProduct(params.product_id, data)
    }
    DeleteNewProduct(data: any, params: params): Promise<AdmResponses> {
        return deleteNewProduct(params.product_id)
    }
    //FIREBASE
    UploadProductCoverImg(data: any, params: params, File: FilePhoto): Promise<AdmResponses> {
        return firebaseUploadProductCover(File)
    }
    DeleteProductCoverImg(data: any, params: params): Promise<AdmResponses> {
        return firebaseDeleteProductCover(params)
    }
    
}

export default MainProduct;