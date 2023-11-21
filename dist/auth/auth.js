"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.BasicAuthentication = void 0;
var BasicAuthentication = (function () {
    function BasicAuthentication(username, password) {
        this.username = username;
        this.password = password;
    }
    BasicAuthentication.prototype.getName = function () {
        return "Basic";
    };
    BasicAuthentication.prototype.applySecurityAuthentication = function (context) {
        var comb = Buffer.from(this.username + ":" + this.password, 'binary').toString('base64');
        context.setHeaderParam("Authorization", "Basic " + comb);
    };
    return BasicAuthentication;
}());
exports.BasicAuthentication = BasicAuthentication;
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["Basic"]) {
        authMethods["Basic"] = new BasicAuthentication(config["Basic"]["username"], config["Basic"]["password"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map