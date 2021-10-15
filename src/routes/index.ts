import { Router } from "express";

import { disciplinaRoute } from "./disciplina.routes";
import { estudanteRoute } from "./estudantes.routes";
import { professorRoute } from "./professores.routes";
import { turmaRoutes } from "./turma.routes";
import { turmaAlunoRoutes } from "./turmaAluno.routes";
// import { specificationRoutes } from './specifications.routes';

const router = Router();

router.use("/aluno", estudanteRoute);
router.use("/professores", professorRoute);
router.use("/disciplina", disciplinaRoute);
router.use("/turma", turmaRoutes);
router.use("/turmaAluno", turmaAlunoRoutes);

export { router };
