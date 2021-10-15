import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTurmaUseCase } from "./CreateTurmaUseCase";

class CreateTurmaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { horário, diaDaSemana, id_Professor, id_Disciplina, id_TAluno } =
      request.body;

    const createTurma = container.resolve(CreateTurmaUseCase);

    try {
      const turma = await createTurma.execute({
        horário,
        diaDaSemana,
        id_Professor,
        id_Disciplina,
        id_TAluno,
      });
      return response.status(201).json(turma);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateTurmaController };
