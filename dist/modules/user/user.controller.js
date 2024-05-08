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
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_register_req_dto_1 = require("./dto/user-register-req.dto");
const app_utils_1 = require("../../app.utils");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./user.entity");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async doUserRegistration(userRegister) {
        return await this.userService.doUserRegistration(userRegister);
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Created user object as response',
        type: user_entity_1.User
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'User cannot register Try again'
    }),
    __param(0, (0, common_1.Body)(app_utils_1.SETTINGS.VALIDATION_PIPE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_register_req_dto_1.UserRegisterRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "doUserRegistration", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map