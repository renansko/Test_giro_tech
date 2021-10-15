import { ICreateTurmaDTO } from "../dtos/ICreateTurmaDTO";
import { Turma } from "../entities/turma";

interface ITurmaRepository {
  diaDaSemanaTaken(diaDaSemana: string): Promise<Turma>;
  create(data: ICreateTurmaDTO): Promise<Turma>;
  horárioTaken(horário: string): Promise<Turma>;
  findMateria(
    id_TAluno?: string,
    diaDaSemana?: string,
    id_Disciplina?: string
  ): Promise<Turma[]>;
}

export { ITurmaRepository };
