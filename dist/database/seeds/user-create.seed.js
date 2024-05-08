"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCreateSeeds = void 0;
const user_entity_1 = require("../../modules/user/user.entity");
const typeorm_1 = require("typeorm");
class UseCreateSeeds {
    async run(factory, connection) {
        await (0, typeorm_1.getManager)().query('TRUNCATE users');
        await factory(user_entity_1.User)().createMany(10);
    }
}
exports.UseCreateSeeds = UseCreateSeeds;
//# sourceMappingURL=user-create.seed.js.map