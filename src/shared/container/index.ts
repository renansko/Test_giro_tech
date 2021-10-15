import { container } from "tsyringe";

import { IDisciplinaRepository } from "../../modules/repositories/IDiciplinaRepository";
import { IEstudantesRepository } from "../../modules/repositories/IEstudantesRepository";
import { DisciplinaRepository } from "../../modules/repositories/implementations/DiciplinaRepository";
import { EstudantesRepository } from "../../modules/repositories/implementations/EstudanteRepository";
import { ProfessoresRepository } from "../../modules/repositories/implementations/ProfessoresRepository";
import { TurmaAlunoRepository } from "../../modules/repositories/implementations/TurmaAlunoRepository";
import { TurmaRepository } from "../../modules/repositories/implementations/TurmaRepository";
import { IProfessoresRepository } from "../../modules/repositories/IProfessoresRepository";
import { ITurmaAlunoRepository } from "../../modules/repositories/ITurmaAlunoRepository";
import { ITurmaRepository } from "../../modules/repositories/ITurmaRepository";

container.registerSingleton<IEstudantesRepository>(
  "EstudantesRepository",
  EstudantesRepository
);

container.registerSingleton<IProfessoresRepository>(
  "ProfessoresRepository",
  ProfessoresRepository
);

container.registerSingleton<IDisciplinaRepository>(
  "DisciplinaRepository",
  DisciplinaRepository
);

container.registerSingleton<ITurmaRepository>(
  "TurmaRepository",
  TurmaRepository
);

container.registerSingleton<ITurmaAlunoRepository>(
  "turmaAlunoRepository",
  TurmaAlunoRepository
);
