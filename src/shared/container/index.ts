import { container } from "tsyringe";

import { IDisciplinaRepository } from "../../modules/repositories/IDiciplinaRepository";
import { IEstudantesRepository } from "../../modules/repositories/IEstudantesRepository";
import { DisciplinaRepository } from "../../modules/repositories/implementations/DiciplinaRepository";
import { EstudantesRepository } from "../../modules/repositories/implementations/EstudanteRepository";
import { ProfessoresRepository } from "../../modules/repositories/implementations/ProfessoresRepository";
import { IProfessoresRepository } from "../../modules/repositories/IProfessoresRepository";

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
