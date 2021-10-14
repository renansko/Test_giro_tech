import { Router } from "express";

import { CreateDisciplinaController } from "../modules/useCases/createDisciplina/CreateDisciplinaController";

const disciplinaRoute = Router();

// rota para coleta de dados

const createDisciplina = new CreateDisciplinaController();

disciplinaRoute.post("/", createDisciplina.handle);

// Rotas não devem ter a responsabilidade de enviar dados para o Banco de Dados

export { disciplinaRoute };
