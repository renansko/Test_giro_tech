import { Estudante } from "../entities/estudante";

interface ICreateEstudanteDTO {
  name: string;
}

interface IEstudantesRepository {
  create({ name }: ICreateEstudanteDTO): Promise<Estudante>;
  findByName(name: string): Promise<Estudante>;
}

export { IEstudantesRepository, ICreateEstudanteDTO };
