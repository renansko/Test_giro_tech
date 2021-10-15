import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTurmaAlunoUseCase } from "./CreateTurmaAlunoUseCase";

class CreateTurmaAlunoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_aluno } = request.body;

    const createTurmaAlunoUseCase = container.resolve(CreateTurmaAlunoUseCase);

    try {
      const turmaAluno = await createTurmaAlunoUseCase.execute({ id_aluno });
      return response.status(201).json(turmaAluno);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateTurmaAlunoController };
