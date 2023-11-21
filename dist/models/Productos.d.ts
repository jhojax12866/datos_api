export declare class Productos {
    'id'?: number;
    'codigo': number;
    'nombre': string;
    'descripcion': string;
    'categoria'?: number | null;
    'imagen'?: string | null;
    'precio'?: string | null;
    'estado'?: ProductosEstadoEnum | null;
    'fechaVencimiento': string;
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
export declare enum ProductosEstadoEnum {
    Activo = "activo",
    Inactivo = "inactivo",
    Agotado = "agotado"
}
