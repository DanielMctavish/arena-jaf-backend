import { Router } from 'express'
import multer from "multer"
import { ApplyUseCase } from '../middlewares/ApplyUseCase';
import { verifyToken } from '../../security/auth/JWT';
import MainProduct from '../../app/usecases/PRODUCTS/MainProduct';

const mainProduct = new MainProduct()
const router = Router()
const upload = multer()

router.post("/create-product", verifyToken, ApplyUseCase(mainProduct.RegisterNewProduct))// testado
router.get("/list-products", verifyToken, ApplyUseCase(mainProduct.ListProducts))// testado
router.patch("/update-product", verifyToken, ApplyUseCase(mainProduct.UpdateNewProduct))// testado
router.delete("/delete-product", verifyToken, ApplyUseCase(mainProduct.DeleteNewProduct))// testado

//FIREBASE
router.post("/upload-product-cover-img", upload.single('product-arena-cover'), ApplyUseCase(mainProduct.UploadProductCoverImg))//testado
router.delete("/delete-product-cover-img", ApplyUseCase(mainProduct.DeleteProductCoverImg))//testado

export default router;