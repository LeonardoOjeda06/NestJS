import { ISolicitud } from '../interfaces/solicitud.interface.js';
import { v7 as uuid } from 'uuid';

export class data {

    public static solicitudes: ISolicitud[] = [

        {
            id: uuid(),
            nombre: 'Sugerencia',
        },
        {
            id: uuid(),
            nombre: 'Petición',
        },
        {
            id: uuid(),
            nombre: 'Queja',
        },
        {
            id: uuid(),
            nombre: 'Reclamo',
        }
    ];
}