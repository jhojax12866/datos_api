export declare class User {
    'id'?: number;
    'username': string;
    'email': string;
    'firstName'?: string;
    'lastName'?: string;
    'isStaff'?: boolean;
    'isActive'?: boolean;
    'password': string;
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
