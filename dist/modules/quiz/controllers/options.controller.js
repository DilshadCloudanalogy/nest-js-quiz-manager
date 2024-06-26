"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionController = void 0;
const common_1 = require("@nestjs/common");
const options_service_1 = require("../services/options.service");
const question_service_1 = require("../services/question.service");
const create_option_dto_1 = require("../dto/create-option.dto");
const swagger_1 = require("@nestjs/swagger");
let OptionController = class OptionController {
    constructor(optionService, questionService) {
        this.optionService = optionService;
        this.questionService = questionService;
    }
    async saveOptionToQuestion(createOption) {
        const question = await this.questionService.finQuestionById(createOption.questionId);
        return await this.optionService.createOption(createOption, question);
    }
};
exports.OptionController = OptionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_option_dto_1.CreateOptionDto]),
    __metadata("design:returntype", Promise)
], OptionController.prototype, "saveOptionToQuestion", null);
exports.OptionController = OptionController = __decorate([
    (0, swagger_1.ApiTags)('Question'),
    (0, common_1.Controller)("question/option"),
    __metadata("design:paramtypes", [options_service_1.OptionsService, question_service_1.QuestionService])
], OptionController);
//# sourceMappingURL=options.controller.js.map