import { ICreateTurmaAlunoDTO } from "../dtos/ICreateAlunoTurmaDTO";
import { TurmaAluno } from "../entities/turmaAluno";

interface ITurmaAlunoRepository {
  create(data: ICreateTurmaAlunoDTO): Promise<TurmaAluno>;
  jaCadastrado(id: string): Promise<TurmaAluno>;
}

export { ITurmaAlunoRepository };
