import { Migration } from '@mikro-orm/migrations';

export class Migration20230216203405 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "themes" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');

    this.addSql('create table "posts_themes" ("post_entity_id" int not null, "theme_entity_id" int not null, constraint "posts_themes_pkey" primary key ("post_entity_id", "theme_entity_id"));');

    this.addSql('create table "comments" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "content" varchar(255) not null, "author_id" int not null, "post_id" int not null);');

    this.addSql('alter table "posts_themes" add constraint "posts_themes_post_entity_id_foreign" foreign key ("post_entity_id") references "posts" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "posts_themes" add constraint "posts_themes_theme_entity_id_foreign" foreign key ("theme_entity_id") references "themes" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "comments" add constraint "comments_author_id_foreign" foreign key ("author_id") references "users" ("id") on update cascade;');
    this.addSql('alter table "comments" add constraint "comments_post_id_foreign" foreign key ("post_id") references "posts" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "posts_themes" drop constraint "posts_themes_theme_entity_id_foreign";');

    this.addSql('drop table if exists "themes" cascade;');

    this.addSql('drop table if exists "posts_themes" cascade;');

    this.addSql('drop table if exists "comments" cascade;');
  }

}
