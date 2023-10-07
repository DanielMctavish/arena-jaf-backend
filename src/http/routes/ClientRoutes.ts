import { Router } from 'express'
const router = Router()
import MainUserClient from '../../app/usecases/user-client/MainUserClient'
import { ApplyUseCase } from '../middlewares/ApplyUseCase'
const MainClient = new MainUserClient()

import { generatedToken, verifyToken } from '../../security/auth/JWT'

router.get("/test", (req, res) => {
    res.status(200).send('ok! clientes operacional')
})

router.post("/create-client", (req, res) => { ApplyUseCase(res, MainClient.registerClient, req.query, req.body) })
router.post("/add-credit", verifyToken)
router.post("/create-session", verifyToken)
router.get("/all-sessions", verifyToken)
router.post("/login", generatedToken)
router.post("/logout", verifyToken)


export default router;