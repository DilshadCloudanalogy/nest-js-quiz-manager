import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
  .addBearerAuth()
    .setTitle('Quiz manager API')
    .setDescription('Quiz manager API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document)
  // Use ConfigService to access environment variables
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(3000);
}
bootstrap();
