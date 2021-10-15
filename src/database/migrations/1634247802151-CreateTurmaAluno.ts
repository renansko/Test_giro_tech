import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTurmaAluno1634247802151 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "TurmaAluno",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "id_aluno",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FKAluno",
            referencedTableName: "aluno",
            referencedColumnNames: ["id"],
            columnNames: ["id_aluno"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("TurmaAluno");
  }
}
