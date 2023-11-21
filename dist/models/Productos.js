"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosEstadoEnum = exports.Productos = void 0;
var Productos = (function () {
    function Productos() {
    }
    Productos.getAttributeTypeMap = function () {
        return Productos.attributeTypeMap;
    };
    Productos.discriminator = undefined;
    Productos.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "codigo",
            "baseName": "codigo",
            "type": "number",
            "format": ""
        },
        {
            "name": "nombre",
            "baseName": "nombre",
            "type": "string",
            "format": ""
        },
        {
            "name": "descripcion",
            "baseName": "descripcion",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoria",
            "baseName": "categoria",
            "type": "number",
            "format": ""
        },
        {
            "name": "imagen",
            "baseName": "imagen",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "precio",
            "baseName": "precio",
            "type": "string",
            "format": "decimal"
        },
        {
            "name": "estado",
            "baseName": "estado",
            "type": "ProductosEstadoEnum",
            "format": ""
        },
        {
            "name": "fechaVencimiento",
            "baseName": "fecha_vencimiento",
            "type": "string",
            "format": "date"
        }
    ];
    return Productos;
}());
exports.Productos = Productos;
var ProductosEstadoEnum;
(function (ProductosEstadoEnum) {
    ProductosEstadoEnum["Activo"] = "activo";
    ProductosEstadoEnum["Inactivo"] = "inactivo";
    ProductosEstadoEnum["Agotado"] = "agotado";
})(ProductosEstadoEnum = exports.ProductosEstadoEnum || (exports.ProductosEstadoEnum = {}));
//# sourceMappingURL=Productos.js.map