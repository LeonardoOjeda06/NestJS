import { Controller, Get } from '@nestjs/common';
import { SemillaService } from './semilla.service.js';

@Controller('semilla')
export class SemillaController {
  constructor(private readonly semillaService: SemillaService) { }

  @Get()
  correrSemilla() {
    return this.semillaService.ejecutarDataSemilla();
  }

}
