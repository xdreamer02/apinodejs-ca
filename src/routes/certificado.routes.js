import {Router} from 'express'
import { createCerti, deleteCerti, getCertificados, getCertixId, updateCerti} from '../controller/certificado.controller.js';
const router = Router()

router.get('/certificadoss',getCertificados)
router.get('/certificado/:id',getCertixId)
router.post('/certificados',createCerti)
router.put('/certixupt/:id',updateCerti)
router.delete('/certixdel/:id',deleteCerti)



export default router