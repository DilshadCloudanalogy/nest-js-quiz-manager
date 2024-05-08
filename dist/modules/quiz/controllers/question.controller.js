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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const create_question_dto_1 = require("../dto/create-question.dto");
const question_service_1 = require("../services/question.service");
const quiz_service_1 = require("../services/quiz.service");
const swagger_1 = require("@nestjs/swagger");
let QuestionController = class QuestionController {
    constructor(questionService, quizService) {
        this.questionService = questionService;
        this.quizService = quizService;
    }
    async createQuestion(question) {
        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createQuestion(question, quiz);
    }
};
exports.QuestionController = QuestionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_dto_1.CreateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createQuestion", null);
exports.QuestionController = QuestionController = __decorate([
    (0, swagger_1.ApiTags)('Question'),
    (0, common_1.Controller)('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService,
        quiz_service_1.QuizService])
], QuestionController);
//# sourceMappingURL=question.controller.js.map