import { getRepository, Repository } from "typeorm";

import { professorRoute } from "../../../routes/professores.routes";
import { Professores } from "../../entities/professores";
import {
  ICreateProfessoresDTO,
  IProfessoresRepository,
} from "../IProfessoresRepository";

class ProfessoresRepository implements IProfessoresRepository {
  private repository: Repository<Professores>;

  private static INSTANCE: ProfessoresRepository;

  constructor() {
    this.repository = getRepository(Professores);
  }

  async create({ name }: ICreateProfessoresDTO): Promise<Professores> {
    const professor = this.repository.create({
      name,
    });

    await this.repository.save(professor);

    return professor;
  }

  async findByName(name: string): Promise<Professores> {
    const professor = await this.repository.findOne({ name });

    return professor;
  }
}

export { ProfessoresRepository };
