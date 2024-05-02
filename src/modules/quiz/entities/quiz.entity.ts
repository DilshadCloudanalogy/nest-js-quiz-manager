import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'the quiz unique identifier',
  })
  id: number;
  @Column({
    type: 'text',
  })
  title: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
