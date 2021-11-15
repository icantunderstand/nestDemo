import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PROJECT_PTRFIX } from './constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(PROJECT_PTRFIX);
  await app.listen(8400);
}
bootstrap();
