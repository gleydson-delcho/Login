import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTablePass1643806301960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE users ALTER COLUMN password TYPE varchar(200)')
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE users ALTER COLUMN password TYPE varchar(40)')
    }

}
