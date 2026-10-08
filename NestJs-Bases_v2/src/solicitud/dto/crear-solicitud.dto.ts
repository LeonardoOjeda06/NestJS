import { IsString } from "class-validator";

export class CrearSolicitudDto {
    @IsString()
    nombre: string;

    @IsString()
    estado: string;
}
