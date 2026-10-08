import { Injectable, NotFoundException } from '@nestjs/common';
import { ISolicitud } from './interfaces/solicitud.interface.js';
import { data } from './Data/Solicitudes.js';
import { CrearSolicitudDto } from './Dto/crearSolicitudDto.js';
import { v7 as uuid } from 'uuid';
import { ActualizarSolicitudDto } from './Dto/actualizarSolicitudDto.js';

@Injectable()
export class SolicitudService {

    private readonly solicitudes = data.solicitudes;

    getSolicitudes(): ISolicitud[] {
        return this.solicitudes;
    }

    obtenerSolicitudPorId(id: string): ISolicitud {
        const solicitud = this.solicitudes.find(solicitud => solicitud.id === id);

        //! Manejo de errores cuando la solicitud no es encontrada
        if (!solicitud) {
            throw new NotFoundException(`La solicitud con id ${id} no fue encontrada`);
        }

        return solicitud;
    }

    crearNuevaSolicitud(nuevaSolicitud: CrearSolicitudDto): ISolicitud {

        const solicitudCreada: ISolicitud = {
            id: uuid(),
            ...nuevaSolicitud, // Se copian todas las propiedades del DTO a la nueva solicitud
        }

        this.solicitudes.push(solicitudCreada);
        return solicitudCreada;
    }

    actualizarSolicitud(id: string, actualizarSolicitud: ActualizarSolicitudDto): ActualizarSolicitudDto {
        const solicitud = this.obtenerSolicitudPorId(id);

        if (!solicitud) {
            throw new NotFoundException(
                `No existe una solicitud con el id ${id}`,
            );
        }

        // Es de destacar que Object.assign modifica el objeto original y también lo retorna.
        // en este caso se actualiza directamente el registro existente.
        // de esta manera se actualiza la lista sin necesidad de iterar sobre ella.
        return Object.assign(solicitud, actualizarSolicitud);
    }

    eliminarSolicitud(id: string): ISolicitud {
        const index = this.solicitudes.findIndex(solicitud => solicitud.id === id);

        if (index === -1) {
            throw new NotFoundException(`La solicitud con id ${id} no fue encontrada`);
        }

        const solicitudEliminada = this.solicitudes[index];
        this.solicitudes.splice(index, 1);
        return solicitudEliminada;
    }

}
