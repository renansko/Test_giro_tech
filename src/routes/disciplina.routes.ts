import { Router } from "express";

import createDisciplinaController from "../modules/useCases/createDisciplina";
// eslint-disable-next-line import/no-extraneous-dependencies

const disciplinaRoute = Router();

// rota para coleta de dados

disciplinaRoute.post("/", (request, response) => {
  createDisciplinaController().handle(request, response);
});

// Rotas não devem ter a responsabilidade de enviar dados para o Banco de Dados

export { disciplinaRoute };
