export declare class Personas {
    'id'?: number;
    'nombre': string;
    'apellido': string;
    'telefono': string;
    'correo'?: string | null;
    'tipoPersona'?: PersonasTipoPersonaEnum | null;
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
export declare enum PersonasTipoPersonaEnum {
    Cliente = "cliente",
    Proveedor = "proveedor"
}
