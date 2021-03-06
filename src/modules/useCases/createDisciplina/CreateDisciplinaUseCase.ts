import { inject, injectable } from "tsyringe";

import { Disciplina } from "../../entities/diciplina";
import { DisciplinaRepository } from "../../repositories/implementations/DiciplinaRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateDisciplinaUseCase {
  constructor(
    @inject("DisciplinaRepository")
    private disciplinaRepository: DisciplinaRepository
  ) {}

  async execute({ name }: IRequest): Promise<Disciplina> {
    const disciplinaAlreadyExists = await this.disciplinaRepository.findByName(
      name
    );

    if (disciplinaAlreadyExists) {
      throw new Error("disciplina ja cadastrado");
    }

    const disciplina = await this.disciplinaRepository.create({ name });
    return disciplina;
  }
}

export { CreateDisciplinaUseCase };
