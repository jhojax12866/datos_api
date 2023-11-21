"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaVentas = void 0;
var FacturaVentas = (function () {
    function FacturaVentas() {
    }
    FacturaVentas.getAttributeTypeMap = function () {
        return FacturaVentas.attributeTypeMap;
    };
    FacturaVentas.discriminator = undefined;
    FacturaVentas.attributeTypeMap = [
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
            "name": "clienteF",
            "baseName": "cliente_f",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalV",
            "baseName": "total_v",
            "type": "string",
            "format": "decimal"
        }
    ];
    return FacturaVentas;
}());
exports.FacturaVentas = FacturaVentas;
//# sourceMappingURL=FacturaVentas.js.map