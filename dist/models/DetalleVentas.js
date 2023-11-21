"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleVentas = void 0;
var DetalleVentas = (function () {
    function DetalleVentas() {
    }
    DetalleVentas.getAttributeTypeMap = function () {
        return DetalleVentas.attributeTypeMap;
    };
    DetalleVentas.discriminator = undefined;
    DetalleVentas.attributeTypeMap = [
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
            "name": "productoVenta",
            "baseName": "producto_venta",
            "type": "number",
            "format": ""
        },
        {
            "name": "cantidad",
            "baseName": "cantidad",
            "type": "number",
            "format": ""
        },
        {
            "name": "precioProducto",
            "baseName": "precio_producto",
            "type": "string",
            "format": "decimal"
        }
    ];
    return DetalleVentas;
}());
exports.DetalleVentas = DetalleVentas;
//# sourceMappingURL=DetalleVentas.js.map