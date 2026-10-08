import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { SolicitudService } from './solicitud.service.js';
import { CrearSolicitudDto } from './dto/crear-solicitud.dto.js';
import { ActualizarSolicitudDto } from './dto/actualizar-solicitud.dto.js';

@Controller('solicitud')
export class SolicitudController {
  constructor(private readonly solicitudService: SolicitudService) { }

  @Post()
  crearSolicitud(@Body() crearSolicitudDto: CrearSolicitudDto) {
    return this.solicitudService.crear(crearSolicitudDto);
  }

  @Get()
  obtenerSolicitudes() {
    return this.solicitudService.obtenertodos();
  }

  @Get(':id')
  obtenerUnaSolicitud(@Param('id', ParseUUIDPipe) id: string) {
    return this.solicitudService.obtenerUno(id);
  }

  @Patch(':id')
  actualizarSolicitud(@Param('id', ParseUUIDPipe) id: string, @Body() actualizarSolicitudDto: ActualizarSolicitudDto) {
    return this.solicitudService.actualizar(id, actualizarSolicitudDto);
  }

  @Delete(':id')
  eliminarSolicitud(@Param('id', ParseUUIDPipe) id: string) {
    return this.solicitudService.eliminar(id);
  }
}
