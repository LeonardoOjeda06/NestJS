import { Module } from '@nestjs/common';
import { SemillaService } from './semilla.service.js';
import { SemillaController } from './semilla.controller.js';
import { SolicitudModule } from '../solicitud/solicitud.module.js';

@Module({
  controllers: [SemillaController],
  providers: [SemillaService],
  imports: [SolicitudModule],
})
export class SemillaModule { }
