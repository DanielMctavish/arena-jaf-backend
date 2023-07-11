import { Router } from 'express'
const router = Router()

import { generatedToken, verifyToken } from '../../security/auth/JWT'

import { ApplyUseCase } from '../middlewares/ApplyUseCase'
import { addCreditToClient } from "../../app/usecases/user-adm/functions/AddCreditToClient"



router.post("/add-credit", verifyToken, (req, res) => { ApplyUseCase(res, addCreditToClient, req.query, req.body) })
router.post("/create-local", verifyToken)
router.post("/create-machine", verifyToken)
router.post("/create-client", verifyToken)
router.post("/create-session", verifyToken)
router.delete("/delete-client"), verifyToken
router.delete("/delete-machine", verifyToken)
router.delete("/delete-product", verifyToken)
router.get("/all-clients", verifyToken)
router.post("/login", generatedToken)
router.post("/logout", verifyToken)
router.post("/create-product", verifyToken)
router.patch("/update-local", verifyToken)
router.patch("/update-client", verifyToken)
router.patch("/update-product", verifyToken)


export default router;