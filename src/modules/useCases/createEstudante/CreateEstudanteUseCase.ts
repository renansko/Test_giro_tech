import { inject, injectable } from "tsyringe";

import { Estudante } from "../../entities/estudante";
import { EstudantesRepository } from "../../repositories/implementations/EstudanteRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateEstudanteUseCase {
  constructor(
    @inject("EstudantesRepository")
    private estudanteRepository: EstudantesRepository
  ) {}

  async execute({ name }: IRequest): Promise<Estudante> {
    const estudanteAlreadyExists = await this.estudanteRepository.findByName(
      name
    );

    if (estudanteAlreadyExists) {
      throw new Error("Estudante ja cadastrado");
    }

    const estudante = await this.estudanteRepository.create({ name });
    return estudante;
  }
}

export { CreateEstudanteUseCase };
