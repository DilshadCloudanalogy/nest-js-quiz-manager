"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const quiz_module_1 = require("./modules/quiz/quiz.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./modules/user/user.module");
const typeorm_config_1 = require("./config/typeorm.config");
const auth_module_1 = require("./modules/auth/auth.module");
const api_token_check_middleware_1 = require("./common/middleware/api-token-check.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(api_token_check_middleware_1.ApiTokenCheckMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [quiz_module_1.QuizModule, typeorm_1.TypeOrmModule.forRootAsync(typeorm_config_1.typeOrmAsyncConfig), config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }), user_module_1.UserModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map