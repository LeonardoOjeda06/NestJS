import { Module } from '@nestjs/common';
import { SolicitudController } from './solicitud.controller.js';
import { SolicitudService } from './solicitud.service.js';

@Module({
  controllers: [SolicitudController],
  providers: [SolicitudService]
})
export class SolicitudModule {}
