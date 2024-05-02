import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository.find({relations: ['questions']});
  }
  async createNewQuiz(quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quizData);
  }
  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: {
        id,
      },
      relations: ['questions'],
    });
  }
}