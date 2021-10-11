import { Response, Request } from "express";

import { CreateProfessorUseCase } from "./CreateProfessoresUseCase";

class CreateProfessorController {
  constructor(private createProfessorUseCase: CreateProfessorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    try {
      const professor = await this.createProfessorUseCase.execute({ name });
      return response.status(201).json(professor);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateProfessorController };
