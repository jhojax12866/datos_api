"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonasTipoPersonaEnum = exports.Personas = void 0;
var Personas = (function () {
    function Personas() {
    }
    Personas.getAttributeTypeMap = function () {
        return Personas.attributeTypeMap;
    };
    Personas.discriminator = undefined;
    Personas.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "apellido",
            "baseName": "apellido",
            "type": "string",
            "format": ""
        },
        {
            "name": "telefono",
            "baseName": "telefono",
            "type": "string",
            "format": ""
        },
        {
            "name": "correo",
            "baseName": "correo",
            "type": "string",
            "format": ""
        },
        {
            "name": "tipoPersona",
            "baseName": "tipo_persona",
            "type": "PersonasTipoPersonaEnum",
            "format": ""
        }
    ];
    return Personas;
}());
exports.Personas = Personas;
var PersonasTipoPersonaEnum;
(function (PersonasTipoPersonaEnum) {
    PersonasTipoPersonaEnum["Cliente"] = "cliente";
    PersonasTipoPersonaEnum["Proveedor"] = "proveedor";
})(PersonasTipoPersonaEnum = exports.PersonasTipoPersonaEnum || (exports.PersonasTipoPersonaEnum = {}));
//# sourceMappingURL=Personas.js.map