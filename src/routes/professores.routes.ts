import { Router } from "express";

import { CreateProfessorController } from "../modules/useCases/createProfessores/CreateProfessoresController";
// eslint-disable-next-line import/no-extraneous-dependencies

const professorRoute = Router();

const createProfessorController = new CreateProfessorController();

// rota para coleta de dados

professorRoute.post("/", createProfessorController.handle);

// Rotas não devem ter a responsabilidade de enviar dados para o Banco de Dados

export { professorRoute };
