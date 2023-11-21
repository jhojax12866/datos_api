"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectApiusersApi = exports.ObjectApistockApi = exports.ObjectApiproductosApi = exports.ObjectApipersonasApi = exports.ObjectApipagoApi = exports.ObjectApilotesApi = exports.ObjectApifacturaVentaApi = exports.ObjectApifacturaVCarteraApi = exports.ObjectApifacturaCompraApi = exports.ObjectApidetalleVentaApi = exports.ObjectApidetalleCompraApi = exports.ObjectApicategoriasApi = exports.ObjectApicarteraApi = exports.ObjectApiauthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectApiauthApi = (function () {
    function ObjectApiauthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableApiauthApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApiauthApi.prototype.apiauthLoginCreateWithHttpInfo = function (param, options) {
        return this.api.apiauthLoginCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApiauthApi.prototype.apiauthLoginCreate = function (param, options) {
        return this.api.apiauthLoginCreate(param.data, options).toPromise();
    };
    ObjectApiauthApi.prototype.apiauthMeListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiauthMeListWithHttpInfo(options).toPromise();
    };
    ObjectApiauthApi.prototype.apiauthMeList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiauthMeList(options).toPromise();
    };
    return ObjectApiauthApi;
}());
exports.ObjectApiauthApi = ObjectApiauthApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectApicarteraApi = (function () {
    function ObjectApicarteraApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableApicarteraApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApicarteraApi.prototype.apicarteraCreateWithHttpInfo = function (param, options) {
        return this.api.apicarteraCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraCreate = function (param, options) {
        return this.api.apicarteraCreate(param.data, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraDeleteWithHttpInfo = function (param, options) {
        return this.api.apicarteraDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraDelete = function (param, options) {
        return this.api.apicarteraDelete(param.id, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apicarteraListWithHttpInfo(options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apicarteraList(options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apicarteraPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraPartialUpdate = function (param, options) {
        return this.api.apicarteraPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraReadWithHttpInfo = function (param, options) {
        return this.api.apicarteraReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraRead = function (param, options) {
        return this.api.apicarteraRead(param.id, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraUpdateWithHttpInfo = function (param, options) {
        return this.api.apicarteraUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApicarteraApi.prototype.apicarteraUpdate = function (param, options) {
        return this.api.apicarteraUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApicarteraApi;
}());
exports.ObjectApicarteraApi = ObjectApicarteraApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectApicategoriasApi = (function () {
    function ObjectApicategoriasApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableApicategoriasApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApicategoriasApi.prototype.apicategoriasCreateWithHttpInfo = function (param, options) {
        return this.api.apicategoriasCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasCreate = function (param, options) {
        return this.api.apicategoriasCreate(param.data, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasDeleteWithHttpInfo = function (param, options) {
        return this.api.apicategoriasDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasDelete = function (param, options) {
        return this.api.apicategoriasDelete(param.id, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apicategoriasListWithHttpInfo(options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apicategoriasList(options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apicategoriasPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasPartialUpdate = function (param, options) {
        return this.api.apicategoriasPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasReadWithHttpInfo = function (param, options) {
        return this.api.apicategoriasReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasRead = function (param, options) {
        return this.api.apicategoriasRead(param.id, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasUpdateWithHttpInfo = function (param, options) {
        return this.api.apicategoriasUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApicategoriasApi.prototype.apicategoriasUpdate = function (param, options) {
        return this.api.apicategoriasUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApicategoriasApi;
}());
exports.ObjectApicategoriasApi = ObjectApicategoriasApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectApidetalleCompraApi = (function () {
    function ObjectApidetalleCompraApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableApidetalleCompraApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApidetalleCompraApi.prototype.apidetalleCompraCreateWithHttpInfo = function (param, options) {
        return this.api.apidetalleCompraCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraCreate = function (param, options) {
        return this.api.apidetalleCompraCreate(param.data, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraDeleteWithHttpInfo = function (param, options) {
        return this.api.apidetalleCompraDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraDelete = function (param, options) {
        return this.api.apidetalleCompraDelete(param.id, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apidetalleCompraListWithHttpInfo(options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apidetalleCompraList(options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apidetalleCompraPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraPartialUpdate = function (param, options) {
        return this.api.apidetalleCompraPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraReadWithHttpInfo = function (param, options) {
        return this.api.apidetalleCompraReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraRead = function (param, options) {
        return this.api.apidetalleCompraRead(param.id, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraUpdateWithHttpInfo = function (param, options) {
        return this.api.apidetalleCompraUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApidetalleCompraApi.prototype.apidetalleCompraUpdate = function (param, options) {
        return this.api.apidetalleCompraUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApidetalleCompraApi;
}());
exports.ObjectApidetalleCompraApi = ObjectApidetalleCompraApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectApidetalleVentaApi = (function () {
    function ObjectApidetalleVentaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableApidetalleVentaApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApidetalleVentaApi.prototype.apidetalleVentaCreateWithHttpInfo = function (param, options) {
        return this.api.apidetalleVentaCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaCreate = function (param, options) {
        return this.api.apidetalleVentaCreate(param.data, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaDeleteWithHttpInfo = function (param, options) {
        return this.api.apidetalleVentaDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaDelete = function (param, options) {
        return this.api.apidetalleVentaDelete(param.id, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apidetalleVentaListWithHttpInfo(options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apidetalleVentaList(options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apidetalleVentaPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaPartialUpdate = function (param, options) {
        return this.api.apidetalleVentaPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaReadWithHttpInfo = function (param, options) {
        return this.api.apidetalleVentaReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaRead = function (param, options) {
        return this.api.apidetalleVentaRead(param.id, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaUpdateWithHttpInfo = function (param, options) {
        return this.api.apidetalleVentaUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApidetalleVentaApi.prototype.apidetalleVentaUpdate = function (param, options) {
        return this.api.apidetalleVentaUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApidetalleVentaApi;
}());
exports.ObjectApidetalleVentaApi = ObjectApidetalleVentaApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectApifacturaCompraApi = (function () {
    function ObjectApifacturaCompraApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableApifacturaCompraApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApifacturaCompraApi.prototype.apifacturaCompraCreateWithHttpInfo = function (param, options) {
        return this.api.apifacturaCompraCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraCreate = function (param, options) {
        return this.api.apifacturaCompraCreate(param.data, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraDeleteWithHttpInfo = function (param, options) {
        return this.api.apifacturaCompraDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraDelete = function (param, options) {
        return this.api.apifacturaCompraDelete(param.id, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apifacturaCompraListWithHttpInfo(options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apifacturaCompraList(options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apifacturaCompraPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraPartialUpdate = function (param, options) {
        return this.api.apifacturaCompraPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraReadWithHttpInfo = function (param, options) {
        return this.api.apifacturaCompraReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraRead = function (param, options) {
        return this.api.apifacturaCompraRead(param.id, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraUpdateWithHttpInfo = function (param, options) {
        return this.api.apifacturaCompraUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaCompraApi.prototype.apifacturaCompraUpdate = function (param, options) {
        return this.api.apifacturaCompraUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApifacturaCompraApi;
}());
exports.ObjectApifacturaCompraApi = ObjectApifacturaCompraApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectApifacturaVCarteraApi = (function () {
    function ObjectApifacturaVCarteraApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableApifacturaVCarteraApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraCreateWithHttpInfo = function (param, options) {
        return this.api.apifacturaVCarteraCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraCreate = function (param, options) {
        return this.api.apifacturaVCarteraCreate(param.data, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraDeleteWithHttpInfo = function (param, options) {
        return this.api.apifacturaVCarteraDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraDelete = function (param, options) {
        return this.api.apifacturaVCarteraDelete(param.id, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apifacturaVCarteraListWithHttpInfo(options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apifacturaVCarteraList(options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apifacturaVCarteraPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraPartialUpdate = function (param, options) {
        return this.api.apifacturaVCarteraPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraReadWithHttpInfo = function (param, options) {
        return this.api.apifacturaVCarteraReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraRead = function (param, options) {
        return this.api.apifacturaVCarteraRead(param.id, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraUpdateWithHttpInfo = function (param, options) {
        return this.api.apifacturaVCarteraUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaVCarteraApi.prototype.apifacturaVCarteraUpdate = function (param, options) {
        return this.api.apifacturaVCarteraUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApifacturaVCarteraApi;
}());
exports.ObjectApifacturaVCarteraApi = ObjectApifacturaVCarteraApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectApifacturaVentaApi = (function () {
    function ObjectApifacturaVentaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableApifacturaVentaApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApifacturaVentaApi.prototype.apifacturaVentaCreateWithHttpInfo = function (param, options) {
        return this.api.apifacturaVentaCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaCreate = function (param, options) {
        return this.api.apifacturaVentaCreate(param.data, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaDeleteWithHttpInfo = function (param, options) {
        return this.api.apifacturaVentaDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaDelete = function (param, options) {
        return this.api.apifacturaVentaDelete(param.id, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apifacturaVentaListWithHttpInfo(options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apifacturaVentaList(options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apifacturaVentaPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaPartialUpdate = function (param, options) {
        return this.api.apifacturaVentaPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaReadWithHttpInfo = function (param, options) {
        return this.api.apifacturaVentaReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaRead = function (param, options) {
        return this.api.apifacturaVentaRead(param.id, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaUpdateWithHttpInfo = function (param, options) {
        return this.api.apifacturaVentaUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApifacturaVentaApi.prototype.apifacturaVentaUpdate = function (param, options) {
        return this.api.apifacturaVentaUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApifacturaVentaApi;
}());
exports.ObjectApifacturaVentaApi = ObjectApifacturaVentaApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectApilotesApi = (function () {
    function ObjectApilotesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableApilotesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApilotesApi.prototype.apilotesCreateWithHttpInfo = function (param, options) {
        return this.api.apilotesCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesCreate = function (param, options) {
        return this.api.apilotesCreate(param.data, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesDeleteWithHttpInfo = function (param, options) {
        return this.api.apilotesDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesDelete = function (param, options) {
        return this.api.apilotesDelete(param.id, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apilotesListWithHttpInfo(param.productoLote, param.ordering, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apilotesList(param.productoLote, param.ordering, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apilotesPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesPartialUpdate = function (param, options) {
        return this.api.apilotesPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesReadWithHttpInfo = function (param, options) {
        return this.api.apilotesReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesRead = function (param, options) {
        return this.api.apilotesRead(param.id, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesUpdateWithHttpInfo = function (param, options) {
        return this.api.apilotesUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApilotesApi.prototype.apilotesUpdate = function (param, options) {
        return this.api.apilotesUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApilotesApi;
}());
exports.ObjectApilotesApi = ObjectApilotesApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectApipagoApi = (function () {
    function ObjectApipagoApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableApipagoApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApipagoApi.prototype.apipagoCreateWithHttpInfo = function (param, options) {
        return this.api.apipagoCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoCreate = function (param, options) {
        return this.api.apipagoCreate(param.data, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoDeleteWithHttpInfo = function (param, options) {
        return this.api.apipagoDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoDelete = function (param, options) {
        return this.api.apipagoDelete(param.id, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apipagoListWithHttpInfo(options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apipagoList(options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apipagoPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoPartialUpdate = function (param, options) {
        return this.api.apipagoPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoReadWithHttpInfo = function (param, options) {
        return this.api.apipagoReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoRead = function (param, options) {
        return this.api.apipagoRead(param.id, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoUpdateWithHttpInfo = function (param, options) {
        return this.api.apipagoUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApipagoApi.prototype.apipagoUpdate = function (param, options) {
        return this.api.apipagoUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApipagoApi;
}());
exports.ObjectApipagoApi = ObjectApipagoApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectApipersonasApi = (function () {
    function ObjectApipersonasApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableApipersonasApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApipersonasApi.prototype.apipersonasCreateWithHttpInfo = function (param, options) {
        return this.api.apipersonasCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasCreate = function (param, options) {
        return this.api.apipersonasCreate(param.data, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasDeleteWithHttpInfo = function (param, options) {
        return this.api.apipersonasDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasDelete = function (param, options) {
        return this.api.apipersonasDelete(param.id, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apipersonasListWithHttpInfo(param.nombre, param.ordering, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apipersonasList(param.nombre, param.ordering, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apipersonasPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasPartialUpdate = function (param, options) {
        return this.api.apipersonasPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasReadWithHttpInfo = function (param, options) {
        return this.api.apipersonasReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasRead = function (param, options) {
        return this.api.apipersonasRead(param.id, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasUpdateWithHttpInfo = function (param, options) {
        return this.api.apipersonasUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApipersonasApi.prototype.apipersonasUpdate = function (param, options) {
        return this.api.apipersonasUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApipersonasApi;
}());
exports.ObjectApipersonasApi = ObjectApipersonasApi;
var ObservableAPI_12 = require("./ObservableAPI");
var ObjectApiproductosApi = (function () {
    function ObjectApiproductosApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableApiproductosApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApiproductosApi.prototype.apiproductosCreateWithHttpInfo = function (param, options) {
        return this.api.apiproductosCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosCreate = function (param, options) {
        return this.api.apiproductosCreate(param.data, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosDeleteWithHttpInfo = function (param, options) {
        return this.api.apiproductosDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosDelete = function (param, options) {
        return this.api.apiproductosDelete(param.id, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiproductosListWithHttpInfo(param.categoria, param.ordering, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiproductosList(param.categoria, param.ordering, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apiproductosPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosPartialUpdate = function (param, options) {
        return this.api.apiproductosPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosReadWithHttpInfo = function (param, options) {
        return this.api.apiproductosReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosRead = function (param, options) {
        return this.api.apiproductosRead(param.id, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosUpdateWithHttpInfo = function (param, options) {
        return this.api.apiproductosUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApiproductosApi.prototype.apiproductosUpdate = function (param, options) {
        return this.api.apiproductosUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApiproductosApi;
}());
exports.ObjectApiproductosApi = ObjectApiproductosApi;
var ObservableAPI_13 = require("./ObservableAPI");
var ObjectApistockApi = (function () {
    function ObjectApistockApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableApistockApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApistockApi.prototype.apistockCreateWithHttpInfo = function (param, options) {
        return this.api.apistockCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockCreate = function (param, options) {
        return this.api.apistockCreate(param.data, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockDeleteWithHttpInfo = function (param, options) {
        return this.api.apistockDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockDelete = function (param, options) {
        return this.api.apistockDelete(param.id, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apistockListWithHttpInfo(param.cantidad, param.ordering, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apistockList(param.cantidad, param.ordering, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apistockPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockPartialUpdate = function (param, options) {
        return this.api.apistockPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockReadWithHttpInfo = function (param, options) {
        return this.api.apistockReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockRead = function (param, options) {
        return this.api.apistockRead(param.id, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockUpdateWithHttpInfo = function (param, options) {
        return this.api.apistockUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApistockApi.prototype.apistockUpdate = function (param, options) {
        return this.api.apistockUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApistockApi;
}());
exports.ObjectApistockApi = ObjectApistockApi;
var ObservableAPI_14 = require("./ObservableAPI");
var ObjectApiusersApi = (function () {
    function ObjectApiusersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableApiusersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApiusersApi.prototype.apiusersCreateWithHttpInfo = function (param, options) {
        return this.api.apiusersCreateWithHttpInfo(param.data, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersCreate = function (param, options) {
        return this.api.apiusersCreate(param.data, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersDeleteWithHttpInfo = function (param, options) {
        return this.api.apiusersDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersDelete = function (param, options) {
        return this.api.apiusersDelete(param.id, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiusersListWithHttpInfo(options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.apiusersList(options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersPartialUpdateWithHttpInfo = function (param, options) {
        return this.api.apiusersPartialUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersPartialUpdate = function (param, options) {
        return this.api.apiusersPartialUpdate(param.id, param.data, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersReadWithHttpInfo = function (param, options) {
        return this.api.apiusersReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersRead = function (param, options) {
        return this.api.apiusersRead(param.id, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersUpdateWithHttpInfo = function (param, options) {
        return this.api.apiusersUpdateWithHttpInfo(param.id, param.data, options).toPromise();
    };
    ObjectApiusersApi.prototype.apiusersUpdate = function (param, options) {
        return this.api.apiusersUpdate(param.id, param.data, options).toPromise();
    };
    return ObjectApiusersApi;
}());
exports.ObjectApiusersApi = ObjectApiusersApi;
//# sourceMappingURL=ObjectParamAPI.js.map