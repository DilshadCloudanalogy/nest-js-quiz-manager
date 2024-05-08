"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPaginatedResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paginated_dto_1 = require("../dto/paginated.dto");
const ApiPaginatedResponse = (options) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(paginated_dto_1.PaginatedDto), (0, swagger_1.ApiOkResponse)({
        description: options.description || 'Successfully received model list',
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(paginated_dto_1.PaginatedDto) },
                {
                    properties: {
                        items: {
                            type: 'array',
                            items: { $ref: (0, swagger_1.getSchemaPath)(options.model) },
                        },
                        meta: {
                            type: 'any',
                            default: {
                                totalItems: 2,
                                itemCount: 2,
                                itemsPerPage: 2,
                                totalPages: 1,
                                currentPage: 1,
                            },
                        },
                        links: {
                            type: 'any',
                            default: {
                                first: "/cats?limit=10",
                                previous: "/cats?page=1&limit=10",
                                next: "/cats?page=3&limit=10",
                                last: "/cats?page=5&limit=10"
                            }
                        }
                    },
                },
            ],
        },
    }));
};
exports.ApiPaginatedResponse = ApiPaginatedResponse;
//# sourceMappingURL=api-pagination.response.js.map