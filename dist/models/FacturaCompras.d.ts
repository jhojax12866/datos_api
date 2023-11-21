export declare class FacturaCompras {
    'id'?: number;
    'fechaIngreso'?: Date;
    'proveedorF'?: number | null;
    'totalC'?: string | null;
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
