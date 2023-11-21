export declare class Carteras {
    'id'?: number;
    'fechaFacturacion'?: Date;
    'fechaVencimiento': string;
    'pago'?: number | null;
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
