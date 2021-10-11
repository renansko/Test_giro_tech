import { Router } from "express";

import createProfessorController from "../modules/useCases/createProfessores";
// eslint-disable-next-line import/no-extraneous-dependencies

const professorRoute = Router();

// rota para coleta de dados

professorRoute.post("/", (request, response) => {
  createProfessorController().handle(request, response);
});

// Rotas não devem ter a responsabilidade de enviar dados para o Banco de Dados

export { professorRoute };
