"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categorias = void 0;
var Categorias = (function () {
    function Categorias() {
    }
    Categorias.getAttributeTypeMap = function () {
        return Categorias.attributeTypeMap;
    };
    Categorias.discriminator = undefined;
    Categorias.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "descripcion",
            "baseName": "descripcion",
            "type": "string",
            "format": ""
        }
    ];
    return Categorias;
}());
exports.Categorias = Categorias;
//# sourceMappingURL=Categorias.js.map