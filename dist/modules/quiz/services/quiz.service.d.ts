import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class QuizService {
    private readonly quizRepository;
    constructor(quizRepository: Repository<Quiz>);
    getAllQuiz(): Promise<Quiz[]>;
    createNewQuiz(quizData: CreateQuizDto): Promise<Quiz>;
    getQuizById(id: number): Promise<Quiz>;
    pagination(options: IPaginationOptions): Promise<Pagination<Quiz>>;
}
