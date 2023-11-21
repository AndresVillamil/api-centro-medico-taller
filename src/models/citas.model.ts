import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Doctor } from './doctores.model'
import { Paciente } from './pacientes.model'

@Table({
  timestamps: false,
  tableName: 'cita'
})
export class Cita extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
    primaryKey: true
  })
  fecha_hora!: Date

  @PrimaryKey
  @ForeignKey( () => Doctor)//Clave foranea Doctor
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id_profesional!: number

  @PrimaryKey
  @ForeignKey( () => Paciente)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id_numeroCedula!: number
  @BelongsTo( () => Doctor) //Relación de pertenencia
  doctor!: Doctor;
  @BelongsTo( () => Paciente)//Relación de pertenencia
  paciente!: Paciente;
}