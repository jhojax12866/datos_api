"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCompras = void 0;
var FacturaCompras = (function () {
    function FacturaCompras() {
    }
    FacturaCompras.getAttributeTypeMap = function () {
        return FacturaCompras.attributeTypeMap;
    };
    FacturaCompras.discriminator = undefined;
    FacturaCompras.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "fechaIngreso",
            "baseName": "fecha_ingreso",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "proveedorF",
            "baseName": "proveedor_f",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalC",
            "baseName": "total_c",
            "type": "string",
            "format": "decimal"
        }
    ];
    return FacturaCompras;
}());
exports.FacturaCompras = FacturaCompras;
//# sourceMappingURL=FacturaCompras.js.map