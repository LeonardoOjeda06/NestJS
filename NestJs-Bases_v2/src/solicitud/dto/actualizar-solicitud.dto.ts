import { PartialType } from '@nestjs/mapped-types';
import { CrearSolicitudDto } from './crear-solicitud.dto.js';

export class ActualizarSolicitudDto extends PartialType(CrearSolicitudDto) { }
