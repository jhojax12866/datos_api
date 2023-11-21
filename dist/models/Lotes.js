"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lotes = void 0;
var Lotes = (function () {
    function Lotes() {
    }
    Lotes.getAttributeTypeMap = function () {
        return Lotes.attributeTypeMap;
    };
    Lotes.discriminator = undefined;
    Lotes.attributeTypeMap = [
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
            "name": "productoLote",
            "baseName": "producto_lote",
            "type": "number",
            "format": ""
        },
        {
            "name": "cantidad",
            "baseName": "cantidad",
            "type": "string",
            "format": "decimal"
        },
        {
            "name": "numeroLote",
            "baseName": "numero_lote",
            "type": "number",
            "format": ""
        }
    ];
    return Lotes;
}());
exports.Lotes = Lotes;
//# sourceMappingURL=Lotes.js.map