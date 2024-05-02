import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  getAllQuiz(): Promise<Quiz[]> {
    return this.quizService.getAllQuiz();
  }
  @Post('/create')
  createQuiz(@Body(ValidationPipe) quizData: CreateQuizDto) {
    return quizData;
    // return this.quizService.createNewQuiz(quizData);
  }
  @Get(':id')
  getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return this.quizService.getQuizById(id);
  }
}
