import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Paciente } from "../models/pacientes.model";
import { Doctor } from "../models/doctores.model";
import { Cita } from "../models/citas.model";

dotenv.config();

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    username: process.env.USER_NAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    logging: false,
    //models: [__dirname + '/models'] 
    models: [Paciente, Cita, Doctor]
})

export default connection;