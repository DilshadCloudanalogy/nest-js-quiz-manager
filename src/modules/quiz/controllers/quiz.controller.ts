import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.response';


@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  @ApiPaginatedResponse({model: Quiz, description: "List of quizes"})
  getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:number= 10
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
      route: '/quiz'
    }
    return  this.quizService.pagination(options);
  }
  @Post('/create')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Quiz,
  })
  createQuiz(@Body(ValidationPipe) quizData: CreateQuizDto) {
    return this.quizService.createNewQuiz(quizData);
  }
  @Get(':id')
  getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return this.quizService.getQuizById(id);
  }
}
