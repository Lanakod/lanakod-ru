import { Migration } from '@mikro-orm/migrations';

export class Migration20230216201138 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "posts" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "description" varchar(255) not null, "content" varchar(255) not null, "author_id" int not null);',
    );

    this.addSql(
      'alter table "posts" add constraint "posts_author_id_foreign" foreign key ("author_id") references "users" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "posts" cascade;');
  }
}
