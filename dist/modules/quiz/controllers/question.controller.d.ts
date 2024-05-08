import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionService } from '../services/question.service';
import { Question } from '../entities/question.entity';
import { QuizService } from '../services/quiz.service';
export declare class QuestionController {
    private readonly questionService;
    private readonly quizService;
    constructor(questionService: QuestionService, quizService: QuizService);
    createQuestion(question: CreateQuestionDto): Promise<Question>;
}
