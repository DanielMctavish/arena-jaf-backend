import { Router } from 'express'
const router = Router()
import { generatedToken, verifyToken } from '../../security/auth/JWT'
import PrismaUserColabRepositorie from '../../app/repositories/PrismaRepositories/PrismaUserColabRepositorie'

router.post("/add-credit", verifyToken)
router.post("/create-machine", verifyToken)
router.post("/create-client", verifyToken)
router.post("/create-session", verifyToken)
router.delete("/delete-client"), verifyToken
router.delete("/delete-machine", verifyToken)
router.delete("/delete-product", verifyToken)
router.get("/all-clients", verifyToken)
router.post("/create-product", verifyToken)
router.patch("/update-client", verifyToken)
router.patch("/update-product", verifyToken)

router.post("/login", generatedToken)
router.post("/logout", verifyToken)

export default router;