import { inject, injectable } from "tsyringe";

import { Turma } from "../../entities/turma";
import { ITurmaRepository } from "../../repositories/ITurmaRepository";

interface IRequest {
  disciplina_id: string;
  diaDaSemana: string;
  id_TAluno: string;
}

@injectable()
class ListTurmaUseCase {
  constructor(
    @inject("TurmaRepository")
    private turmaRepository: ITurmaRepository
  ) {}
  async execute({
    disciplina_id,
    diaDaSemana,
    id_TAluno,
  }: IRequest): Promise<Turma[]> {
    const turma = await this.turmaRepository.findMateria(
      disciplina_id,
      diaDaSemana,
      id_TAluno
    );

    return turma;
  }
}

export { ListTurmaUseCase };
