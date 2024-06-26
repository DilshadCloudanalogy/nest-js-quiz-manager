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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const typeorm_1 = require("typeorm");
const quiz_entity_1 = require("./quiz.entity");
const option_entity_1 = require("./option.entity");
let Question = class Question extends typeorm_1.BaseEntity {
};
exports.Question = Question;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Question.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => quiz_entity_1.Quiz, (quiz) => quiz.questions),
    __metadata("design:type", quiz_entity_1.Quiz)
], Question.prototype, "quiz", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => option_entity_1.Option, (option) => option.question),
    __metadata("design:type", Array)
], Question.prototype, "options", void 0);
exports.Question = Question = __decorate([
    (0, typeorm_1.Entity)('questions')
], Question);
//# sourceMappingURL=question.entity.js.map