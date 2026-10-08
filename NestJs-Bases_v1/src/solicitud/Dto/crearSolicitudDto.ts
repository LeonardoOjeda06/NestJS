import { IsString } from "class-validator";

export class CrearSolicitudDto {

    @IsString()
    readonly nombre: string;
}