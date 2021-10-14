import { Response, Request } from "express";
import { container, injectable } from "tsyringe";

import { CreateDisciplinaUseCase } from "./CreateDisciplinaUseCase";

class CreateDisciplinaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createDisciplinaUseCase = container.resolve(CreateDisciplinaUseCase);

    try {
      const disciplina = await createDisciplinaUseCase.execute({ name });
      return response.status(201).json(disciplina);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateDisciplinaController };
