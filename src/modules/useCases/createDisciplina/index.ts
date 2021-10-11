import { DisciplinaRepository } from "../../repositories/implementations/DiciplinaRepository";
import { CreateDisciplinaController } from "./CreateDisciplinaController";
import { CreateDisciplinaUseCase } from "./CreateDisciplinaUseCase";

export default (): CreateDisciplinaController => {
  const disciplinaRepository = new DisciplinaRepository();

  const createDisciplinaUseCase = new CreateDisciplinaUseCase(
    disciplinaRepository
  );

  const createDisciplinaController = new CreateDisciplinaController(
    createDisciplinaUseCase
  );

  return createDisciplinaController;
};
