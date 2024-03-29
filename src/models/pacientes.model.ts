import { timeStamp } from 'console';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Cita } from './citas.model';

@Table({
  timestamps: false,
  tableName: 'pacientes'
}) //Directiva - decoradores - patron de diseño de SW
export class Paciente extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true
  })
  id_numeroCedula!: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nombre!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  apellido!: string

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  fecha_nacimiento!: Date

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  telefono!: string

  @HasMany( () => Cita)
  cita!: Cita []
}
