import { Router } from "express";

import { CreateTurmaAlunoController } from "../modules/useCases/createTurmaAluno/CreateTurmaAlunoController";

const turmaAlunoRoutes = Router();

const createTurmaAlunoController = new CreateTurmaAlunoController();

turmaAlunoRoutes.post("/", createTurmaAlunoController.handle);

export { turmaAlunoRoutes };
