import { Router } from "express"
import { User } from "../models/user.model.js"
import { authenticationCallback } from "../controller/auth.controller.js"

const router = Router()

router.post('/callback', authenticationCallback)

export default router