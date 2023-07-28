import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // allow cors for local development
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
