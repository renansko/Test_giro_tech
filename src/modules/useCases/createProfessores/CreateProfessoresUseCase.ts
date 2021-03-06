import { inject, injectable } from "tsyringe";

import { Professores } from "../../entities/professores";
import { ProfessoresRepository } from "../../repositories/implementations/ProfessoresRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateProfessorUseCase {
  constructor(
    @inject("ProfessoresRepository")
    private professoresRepository: ProfessoresRepository
  ) {}

  async execute({ name }: IRequest): Promise<Professores> {
    const professorAlreadyExist = await this.professoresRepository.findByName(
      name
    );

    if (professorAlreadyExist) {
      throw new Error("Professor ja cadastrado");
    }

    const professor = this.professoresRepository.create({ name });

    return professor;
  }
}

export { CreateProfessorUseCase };
