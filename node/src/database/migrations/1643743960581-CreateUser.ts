import {MigrationInterface, QueryRunner, Table} from "typeorm";
// Deve ser utilizado npm run typeorm migration:run
export class CreateUser1643743960581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar(200)"
                    },
                    {
                        name: "email",
                        type: "varchar(200)",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar(50)"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
