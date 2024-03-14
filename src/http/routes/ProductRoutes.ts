import { Router } from 'express'
import multer from "multer"
import { ApplyUseCase } from '../middlewares/ApplyUseCase';
import { verifyToken } from '../../security/auth/JWT';
import MainUserAdm from '../../app/usecases/user-adm/MainUserAdm'

const mainAdm = new MainUserAdm()
const router = Router()
const upload = multer()

router.post("/create-product", verifyToken, ApplyUseCase(mainAdm.registerNewProduct))// testado
router.get("/list-products", verifyToken, ApplyUseCase(mainAdm.listProducts))// testado
router.post("/upload-product-cover-img", upload.single('product-arena-cover'), ApplyUseCase(mainAdm.uploadProductCoverImg))//testado
router.delete("/delete-product-cover-img", ApplyUseCase(mainAdm.deleteProductCoverImg))//

export default router;