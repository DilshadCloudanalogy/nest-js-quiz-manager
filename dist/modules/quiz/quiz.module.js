"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizModule = void 0;
const options_controller_1 = require("./controllers/options.controller");
const common_1 = require("@nestjs/common");
const quiz_controller_1 = require("./controllers/quiz.controller");
const quiz_service_1 = require("./services/quiz.service");
const typeorm_1 = require("@nestjs/typeorm");
const quiz_entity_1 = require("./entities/quiz.entity");
const question_controller_1 = require("./controllers/question.controller");
const question_entity_1 = require("./entities/question.entity");
const option_entity_1 = require("./entities/option.entity");
const question_service_1 = require("./services/question.service");
const options_service_1 = require("./services/options.service");
let QuizModule = class QuizModule {
};
exports.QuizModule = QuizModule;
exports.QuizModule = QuizModule = __decorate([
    (0, common_1.Module)({
        controllers: [quiz_controller_1.QuizController, question_controller_1.QuestionController, options_controller_1.OptionController],
        imports: [typeorm_1.TypeOrmModule.forFeature([quiz_entity_1.Quiz, question_entity_1.Question, option_entity_1.Option])],
        providers: [quiz_service_1.QuizService, question_service_1.QuestionService, options_service_1.OptionsService],
    })
], QuizModule);
//# sourceMappingURL=quiz.module.js.map