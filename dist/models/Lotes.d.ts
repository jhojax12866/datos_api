export declare class Lotes {
    'id'?: number;
    'fechaIngreso'?: Date;
    'productoLote'?: number | null;
    'cantidad'?: string | null;
    'numeroLote'?: number | null;
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
