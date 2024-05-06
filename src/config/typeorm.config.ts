// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';



// export default class TypeOrmConfig {

//   static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
//     console.log("dd-",configService);

//     return {
//       type: 'postgres',
//       host: configService.get('DB_HOST'),
//       port: configService.get('DB_PORT'),
//       username: configService.get('DB_USERNAME'),
//       database: configService.get('DB_NAME'),
//       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//       synchronize: true,
//       logging: true
//     }
//   }
// }
// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
//   imports: [ConfigModule],
//   useFactory: async (configService:ConfigService):Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//   inject: [ConfigService]
// };


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<any> => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      cli: {
        migrationsDir: __dirname + '/../database/migrations',
      },
      synchronize: true,
      logging: false

    }
  },
}

 const typeOrmConfig: any = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  cli: {
    migrationsDir: __dirname + '/../database/migrations',
  },
  logging: true
};

export default typeOrmConfig
