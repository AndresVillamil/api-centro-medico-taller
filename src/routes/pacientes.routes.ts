import { Router } from "express";
import { createPaciente, deletePaciente, getPacientes, getPacienteById, updatePaciente } from "../controllers/pacientes.controller";

const router = Router();

router.get('/', getPacientes)
router.get('/:id', getPacienteById)
router.post('/', createPaciente)
router.put('/:id', updatePaciente)
router.delete('/:id', deletePaciente)

export default router;