import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearSolicitudDto } from './dto/crear-solicitud.dto.js';
import { ActualizarSolicitudDto } from './dto/actualizar-solicitud.dto.js';
import { v4 as uuid } from 'uuid';
import { Solicitud } from './entities/solicitud.entity.js';

@Injectable()
export class SolicitudService {

  private solicitudes: Solicitud[] = [
    {
      id: uuid(),
      nombre: 'Solicitud 1',
      estado: 'pendiente',
      creado: new Date(),
    }
  ];

  crear(crearSolicitudDto: CrearSolicitudDto) {
    const solicitud = {
      id: uuid(),
      creado: new Date(),
      ...crearSolicitudDto,
    }

    this.solicitudes.push(solicitud);
    return this.obtenerUno(solicitud.id);
  }

  obtenertodos() {
    return this.solicitudes;
  }

  obtenerUno(id: string) {
    const solicitud = this.solicitudes.find(solicitud => solicitud.id === id);

    if (!solicitud) {
      throw new NotFoundException(`Solicitud with id ${id} not found`);
    }

    return solicitud;
  }

  actualizar(id: string, actualizarSolicitudDto: ActualizarSolicitudDto) {
    const solicitudAnterior = this.obtenerUno(id);
    solicitudAnterior.actualizado = new Date();

    Object.assign(solicitudAnterior, actualizarSolicitudDto);
    return this.obtenerUno(id);
  }

  eliminar(id: string) {
    return this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id !== id);
  }

  obtenerDatosSolicitudesSemilla(solicitudes: Solicitud[]) {
    this.solicitudes = solicitudes;
  }
}
