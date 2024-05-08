import { Option } from "../entities/option.entity";
import { Repository } from "typeorm";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Question } from "../entities/question.entity";
export declare class OptionsService {
    private readonly optionRepository;
    constructor(optionRepository: Repository<Option>);
    createOption(option: CreateOptionDto, question: Question): Promise<Option>;
}
