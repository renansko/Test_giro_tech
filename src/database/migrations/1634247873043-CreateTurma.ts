import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTurma1634247873043 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "turma",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "diaDaSemana",
            type: "varchar",
          },
          {
            name: "horário",
            type: "varchar",
          },
          {
            name: "id_Disciplina",
            type: "uuid",
            isNullable: true,
            // chave estrangeira
          },
          {
            name: "id_Professor",
            type: "uuid",
            isNullable: true,

            // chave estrangeira
          },
          {
            name: "id_TAluno",
            type: "uuid",
            isNullable: true,

            // chave estrangeira
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKProfessor",
            referencedTableName: "professor",
            referencedColumnNames: ["id"],
            columnNames: ["id_Professor"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKDisciplina",
            referencedTableName: "disciplina",
            referencedColumnNames: ["id"],
            columnNames: ["id_Disciplina"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKTurmaAluno",
            referencedTableName: "TurmaAluno",
            referencedColumnNames: ["id"],
            columnNames: ["id_TAluno"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("turma");
  }
}
