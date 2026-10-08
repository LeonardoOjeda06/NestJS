import { Module } from '@nestjs/common';
import { SolicitudModule } from './solicitud/solicitud.module.js';

@Module({
  imports: [SolicitudModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
