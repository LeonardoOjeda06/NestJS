import { IsOptional, IsString, IsUUID } from "class-validator";

export class ActualizarSolicitudDto {

    @IsString()
    @IsOptional()
    readonly nombre?: string;
}