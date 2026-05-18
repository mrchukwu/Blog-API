import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //transforms incoming request of the dto to the type specified
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJs Blog API')
    .setDescription(
      'Use the base API URL as http://localhost:3000 when making requests',
    )
    .setTermsOfService('https://localhost:3000/terms-of-service')
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build();
  // instantiate a dcoument
  const document = SwaggerModule.createDocument(app, config);
  // setup method for setting documentration
  //  set part to documentation http://localhost:3000/api
  //  the application will be listening on port 3000
  //  the documentation created is " /api".
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
