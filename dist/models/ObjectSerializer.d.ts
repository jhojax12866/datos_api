export * from '../models/Carteras';
export * from '../models/Categorias';
export * from '../models/DetalleCompras';
export * from '../models/DetalleVentas';
export * from '../models/FacturaCompras';
export * from '../models/FacturaVCarteras';
export * from '../models/FacturaVentas';
export * from '../models/Lotes';
export * from '../models/Pagos';
export * from '../models/Personas';
export * from '../models/Productos';
export * from '../models/Stock';
export * from '../models/TokenObtainPair';
export * from '../models/User';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
