export declare class DetalleVentas {
    'id'?: number;
    'facturaVenta'?: number | null;
    'productoVenta'?: number | null;
    'cantidad'?: number | null;
    'precioProducto'?: string | null;
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
