import 'reflect-metadata';
import { address } from 'ip';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import { HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);

  // register requests compression
  app.use(compression());

  // register session middleware
  app.use(
    session({
      secret: process.env.SESSION_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: true,
        sameSite: 'none',
        // domain: 'https://example.com',
        httpOnly: true,
      },
    }),
  );

  // register cookie middleware
  app.use(cookieParser());

  // enable cors
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin'],
    credentials: true,
  });

  // use global validation pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );
  // set global prefix "api"
  app.setGlobalPrefix('api');
  // global interceptors

  // listen app on PORT from .env
  await app.listen(PORT, async () => {
    // receive app link
    const url = address('public', 'ipv4');

    console.log(`Application started on: http://${url}:${PORT}`);
  });
}

bootstrap();
