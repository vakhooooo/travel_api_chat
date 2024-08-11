import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   origin: '*', // Allow all origins
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
  //   // credentials: true, // If you need to include credentials in requests
  // });
  await app.listen(3000);
}
bootstrap();
