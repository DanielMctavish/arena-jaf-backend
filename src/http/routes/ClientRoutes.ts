import { Router } from 'express'
import { ApplyUseCase } from '../middlewares/ApplyUseCase'
import { verifyToken } from '../../security/auth/JWT'
import MainUserClient from '../../app/usecases/user-client/MainUserClient'
import multer from 'multer'

const MainClient = new MainUserClient()
const router = Router()
const upload = multer()

router.get("/test", (req, res) => {
    res.status(200).send('ok! clientes operacional')
})

router.post("/create-client", ApplyUseCase(MainClient.RegisterClient))//testado
router.get("/find", verifyToken, ApplyUseCase(MainClient.FindClient))//testado
router.get("/list", verifyToken, ApplyUseCase(MainClient.ListClient))//
router.patch("/update", verifyToken, ApplyUseCase(MainClient.UpdateClient))//
router.post("/add-credit", verifyToken, ApplyUseCase(MainClient.AddCredit))//testado
router.post("/create-session", verifyToken, ApplyUseCase(MainClient.CreateNewSession))//testado
router.get("/all-sessions", verifyToken, ApplyUseCase(MainClient.ListSessions))//
router.post("/login-client", ApplyUseCase(MainClient.Login))//testado
//router.post("/logout", verifyToken)


//FIREBASE
router.post("/upload-client-profile", upload.single('arena-client-profile'), ApplyUseCase(MainClient.UploadClientProfile));
router.delete("/delete-client-profile", ApplyUseCase(MainClient.DeleteClientProfile));

export default router;