"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaVCarteras = void 0;
var FacturaVCarteras = (function () {
    function FacturaVCarteras() {
    }
    FacturaVCarteras.getAttributeTypeMap = function () {
        return FacturaVCarteras.attributeTypeMap;
    };
    FacturaVCarteras.discriminator = undefined;
    FacturaVCarteras.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "facturaVenta",
            "baseName": "factura_venta",
            "type": "number",
            "format": ""
        },
        {
            "name": "cartera",
            "baseName": "cartera",
            "type": "number",
            "format": ""
        }
    ];
    return FacturaVCarteras;
}());
exports.FacturaVCarteras = FacturaVCarteras;
//# sourceMappingURL=FacturaVCarteras.js.map