import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionService } from '../services/question.service';
import { Question } from '../entities/question.entity';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}
  @Post()
  async createQuestion(
    @Body(ValidationPipe) question: CreateQuestionDto,
  ): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createQuestion(question, quiz);
  }
}
