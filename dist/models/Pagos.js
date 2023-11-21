"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagosEstadoPagoEnum = exports.PagosMedioPagoEnum = exports.Pagos = void 0;
var Pagos = (function () {
    function Pagos() {
    }
    Pagos.getAttributeTypeMap = function () {
        return Pagos.attributeTypeMap;
    };
    Pagos.discriminator = undefined;
    Pagos.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "medioPago",
            "baseName": "medio_pago",
            "type": "PagosMedioPagoEnum",
            "format": ""
        },
        {
            "name": "estadoPago",
            "baseName": "estado_pago",
            "type": "PagosEstadoPagoEnum",
            "format": ""
        },
        {
            "name": "facturaV",
            "baseName": "factura_v",
            "type": "number",
            "format": ""
        },
        {
            "name": "facturaC",
            "baseName": "factura_c",
            "type": "number",
            "format": ""
        }
    ];
    return Pagos;
}());
exports.Pagos = Pagos;
var PagosMedioPagoEnum;
(function (PagosMedioPagoEnum) {
    PagosMedioPagoEnum["Efectivo"] = "Efectivo";
    PagosMedioPagoEnum["TarjetaDeCrdito"] = "Tarjeta de Cr\u00E9dito";
    PagosMedioPagoEnum["TransferenciaBancaria"] = "Transferencia Bancaria";
})(PagosMedioPagoEnum = exports.PagosMedioPagoEnum || (exports.PagosMedioPagoEnum = {}));
var PagosEstadoPagoEnum;
(function (PagosEstadoPagoEnum) {
    PagosEstadoPagoEnum["Pendiente"] = "PENDIENTE";
    PagosEstadoPagoEnum["Aprobado"] = "APROBADO";
    PagosEstadoPagoEnum["Rechazado"] = "RECHAZADO";
})(PagosEstadoPagoEnum = exports.PagosEstadoPagoEnum || (exports.PagosEstadoPagoEnum = {}));
//# sourceMappingURL=Pagos.js.map