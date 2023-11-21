"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenObtainPair = void 0;
var TokenObtainPair = (function () {
    function TokenObtainPair() {
    }
    TokenObtainPair.getAttributeTypeMap = function () {
        return TokenObtainPair.attributeTypeMap;
    };
    TokenObtainPair.discriminator = undefined;
    TokenObtainPair.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }
    ];
    return TokenObtainPair;
}());
exports.TokenObtainPair = TokenObtainPair;
//# sourceMappingURL=TokenObtainPair.js.map