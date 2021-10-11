import { Disciplina } from "../entities/diciplina";

interface ICreateDisciplinaDTO {
  name: string;
}

interface IDisciplinaRepository {
  create({ name }: ICreateDisciplinaDTO): Promise<Disciplina>;
  findByName(name: string): Promise<Disciplina>;
}

export { IDisciplinaRepository, ICreateDisciplinaDTO };
