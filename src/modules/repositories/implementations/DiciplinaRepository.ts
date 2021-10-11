import { getRepository, Repository } from "typeorm";

import { Disciplina } from "../../entities/diciplina";
import {
  ICreateDisciplinaDTO,
  IDisciplinaRepository,
} from "../IDiciplinaRepository";

class DisciplinaRepository implements IDisciplinaRepository {
  private repository: Repository<Disciplina>;
  private static INSTANCE: DisciplinaRepository;

  constructor() {
    this.repository = getRepository(Disciplina);
  }

  async create({ name }: ICreateDisciplinaDTO): Promise<Disciplina> {
    const disciplina = this.repository.create({
      name,
    });

    await this.repository.save(disciplina);

    return disciplina;
  }

  async findByName(name: string): Promise<Disciplina> {
    const disciplina = await this.repository.findOne({ name });

    return disciplina;
  }
}

export { DisciplinaRepository };
