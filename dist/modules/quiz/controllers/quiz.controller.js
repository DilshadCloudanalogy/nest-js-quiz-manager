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
exports.QuizController = void 0;
const common_1 = require("@nestjs/common");
const quiz_service_1 = require("../services/quiz.service");
const CreateQuiz_dto_1 = require("../dto/CreateQuiz.dto");
const quiz_entity_1 = require("../entities/quiz.entity");
const swagger_1 = require("@nestjs/swagger");
const api_pagination_response_1 = require("../../../common/decorator/api-pagination.response");
let QuizController = class QuizController {
    constructor(quizService) {
        this.quizService = quizService;
    }
    getAllQuiz(page = 1, limit = 10) {
        const options = {
            limit,
            page,
            route: '/quiz'
        };
        return this.quizService.pagination(options);
    }
    createQuiz(quizData) {
        return this.quizService.createNewQuiz(quizData);
    }
    getQuizById(id) {
        return this.quizService.getQuizById(id);
    }
};
exports.QuizController = QuizController;
__decorate([
    (0, common_1.Get)(),
    (0, api_pagination_response_1.ApiPaginatedResponse)({ model: quiz_entity_1.Quiz, description: "List of quizes" }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "getAllQuiz", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: quiz_entity_1.Quiz,
    }),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateQuiz_dto_1.CreateQuizDto]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "createQuiz", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "getQuizById", null);
exports.QuizController = QuizController = __decorate([
    (0, swagger_1.ApiTags)('Quiz'),
    (0, common_1.Controller)('quiz'),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizController);
//# sourceMappingURL=quiz.controller.js.map