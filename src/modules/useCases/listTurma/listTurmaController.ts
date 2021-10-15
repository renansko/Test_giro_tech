import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTurmaUseCase } from "./listTurmaUseCase";

class ListTurmaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { disciplina_id, diaDaSemana, id_TAluno } = request.query;

    const listTurmaExistUseCase = container.resolve(ListTurmaUseCase);

    const turma = await listTurmaExistUseCase.execute({
      disciplina_id: disciplina_id as string,
      diaDaSemana: diaDaSemana as string,
      id_TAluno: id_TAluno as string,
    });

    return response.json(turma);
  }
}

export { ListTurmaController };
