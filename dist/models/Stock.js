"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
var Stock = (function () {
    function Stock() {
    }
    Stock.getAttributeTypeMap = function () {
        return Stock.attributeTypeMap;
    };
    Stock.discriminator = undefined;
    Stock.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "productoStock",
            "baseName": "producto_stock",
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
            "name": "loteStock",
            "baseName": "lote_stock",
            "type": "number",
            "format": ""
        }
    ];
    return Stock;
}());
exports.Stock = Stock;
//# sourceMappingURL=Stock.js.map