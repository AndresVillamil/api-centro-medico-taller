import { Router } from "express";
import { createCita, deleteCita, getCitas, getOneCitas, updateCita } from "../controllers/citas.controller";

const router = Router();

router.get('/', getCitas)
router.get('/one-cita', getOneCitas)
router.post('/', createCita)
router.put('/', updateCita)
router.delete('/', deleteCita)

export default router;