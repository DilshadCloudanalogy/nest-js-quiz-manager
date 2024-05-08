import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    getAllQuiz(page?: number, limit?: number): Promise<Pagination<Quiz>>;
    createQuiz(quizData: CreateQuizDto): Promise<Quiz>;
    getQuizById(id: number): Promise<Quiz>;
}
