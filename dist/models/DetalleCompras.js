"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleCompras = void 0;
var DetalleCompras = (function () {
    function DetalleCompras() {
    }
    DetalleCompras.getAttributeTypeMap = function () {
        return DetalleCompras.attributeTypeMap;
    };
    DetalleCompras.discriminator = undefined;
    DetalleCompras.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "facturaCompra",
            "baseName": "factura_compra",
            "type": "number",
            "format": ""
        },
        {
            "name": "fcompraData",
            "baseName": "fcompra_data",
            "type": "FacturaCompras",
            "format": ""
        },
        {
            "name": "productoCompra",
            "baseName": "producto_compra",
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
            "name": "precioUnitario",
            "baseName": "precio_unitario",
            "type": "string",
            "format": "decimal"
        }
    ];
    return DetalleCompras;
}());
exports.DetalleCompras = DetalleCompras;
//# sourceMappingURL=DetalleCompras.js.map