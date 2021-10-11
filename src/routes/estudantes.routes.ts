import { Router } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies

import createEstudanteController from "../modules/useCases/createEstudante";

const estudanteRoute = Router();

// rota para coleta de dados

estudanteRoute.post("/", (request, response) => {
  createEstudanteController().handle(request, response);
});

// Rotas não devem ter a responsabilidade de enviar dados para o Banco de Dados

export { estudanteRoute };
