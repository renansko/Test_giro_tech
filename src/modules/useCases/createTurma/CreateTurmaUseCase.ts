import { inject, injectable } from "tsyringe";

import { Turma } from "../../entities/turma";
import { TurmaRepository } from "../../repositories/implementations/TurmaRepository";

interface IRequest {
  horário: string;
  diaDaSemana: string;
  id_Disciplina: string;
  id_Professor: string;
  id_TAluno: string;
}

@injectable()
class CreateTurmaUseCase {
  constructor(
    @inject("TurmaRepository")
    private TurmaRepository: TurmaRepository
  ) {}

  async execute({
    horário,
    diaDaSemana,
    id_TAluno,
    id_Disciplina,
    id_Professor,
  }: IRequest): Promise<Turma> {
    const horárioHasBeenTaken = await this.TurmaRepository.horárioTaken(
      horário
    );

    const diaDaSemanaHasBeenTaken = await this.TurmaRepository.diaDaSemanaTaken(
      diaDaSemana
    );

    if (horárioHasBeenTaken && diaDaSemanaHasBeenTaken) {
      throw new Error("Esse horário ja esta sendo usado");
    }

    const turma = this.TurmaRepository.create({
      horário,
      diaDaSemana,
      id_TAluno,
      id_Disciplina,
      id_Professor,
    });

    return turma;
  }
}

export { CreateTurmaUseCase };
