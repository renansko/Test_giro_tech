import { Professores } from "../entities/professores";

interface ICreateProfessoresDTO {
  name: string;
}

interface IProfessoresRepository {
  create({ name }: ICreateProfessoresDTO): Promise<Professores>;
  findByName(name: string): Promise<Professores>;
}

export { IProfessoresRepository, ICreateProfessoresDTO };
