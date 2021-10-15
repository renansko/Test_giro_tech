import { inject, injectable } from "tsyringe";

import { TurmaAluno } from "../../entities/turmaAluno";
import { TurmaAlunoRepository } from "../../repositories/implementations/TurmaAlunoRepository";

interface IRequest {
  id_aluno: string;
}

@injectable()
class CreateTurmaAlunoUseCase {
  constructor(
    @inject("turmaAlunoRepository")
    private TurmaAlunoRepository: TurmaAlunoRepository
  ) {}

  async execute({ id_aluno }: IRequest): Promise<TurmaAluno> {
    const alunoJaCadastradoNaTurma =
      await this.TurmaAlunoRepository.jaCadastrado(id_aluno);

    if (alunoJaCadastradoNaTurma) {
      throw new Error("Esse aluno ja esta nessa turma");
    }
    const turmaAluno = this.TurmaAlunoRepository.create({
      id_aluno,
    });

    return turmaAluno;
  }
}

export { CreateTurmaAlunoUseCase };
