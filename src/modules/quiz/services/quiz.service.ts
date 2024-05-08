import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}
  async getAllQuiz(): Promise<Quiz[]> {
     return await this.quizRepository.find({relations: ['questions', 'questions.options']});
  }
  async createNewQuiz(quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quizData);
  }
  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: {
        id,
      },
      relations: ['questions', 'questions.options'],
    });
  }
  async pagination(options: IPaginationOptions): Promise<Pagination<Quiz>> {
    const qb = this.quizRepository.createQueryBuilder('q')
    qb.orderBy('q.id', 'DESC');
    return paginate<Quiz>(qb, options)
  }
}
