import { getRepository, Repository } from "typeorm";

import { ICreateTurmaAlunoDTO } from "../../dtos/ICreateAlunoTurmaDTO";
import { TurmaAluno } from "../../entities/turmaAluno";
import { ITurmaAlunoRepository } from "../ITurmaAlunoRepository";

class TurmaAlunoRepository implements ITurmaAlunoRepository {
  private repository: Repository<TurmaAluno>;

  private static INSTANCE: TurmaAlunoRepository;

  constructor() {
    this.repository = getRepository(TurmaAluno);
  }

  async create({ id_aluno }: ICreateTurmaAlunoDTO): Promise<TurmaAluno> {
    const turmaAluno = this.repository.create({
      id_aluno,
    });

    await this.repository.save(turmaAluno);

    return turmaAluno;
  }

  async jaCadastrado(id_aluno: string): Promise<TurmaAluno> {
    const idAlunoClass = await this.repository.findOne({ id_aluno });
    return idAlunoClass;
  }
}

export { TurmaAlunoRepository };
