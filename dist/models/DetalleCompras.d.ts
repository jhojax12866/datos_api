import { FacturaCompras } from '../models/FacturaCompras';
export declare class DetalleCompras {
    'id'?: number;
    'facturaCompra'?: number | null;
    'fcompraData'?: FacturaCompras;
    'productoCompra'?: number | null;
    'cantidad'?: number | null;
    'precioUnitario'?: string | null;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
