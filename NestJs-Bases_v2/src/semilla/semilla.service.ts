import { Injectable } from '@nestjs/common';
import { SolicitudService } from '../solicitud/solicitud.service.js';
import { solicitudDataSemilla } from './Data/solicitud.data.semilla.js';

@Injectable()
export class SemillaService {

  constructor(private readonly solicitudService: SolicitudService) { }

  public ejecutarDataSemilla() {
    return this.solicitudService.obtenerDatosSolicitudesSemilla(solicitudDataSemilla);
  }
}
