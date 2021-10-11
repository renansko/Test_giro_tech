import { Response, Request } from "express";

import { Estudante } from "../../entities/estudante";
import { CreateEstudanteUseCase } from "./CreateEstudanteUseCase";

class CreateEstudanteController {
  constructor(private createEstudanteUseCase: CreateEstudanteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    try {
      const disciplina = await this.createEstudanteUseCase.execute({ name });
      return response.status(201).json(disciplina);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateEstudanteController };
