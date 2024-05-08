import { BaseEntity } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Option } from './option.entity';
export declare class Question extends BaseEntity {
    id: number;
    question: string;
    quiz: Quiz;
    options: Option[];
}
