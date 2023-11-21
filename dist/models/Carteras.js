"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carteras = void 0;
var Carteras = (function () {
    function Carteras() {
    }
    Carteras.getAttributeTypeMap = function () {
        return Carteras.attributeTypeMap;
    };
    Carteras.discriminator = undefined;
    Carteras.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "fechaFacturacion",
            "baseName": "fecha_facturacion",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fechaVencimiento",
            "baseName": "fecha_vencimiento",
            "type": "string",
            "format": "date"
        },
        {
            "name": "pago",
            "baseName": "pago",
            "type": "number",
            "format": ""
        }
    ];
    return Carteras;
}());
exports.Carteras = Carteras;
//# sourceMappingURL=Carteras.js.map