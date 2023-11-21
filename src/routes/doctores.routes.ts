import { Router } from "express";
import { createDoctor,  getDoctores, updateDoctor, deleteDoctor, getDoctorById } from "../controllers/doctores.controller";

const router = Router();

router.get('/', getDoctores)
router.get('/:id', getDoctorById)
router.post('/', createDoctor)
router.put('/:id', updateDoctor)
router.delete('/:id', deleteDoctor)

export default router;