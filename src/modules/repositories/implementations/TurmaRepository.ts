import { getRepository, Repository } from "typeorm";

import { ICreateTurmaDTO } from "../../dtos/ICreateTurmaDTO";
import { Turma } from "../../entities/turma";
import { ITurmaRepository } from "../ITurmaRepository";

class TurmaRepository implements ITurmaRepository {
  private repository: Repository<Turma>;

  private static INSTANCE: TurmaRepository;

  constructor() {
    this.repository = getRepository(Turma);
  }

  async create({
    horário,
    diaDaSemana,
    id_Professor,
    id_Disciplina,
    id_TAluno,
  }: ICreateTurmaDTO): Promise<Turma> {
    const turma = this.repository.create({
      horário,
      diaDaSemana,
      id_TAluno,
      id_Disciplina,
      id_Professor,
    });

    await this.repository.save(turma);

    return turma;
  }
  async horárioTaken(horário: string): Promise<Turma> {
    const horárioTurma = await this.repository.findOne({ horário });
    return horárioTurma;
  }

  async diaDaSemanaTaken(diaDaSemana: string): Promise<Turma> {
    const DiaTurma = await this.repository.findOne({ diaDaSemana });
    return DiaTurma;
  }
  async findMateria(
    id_TAluno?: string,
    diaDaSemana?: string,
    id_Disciplina?: string
  ): Promise<Turma[]> {
    const turmaQuery = this.repository.createQueryBuilder("t");

    if (id_Disciplina) {
      turmaQuery.andWhere("t.id_Disciplina = :id_Disciplina", {
        id_Disciplina,
      });
    }
    if (diaDaSemana) {
      turmaQuery.andWhere("t.diaDaSemana = :diaDaSemana", {
        diaDaSemana,
      });
    }
    if (id_TAluno) {
      turmaQuery.andWhere("t.id_TAluno = :id_TAluno", {
        id_TAluno,
      });
    }

    const turma = await turmaQuery.getMany();

    return turma;
  }
}

export { TurmaRepository };
