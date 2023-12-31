/**
 * API distritiendamj
 * Documentación Api distritiendamj
 *
 * OpenAPI spec version: v1
 * Contact: wilson.199819@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class User {
    'id'?: number;
    /**
    * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
    */
    'username': string;
    'email': string;
    'firstName'?: string;
    'lastName'?: string;
    /**
    * Designates whether the user can log into this admin site.
    */
    'isStaff'?: boolean;
    /**
    * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
    */
    'isActive'?: boolean;
    'password': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isStaff",
            "baseName": "is_staff",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }

    public constructor() {
    }
}

