import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import * as solicitudService from './solicitud.service.js';
import { CrearSolicitudDto } from './Dto/crearSolicitudDto.js';
import { ActualizarSolicitudDto } from './Dto/actualizarSolicitudDto.js';


/**
 * ?@UsePipes(ValidationPipe) 
 * usualemnte esto se usa para validar todas las solicitudes entrantes de tipo DTO
 * en este controlador, sin embargo para no tener que escribir esta validación en cada controlador individual
 * se puede aplicar a nivel global en el módulo principal de la aplicación, es decir en el `main.ts`.
 * pues es más eficiente y limpio aplicar la validación globalmente, y no en app.module.ts. porque de esta manera
 * se asegura que todas las solicitudes entrantes en toda la aplicación sean validadas automáticamente.
 * 
 * !NOTA:
 * Para poder usar el pipe ValidationPipe, se debe instalar el paquete `class-validator` y `class-transformer`.
 * mediante el comando: 
 * ```
 * npm add class-validator class-transformer
 * ```
 */

@Controller('solicitud')
export class SolicitudController {

    //! Inyeccion de dependencias del servicio de solicitud
    constructor(private readonly solicitudService: solicitudService.SolicitudService) { }

    @Get()
    obtenerSolicitudes() {
        return this.solicitudService.getSolicitudes();
    }

    //! Pipe para validar y transformar el parámetro 'id' de tipo string a un UUID
    @Get(':id')
    obtenerSolicitudxId(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
        return this.solicitudService.obtenerSolicitudPorId(id);
    }

    @Post()
    crearNuevaSolicitud(@Body() crearSolicitudDto: CrearSolicitudDto) {
        return this.solicitudService.crearNuevaSolicitud(crearSolicitudDto);
    }

    @Patch(':id')
    actualizarSolicitud(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string, @Body() actualizarSolicitudDto: ActualizarSolicitudDto) {

        console.log('ID URL:', id);
        console.log('BODY:', actualizarSolicitudDto);
        return this.solicitudService.actualizarSolicitud(id, actualizarSolicitudDto);
    }

    @Delete(':id')
    eliminarsolicitud(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
        return this.solicitudService.eliminarSolicitud(id);
    }
}
