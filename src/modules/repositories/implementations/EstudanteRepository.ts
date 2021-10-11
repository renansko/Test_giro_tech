import { getRepository, Repository } from "typeorm";

import { Estudante } from "../../entities/estudante";
import {
  ICreateEstudanteDTO,
  IEstudantesRepository,
} from "../IEstudantesRepository";

class EstudantesRepository implements IEstudantesRepository {
  private repository: Repository<Estudante>;

  private static INSTANCE: EstudantesRepository;

  constructor() {
    this.repository = getRepository(Estudante);
  }

  async create({ name }: ICreateEstudanteDTO): Promise<Estudante> {
    const estudante = this.repository.create({
      name,
    });

    await this.repository.save(estudante);

    return estudante;
  }

  findByName(name: string): Promise<Estudante> {
    const estudante = this.repository.findOne({ name });
    return estudante;
  }
}

export { EstudantesRepository };
