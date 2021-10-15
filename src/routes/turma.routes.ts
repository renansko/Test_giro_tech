import { Router } from "express";

import { CreateTurmaController } from "../modules/useCases/createTurma/CreateTurmaController";
import { ListTurmaController } from "../modules/useCases/listTurma/listTurmaController";

const turmaRoutes = Router();

const createTurmaController = new CreateTurmaController();
const listTurmaController = new ListTurmaController();
turmaRoutes.post("/", createTurmaController.handle);

turmaRoutes.get("/exists", listTurmaController.handle);
export { turmaRoutes };
