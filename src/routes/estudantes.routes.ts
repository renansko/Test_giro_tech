import { Router } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies

import { CreateEstudanteController } from "../modules/useCases/createEstudante/CreateEstudanteController";

const estudanteRoute = Router();

const createEstudanteController = new CreateEstudanteController();

// rota para coleta de dados

estudanteRoute.post("/", createEstudanteController.handle);

// Rotas não devem ter a responsabilidade de enviar dados para o Banco de Dados

export { estudanteRoute };
