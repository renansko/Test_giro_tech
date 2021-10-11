import { ProfessoresRepository } from "../../repositories/implementations/ProfessoresRepository";
import { CreateProfessorController } from "./CreateProfessoresController";
import { CreateProfessorUseCase } from "./CreateProfessoresUseCase";

export default (): CreateProfessorController => {
  const professoresRepository = new ProfessoresRepository();

  const createProfessorUseCase = new CreateProfessorUseCase(
    professoresRepository
  );

  const createProfessorController = new CreateProfessorController(
    createProfessorUseCase
  );

  return createProfessorController;
};
