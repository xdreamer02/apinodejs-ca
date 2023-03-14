import {Router} from 'express'
import { getIndex } from "../controller/index.controller.js";

const router = Router()

//coenxion
router.get('/test',getIndex)

export default router
