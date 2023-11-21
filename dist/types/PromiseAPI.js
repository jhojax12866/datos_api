"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseApiusersApi = exports.PromiseApistockApi = exports.PromiseApiproductosApi = exports.PromiseApipersonasApi = exports.PromiseApipagoApi = exports.PromiseApilotesApi = exports.PromiseApifacturaVentaApi = exports.PromiseApifacturaVCarteraApi = exports.PromiseApifacturaCompraApi = exports.PromiseApidetalleVentaApi = exports.PromiseApidetalleCompraApi = exports.PromiseApicategoriasApi = exports.PromiseApicarteraApi = exports.PromiseApiauthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseApiauthApi = (function () {
    function PromiseApiauthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableApiauthApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApiauthApi.prototype.apiauthLoginCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apiauthLoginCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApiauthApi.prototype.apiauthLoginCreate = function (data, _options) {
        var result = this.api.apiauthLoginCreate(data, _options);
        return result.toPromise();
    };
    PromiseApiauthApi.prototype.apiauthMeListWithHttpInfo = function (_options) {
        var result = this.api.apiauthMeListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApiauthApi.prototype.apiauthMeList = function (_options) {
        var result = this.api.apiauthMeList(_options);
        return result.toPromise();
    };
    return PromiseApiauthApi;
}());
exports.PromiseApiauthApi = PromiseApiauthApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseApicarteraApi = (function () {
    function PromiseApicarteraApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableApicarteraApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApicarteraApi.prototype.apicarteraCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apicarteraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraCreate = function (data, _options) {
        var result = this.api.apicarteraCreate(data, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apicarteraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraDelete = function (id, _options) {
        var result = this.api.apicarteraDelete(id, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraListWithHttpInfo = function (_options) {
        var result = this.api.apicarteraListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraList = function (_options) {
        var result = this.api.apicarteraList(_options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apicarteraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraPartialUpdate = function (id, data, _options) {
        var result = this.api.apicarteraPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraReadWithHttpInfo = function (id, _options) {
        var result = this.api.apicarteraReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraRead = function (id, _options) {
        var result = this.api.apicarteraRead(id, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apicarteraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApicarteraApi.prototype.apicarteraUpdate = function (id, data, _options) {
        var result = this.api.apicarteraUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApicarteraApi;
}());
exports.PromiseApicarteraApi = PromiseApicarteraApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseApicategoriasApi = (function () {
    function PromiseApicategoriasApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableApicategoriasApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApicategoriasApi.prototype.apicategoriasCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apicategoriasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasCreate = function (data, _options) {
        var result = this.api.apicategoriasCreate(data, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apicategoriasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasDelete = function (id, _options) {
        var result = this.api.apicategoriasDelete(id, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasListWithHttpInfo = function (_options) {
        var result = this.api.apicategoriasListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasList = function (_options) {
        var result = this.api.apicategoriasList(_options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apicategoriasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasPartialUpdate = function (id, data, _options) {
        var result = this.api.apicategoriasPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasReadWithHttpInfo = function (id, _options) {
        var result = this.api.apicategoriasReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasRead = function (id, _options) {
        var result = this.api.apicategoriasRead(id, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apicategoriasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApicategoriasApi.prototype.apicategoriasUpdate = function (id, data, _options) {
        var result = this.api.apicategoriasUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApicategoriasApi;
}());
exports.PromiseApicategoriasApi = PromiseApicategoriasApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseApidetalleCompraApi = (function () {
    function PromiseApidetalleCompraApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableApidetalleCompraApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApidetalleCompraApi.prototype.apidetalleCompraCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apidetalleCompraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraCreate = function (data, _options) {
        var result = this.api.apidetalleCompraCreate(data, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apidetalleCompraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraDelete = function (id, _options) {
        var result = this.api.apidetalleCompraDelete(id, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraListWithHttpInfo = function (_options) {
        var result = this.api.apidetalleCompraListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraList = function (_options) {
        var result = this.api.apidetalleCompraList(_options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apidetalleCompraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraPartialUpdate = function (id, data, _options) {
        var result = this.api.apidetalleCompraPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraReadWithHttpInfo = function (id, _options) {
        var result = this.api.apidetalleCompraReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraRead = function (id, _options) {
        var result = this.api.apidetalleCompraRead(id, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apidetalleCompraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApidetalleCompraApi.prototype.apidetalleCompraUpdate = function (id, data, _options) {
        var result = this.api.apidetalleCompraUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApidetalleCompraApi;
}());
exports.PromiseApidetalleCompraApi = PromiseApidetalleCompraApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseApidetalleVentaApi = (function () {
    function PromiseApidetalleVentaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableApidetalleVentaApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApidetalleVentaApi.prototype.apidetalleVentaCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apidetalleVentaCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaCreate = function (data, _options) {
        var result = this.api.apidetalleVentaCreate(data, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apidetalleVentaDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaDelete = function (id, _options) {
        var result = this.api.apidetalleVentaDelete(id, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaListWithHttpInfo = function (_options) {
        var result = this.api.apidetalleVentaListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaList = function (_options) {
        var result = this.api.apidetalleVentaList(_options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apidetalleVentaPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaPartialUpdate = function (id, data, _options) {
        var result = this.api.apidetalleVentaPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaReadWithHttpInfo = function (id, _options) {
        var result = this.api.apidetalleVentaReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaRead = function (id, _options) {
        var result = this.api.apidetalleVentaRead(id, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apidetalleVentaUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApidetalleVentaApi.prototype.apidetalleVentaUpdate = function (id, data, _options) {
        var result = this.api.apidetalleVentaUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApidetalleVentaApi;
}());
exports.PromiseApidetalleVentaApi = PromiseApidetalleVentaApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseApifacturaCompraApi = (function () {
    function PromiseApifacturaCompraApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableApifacturaCompraApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApifacturaCompraApi.prototype.apifacturaCompraCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apifacturaCompraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraCreate = function (data, _options) {
        var result = this.api.apifacturaCompraCreate(data, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apifacturaCompraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraDelete = function (id, _options) {
        var result = this.api.apifacturaCompraDelete(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraListWithHttpInfo = function (_options) {
        var result = this.api.apifacturaCompraListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraList = function (_options) {
        var result = this.api.apifacturaCompraList(_options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apifacturaCompraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraPartialUpdate = function (id, data, _options) {
        var result = this.api.apifacturaCompraPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraReadWithHttpInfo = function (id, _options) {
        var result = this.api.apifacturaCompraReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraRead = function (id, _options) {
        var result = this.api.apifacturaCompraRead(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apifacturaCompraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaCompraApi.prototype.apifacturaCompraUpdate = function (id, data, _options) {
        var result = this.api.apifacturaCompraUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApifacturaCompraApi;
}());
exports.PromiseApifacturaCompraApi = PromiseApifacturaCompraApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseApifacturaVCarteraApi = (function () {
    function PromiseApifacturaVCarteraApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableApifacturaVCarteraApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apifacturaVCarteraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraCreate = function (data, _options) {
        var result = this.api.apifacturaVCarteraCreate(data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apifacturaVCarteraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraDelete = function (id, _options) {
        var result = this.api.apifacturaVCarteraDelete(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraListWithHttpInfo = function (_options) {
        var result = this.api.apifacturaVCarteraListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraList = function (_options) {
        var result = this.api.apifacturaVCarteraList(_options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apifacturaVCarteraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraPartialUpdate = function (id, data, _options) {
        var result = this.api.apifacturaVCarteraPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraReadWithHttpInfo = function (id, _options) {
        var result = this.api.apifacturaVCarteraReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraRead = function (id, _options) {
        var result = this.api.apifacturaVCarteraRead(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apifacturaVCarteraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVCarteraApi.prototype.apifacturaVCarteraUpdate = function (id, data, _options) {
        var result = this.api.apifacturaVCarteraUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApifacturaVCarteraApi;
}());
exports.PromiseApifacturaVCarteraApi = PromiseApifacturaVCarteraApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseApifacturaVentaApi = (function () {
    function PromiseApifacturaVentaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableApifacturaVentaApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApifacturaVentaApi.prototype.apifacturaVentaCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apifacturaVentaCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaCreate = function (data, _options) {
        var result = this.api.apifacturaVentaCreate(data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apifacturaVentaDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaDelete = function (id, _options) {
        var result = this.api.apifacturaVentaDelete(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaListWithHttpInfo = function (_options) {
        var result = this.api.apifacturaVentaListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaList = function (_options) {
        var result = this.api.apifacturaVentaList(_options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apifacturaVentaPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaPartialUpdate = function (id, data, _options) {
        var result = this.api.apifacturaVentaPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaReadWithHttpInfo = function (id, _options) {
        var result = this.api.apifacturaVentaReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaRead = function (id, _options) {
        var result = this.api.apifacturaVentaRead(id, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apifacturaVentaUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApifacturaVentaApi.prototype.apifacturaVentaUpdate = function (id, data, _options) {
        var result = this.api.apifacturaVentaUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApifacturaVentaApi;
}());
exports.PromiseApifacturaVentaApi = PromiseApifacturaVentaApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromiseApilotesApi = (function () {
    function PromiseApilotesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableApilotesApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApilotesApi.prototype.apilotesCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apilotesCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesCreate = function (data, _options) {
        var result = this.api.apilotesCreate(data, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apilotesDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesDelete = function (id, _options) {
        var result = this.api.apilotesDelete(id, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesListWithHttpInfo = function (productoLote, ordering, _options) {
        var result = this.api.apilotesListWithHttpInfo(productoLote, ordering, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesList = function (productoLote, ordering, _options) {
        var result = this.api.apilotesList(productoLote, ordering, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apilotesPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesPartialUpdate = function (id, data, _options) {
        var result = this.api.apilotesPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesReadWithHttpInfo = function (id, _options) {
        var result = this.api.apilotesReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesRead = function (id, _options) {
        var result = this.api.apilotesRead(id, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apilotesUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApilotesApi.prototype.apilotesUpdate = function (id, data, _options) {
        var result = this.api.apilotesUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApilotesApi;
}());
exports.PromiseApilotesApi = PromiseApilotesApi;
var ObservableAPI_10 = require("./ObservableAPI");
var PromiseApipagoApi = (function () {
    function PromiseApipagoApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableApipagoApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApipagoApi.prototype.apipagoCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apipagoCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoCreate = function (data, _options) {
        var result = this.api.apipagoCreate(data, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apipagoDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoDelete = function (id, _options) {
        var result = this.api.apipagoDelete(id, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoListWithHttpInfo = function (_options) {
        var result = this.api.apipagoListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoList = function (_options) {
        var result = this.api.apipagoList(_options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apipagoPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoPartialUpdate = function (id, data, _options) {
        var result = this.api.apipagoPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoReadWithHttpInfo = function (id, _options) {
        var result = this.api.apipagoReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoRead = function (id, _options) {
        var result = this.api.apipagoRead(id, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apipagoUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApipagoApi.prototype.apipagoUpdate = function (id, data, _options) {
        var result = this.api.apipagoUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApipagoApi;
}());
exports.PromiseApipagoApi = PromiseApipagoApi;
var ObservableAPI_11 = require("./ObservableAPI");
var PromiseApipersonasApi = (function () {
    function PromiseApipersonasApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableApipersonasApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApipersonasApi.prototype.apipersonasCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apipersonasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasCreate = function (data, _options) {
        var result = this.api.apipersonasCreate(data, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apipersonasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasDelete = function (id, _options) {
        var result = this.api.apipersonasDelete(id, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasListWithHttpInfo = function (nombre, ordering, _options) {
        var result = this.api.apipersonasListWithHttpInfo(nombre, ordering, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasList = function (nombre, ordering, _options) {
        var result = this.api.apipersonasList(nombre, ordering, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apipersonasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasPartialUpdate = function (id, data, _options) {
        var result = this.api.apipersonasPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasReadWithHttpInfo = function (id, _options) {
        var result = this.api.apipersonasReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasRead = function (id, _options) {
        var result = this.api.apipersonasRead(id, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apipersonasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApipersonasApi.prototype.apipersonasUpdate = function (id, data, _options) {
        var result = this.api.apipersonasUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApipersonasApi;
}());
exports.PromiseApipersonasApi = PromiseApipersonasApi;
var ObservableAPI_12 = require("./ObservableAPI");
var PromiseApiproductosApi = (function () {
    function PromiseApiproductosApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableApiproductosApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApiproductosApi.prototype.apiproductosCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apiproductosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosCreate = function (data, _options) {
        var result = this.api.apiproductosCreate(data, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apiproductosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosDelete = function (id, _options) {
        var result = this.api.apiproductosDelete(id, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosListWithHttpInfo = function (categoria, ordering, _options) {
        var result = this.api.apiproductosListWithHttpInfo(categoria, ordering, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosList = function (categoria, ordering, _options) {
        var result = this.api.apiproductosList(categoria, ordering, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apiproductosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosPartialUpdate = function (id, data, _options) {
        var result = this.api.apiproductosPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosReadWithHttpInfo = function (id, _options) {
        var result = this.api.apiproductosReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosRead = function (id, _options) {
        var result = this.api.apiproductosRead(id, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apiproductosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApiproductosApi.prototype.apiproductosUpdate = function (id, data, _options) {
        var result = this.api.apiproductosUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApiproductosApi;
}());
exports.PromiseApiproductosApi = PromiseApiproductosApi;
var ObservableAPI_13 = require("./ObservableAPI");
var PromiseApistockApi = (function () {
    function PromiseApistockApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableApistockApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApistockApi.prototype.apistockCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apistockCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockCreate = function (data, _options) {
        var result = this.api.apistockCreate(data, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apistockDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockDelete = function (id, _options) {
        var result = this.api.apistockDelete(id, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockListWithHttpInfo = function (cantidad, ordering, _options) {
        var result = this.api.apistockListWithHttpInfo(cantidad, ordering, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockList = function (cantidad, ordering, _options) {
        var result = this.api.apistockList(cantidad, ordering, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apistockPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockPartialUpdate = function (id, data, _options) {
        var result = this.api.apistockPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockReadWithHttpInfo = function (id, _options) {
        var result = this.api.apistockReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockRead = function (id, _options) {
        var result = this.api.apistockRead(id, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apistockUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApistockApi.prototype.apistockUpdate = function (id, data, _options) {
        var result = this.api.apistockUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApistockApi;
}());
exports.PromiseApistockApi = PromiseApistockApi;
var ObservableAPI_14 = require("./ObservableAPI");
var PromiseApiusersApi = (function () {
    function PromiseApiusersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableApiusersApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApiusersApi.prototype.apiusersCreateWithHttpInfo = function (data, _options) {
        var result = this.api.apiusersCreateWithHttpInfo(data, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersCreate = function (data, _options) {
        var result = this.api.apiusersCreate(data, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.apiusersDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersDelete = function (id, _options) {
        var result = this.api.apiusersDelete(id, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersListWithHttpInfo = function (_options) {
        var result = this.api.apiusersListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersList = function (_options) {
        var result = this.api.apiusersList(_options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersPartialUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apiusersPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersPartialUpdate = function (id, data, _options) {
        var result = this.api.apiusersPartialUpdate(id, data, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersReadWithHttpInfo = function (id, _options) {
        var result = this.api.apiusersReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersRead = function (id, _options) {
        var result = this.api.apiusersRead(id, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersUpdateWithHttpInfo = function (id, data, _options) {
        var result = this.api.apiusersUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    };
    PromiseApiusersApi.prototype.apiusersUpdate = function (id, data, _options) {
        var result = this.api.apiusersUpdate(id, data, _options);
        return result.toPromise();
    };
    return PromiseApiusersApi;
}());
exports.PromiseApiusersApi = PromiseApiusersApi;
//# sourceMappingURL=PromiseAPI.js.map