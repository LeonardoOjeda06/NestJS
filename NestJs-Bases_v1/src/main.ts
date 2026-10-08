import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Esta instrucción elimina propiedades que no estén definidas en el DTO
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas en el DTO
    //transform: true, // Transforma automáticamente los tipos de los parámetros según el DTO
  }));

  //! Primero configuras NestJS y al final arrancas el servidor.
  // esto con el fin de asegurar que todas las configuraciones se apliquen antes de arrancar el servidor.
  await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();
