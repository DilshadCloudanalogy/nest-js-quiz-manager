import { OptionsService } from "../services/options.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/create-option.dto";
export declare class OptionController {
    private readonly optionService;
    private readonly questionService;
    constructor(optionService: OptionsService, questionService: QuestionService);
    saveOptionToQuestion(createOption: CreateOptionDto): Promise<import("../entities/option.entity").Option>;
}
