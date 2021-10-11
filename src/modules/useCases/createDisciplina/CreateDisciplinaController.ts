import { Response, Request } from "express";

import { CreateDisciplinaUseCase } from "./CreateDisciplinaUseCase";

class CreateDisciplinaController {
  constructor(private createDisciplinaUseCase: CreateDisciplinaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    try {
      const disciplina = await this.createDisciplinaUseCase.execute({ name });
      return response.status(201).json(disciplina);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateDisciplinaController };
