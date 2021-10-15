import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Estudante } from "./estudante";

@Entity("TurmaAluno")
class TurmaAluno {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Estudante)
  @JoinColumn({ name: "id_aluno" })
  estudante: Estudante;

  @Column()
  id_aluno: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { TurmaAluno };
