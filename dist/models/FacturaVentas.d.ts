export declare class FacturaVentas {
    'id'?: number;
    'fechaIngreso'?: Date;
    'clienteF'?: number | null;
    'totalV'?: string | null;
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
