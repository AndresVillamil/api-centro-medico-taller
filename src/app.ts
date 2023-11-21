import express  from "express";
import {Request, Response} from 'express'
import connection from './DB/config';
import { urlencoded, json } from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import pacienteRoutes from './routes/pacientes.routes'
import doctorRoutes from './routes/doctores.routes'

dotenv.config();
const app = express();

app.use( json() );
app.use( cors() );
app.use(urlencoded({ extended: true }));
app.use('/api/pacientes', pacienteRoutes)
app.use('/api/doctores', doctorRoutes)
app.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.status(500).json({ message: err.message });
    }
  );

// Ruta base
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Bienvenido a mi API");
})



// Error de rutas

app.use( (req: Request, res: Response) => {
  res.status(404).send('404: Page not found')
})

// Error de servidor
app.use( (req: Request, res: Response) => {
  res.status(500).send('500: Internal server error')
})


connection.sync()
.then(() => {
  console.log('Database online')
})
.catch ((err) =>{
  console.log(`Error en la conexión ${err}`)
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en: http://${process.env.HOST}:${process.env.PORT}`)
})
