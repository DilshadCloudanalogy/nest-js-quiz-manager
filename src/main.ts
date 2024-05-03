import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Use ConfigService to access environment variables
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(3000);
}
bootstrap();
