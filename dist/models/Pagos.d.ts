export declare class Pagos {
    'id'?: number;
    'medioPago': PagosMedioPagoEnum;
    'estadoPago': PagosEstadoPagoEnum;
    'facturaV'?: number | null;
    'facturaC'?: number | null;
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
export declare enum PagosMedioPagoEnum {
    Efectivo = "Efectivo",
    TarjetaDeCrdito = "Tarjeta de Cr\u00E9dito",
    TransferenciaBancaria = "Transferencia Bancaria"
}
export declare enum PagosEstadoPagoEnum {
    Pendiente = "PENDIENTE",
    Aprobado = "APROBADO",
    Rechazado = "RECHAZADO"
}
