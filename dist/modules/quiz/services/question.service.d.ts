import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entities/quiz.entity';
export declare class QuestionService {
    private readonly questionRepository;
    constructor(questionRepository: Repository<Question>);
    createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>;
    finQuestionById(id: number): Promise<Question>;
}
