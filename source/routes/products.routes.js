
import { Router } from "express";
import { deleteprod, getprod, getprods, postprod, putprod } from "../controllers/prod.controllers.js";


const router = Router()

router.get('/',getprods)

router.get('/',getprod)

router.post('/',postprod)

router.put('/',putprod)

router.delete('/',deleteprod)

export default router