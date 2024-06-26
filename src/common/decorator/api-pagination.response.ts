import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginatedDto } from '../dto/paginated.dto';

interface IPaginatedDecoratorApiResponse {
  model: Type<any>;
  description?: string;
}

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  options: IPaginatedDecoratorApiResponse,
) => {
  return applyDecorators(
    ApiExtraModels(PaginatedDto),
    ApiOkResponse({
      description: options.description || 'Successfully received model list',
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedDto) },
          {
            properties: {
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(options.model) },
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
    }),
  );
};