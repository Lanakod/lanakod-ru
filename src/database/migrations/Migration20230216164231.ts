import { Migration } from '@mikro-orm/migrations';

export class Migration20230216164231 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "tokens" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "refresh_token" varchar(255) not null);',
    );

    this.addSql(
      'create table "users" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) null, "email" varchar(255) null, "password" varchar(255) null, "is_admin" boolean not null default false, "token_id" int not null);',
    );
    this.addSql(
      'alter table "users" add constraint "users_email_unique" unique ("email");',
    );
    this.addSql(
      'alter table "users" add constraint "users_token_id_unique" unique ("token_id");',
    );

    this.addSql(
      'alter table "users" add constraint "users_token_id_foreign" foreign key ("token_id") references "tokens" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "users" drop constraint "users_token_id_foreign";',
    );

    this.addSql('drop table if exists "tokens" cascade;');

    this.addSql('drop table if exists "users" cascade;');
  }
}
