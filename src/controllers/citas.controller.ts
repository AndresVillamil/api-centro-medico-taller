import { RequestHandler } from 'express';
import { Cita } from '../models/citas.model'

//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getCitas: RequestHandler = async (req, res) => {
    try {
        const citas = await Cita.findAll()

        res.status(200).json({
            message: 'Operación exitosa',
            data: citas
        })
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al obtener citas',
            error: err.message
        })
    }
}

export const getOneCitas: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente, fecha } = req.query //Parámetros query  
        const cita = await Cita.findOne({
            where: {
                fecha_hora: fecha,
                id_profesional: profesional,
                id_numeroCedula: paciente
            }
        })

        if (cita) {
            res.status(200).json({
                message: 'Cita encontrada',
                data: cita

            })
        } else {
            res.status(404).json({
                message: 'Cita no encontrada'
                
            })
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al obtener citas',
            error: err.message
        })
    }
}

export const createCita: RequestHandler = async (req, res) => {
    try {
        const cita = await Cita.create(req.body)

        res.status(201).json({
            message: 'Cita creada!',
            data: cita
        })
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'No se pudo crear cita',
            error: err.message
        })
    }
}

export const updateCita: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente, fecha } = req.query //Parámetros query  
        const cita = await Cita.findOne({
            where: {
                fecha_hora: fecha,
                id_profesional: profesional,
                id_numeroCedula: paciente
            }
        })

        if (cita) {
            await Cita.update(req.body, {
                where: {
                    fecha_hora: fecha,
                    id_profesional: profesional,
                    id_numeroCedula: paciente
                }
            })
            res.status(200).json({
                message: 'Cita Actualizada'
            })
        } else {
            res.status(404).json({
                message: 'Cita no existe'
            })

        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al modificar Cita',
            error: err.message

        })
    }
}

export const deleteCita: RequestHandler = async (req, res) => {
    try {
        const { profesional, paciente, fecha } = req.query //Parámetros query  
        const cita = await Cita.findOne({
            where: {
                fecha_hora: fecha,
                id_profesional: profesional,
                id_numeroCedula: paciente
            }
        })

        if (cita) {
            await Cita.destroy({
                where: {
                    fecha_hora: fecha,
                    id_profesional: profesional,
                    id_numeroCedula: paciente
                }
            })
            res.status(200).json({
                message: 'Cita Eliminada'
            })
        } else {
            res.status(404).json({
                message: 'Cita no existe'
            })

        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar Cita',

        })
    }
}