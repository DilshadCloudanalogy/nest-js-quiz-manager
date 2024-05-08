import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { ApiTokenCheckMiddleware } from './common/middleware/api-token-check.middleware';

@Module({
  imports: [QuizModule, TypeOrmModule.forRootAsync(typeOrmAsyncConfig), ConfigModule.forRoot({
    envFilePath: '.env',
  }), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ApiTokenCheckMiddleware)
    .forRoutes({path: '*',method: RequestMethod.ALL})
  }
}
