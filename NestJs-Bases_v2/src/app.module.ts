import { Module } from '@nestjs/common';
import { SolicitudModule } from './solicitud/solicitud.module.js';
import { SemillaModule } from './semilla/semilla.module.js';

@Module({
  imports: [SolicitudModule, SemillaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
