import { Migration } from '@mikro-orm/migrations';

export class Migration20230216170459 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" drop constraint "users_token_id_foreign";');

    this.addSql('alter table "users" alter column "token_id" type int using ("token_id"::int);');
    this.addSql('alter table "users" alter column "token_id" drop not null;');
    this.addSql('alter table "users" add constraint "users_token_id_foreign" foreign key ("token_id") references "tokens" ("id") on update cascade on delete set null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" drop constraint "users_token_id_foreign";');

    this.addSql('alter table "users" alter column "token_id" type int using ("token_id"::int);');
    this.addSql('alter table "users" alter column "token_id" set not null;');
    this.addSql('alter table "users" add constraint "users_token_id_foreign" foreign key ("token_id") references "tokens" ("id") on update cascade;');
  }

}
