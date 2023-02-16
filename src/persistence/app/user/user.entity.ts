import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  givenName: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  familyName: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  patronymic: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  email: string;

  @Column('varchar', {
    nullable: true,
  })
  password: string;

  @Column({
    type: 'boolean',
    name: 'is_admin',
    default: false,
  })
  isAdmin: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'updated_at',
  })
  updatedAt: Date;
}
