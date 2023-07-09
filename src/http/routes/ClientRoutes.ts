import { Router } from 'express'
const router = Router()

import { generatedToken, verifyToken } from '../../security/auth/JWT'


router.post("/add-credit", verifyToken)
router.post("/create-client", verifyToken)
router.post("/create-session", verifyToken)
router.get("/all-sessions", verifyToken)
router.post("/login", generatedToken)
router.post("/logout", verifyToken)


export default router;