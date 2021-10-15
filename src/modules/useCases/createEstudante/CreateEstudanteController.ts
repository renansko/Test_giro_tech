import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateEstudanteUseCase } from "./CreateEstudanteUseCase";

class CreateEstudanteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createEstudanteUseCase = container.resolve(CreateEstudanteUseCase);

    try {
      const estudante = await createEstudanteUseCase.execute({ name });
      return response.status(201).json(estudante);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateEstudanteController };
