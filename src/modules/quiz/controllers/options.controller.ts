import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { OptionsService } from "../services/options.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Question } from "../entities/question.entity";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Question')

@Controller("question/option")
export class OptionController {
    constructor(private readonly optionService: OptionsService, private readonly questionService: QuestionService) {}

    @Post()
   async saveOptionToQuestion(@Body(ValidationPipe) createOption: CreateOptionDto) {
        const question = await this.questionService.finQuestionById(createOption.questionId)
       return await this.optionService.createOption(createOption, question)
    }

}