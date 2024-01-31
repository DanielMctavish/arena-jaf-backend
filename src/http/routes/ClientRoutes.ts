import { Router } from 'express'
const router = Router()
import MainUserClient from '../../app/usecases/user-client/MainUserClient'
import { ApplyUseCase } from '../middlewares/ApplyUseCase'
const MainClient = new MainUserClient()

import { generatedToken, verifyToken } from '../../security/auth/JWT'

router.get("/test", (req, res) => {
    res.status(200).send('ok! clientes operacional')
})

router.post("/create-client", ApplyUseCase(MainClient.RegisterClient))//testado
router.post("/add-credit", verifyToken, ApplyUseCase(MainClient.AddCredit))//testado
router.post("/create-session", verifyToken, ApplyUseCase(MainClient.CreateNewSession))//
router.get("/all-sessions", verifyToken, ApplyUseCase(MainClient.ListSessions))

router.post("/login-client", ApplyUseCase(MainClient.Login))//testado
//router.post("/logout", verifyToken)

//FIREBASE
router.post("/upload-client-profile", verifyToken, ApplyUseCase(MainClient.UploadClientProfile))
router.delete("/delete-client-profile", verifyToken, ApplyUseCase(MainClient.DeleteClientProfile))


export default router;