import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateProfessorUseCase } from "./CreateProfessoresUseCase";

class CreateProfessorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createProfessorUseCase = container.resolve(CreateProfessorUseCase);

    try {
      const professor = await createProfessorUseCase.execute({ name });
      return response.status(201).json(professor);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateProfessorController };
