"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = exports.MESSAGE = exports.REGEX = void 0;
const common_1 = require("@nestjs/common");
const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PASSWORD_RULE_MESSAGE = "Password should have 1 upper case , lower case along with a number and special character";
exports.REGEX = {
    PASSWORD_RULE,
};
exports.MESSAGE = {
    PASSWORD_RULE_MESSAGE
};
const VALIDATION_PIPE = new common_1.ValidationPipe({
    errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
});
exports.SETTINGS = {
    VALIDATION_PIPE
};
//# sourceMappingURL=app.utils.js.map