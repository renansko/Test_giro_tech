import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Disciplina } from "./diciplina";
import { Estudante } from "./estudante";
import { Professores } from "./professores";

@Entity("turma")
class Turma {
  @PrimaryColumn()
  id: string;

  @Column()
  horário: string;

  @Column()
  diaDaSemana: string;

  @ManyToOne(() => Disciplina)
  @JoinColumn({ name: "id_Disciplina" })
  disciplina: Disciplina;

  @Column()
  id_Disciplina: string;

  @ManyToOne(() => Professores)
  @JoinColumn({ name: "id_Professor" })
  professor: Professores;

  @Column()
  id_Professor: string;

  @OneToMany(() => Estudante, (estudante) => estudante.id)
  @JoinColumn({ name: "id_TAluno" })
  estudante: Estudante;

  @Column()
  id_TAluno: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Turma };
