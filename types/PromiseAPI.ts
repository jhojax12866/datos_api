import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Carteras } from '../models/Carteras';
import { Categorias } from '../models/Categorias';
import { DetalleCompras } from '../models/DetalleCompras';
import { DetalleVentas } from '../models/DetalleVentas';
import { FacturaCompras } from '../models/FacturaCompras';
import { FacturaVCarteras } from '../models/FacturaVCarteras';
import { FacturaVentas } from '../models/FacturaVentas';
import { Lotes } from '../models/Lotes';
import { Pagos } from '../models/Pagos';
import { Personas } from '../models/Personas';
import { Productos } from '../models/Productos';
import { Stock } from '../models/Stock';
import { TokenObtainPair } from '../models/TokenObtainPair';
import { User } from '../models/User';
import { ObservableApiauthApi } from './ObservableAPI';

import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";
export class PromiseApiauthApi {
    private api: ObservableApiauthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiauthApiRequestFactory,
        responseProcessor?: ApiauthApiResponseProcessor
    ) {
        this.api = new ObservableApiauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreateWithHttpInfo(data: TokenObtainPair, _options?: Configuration): Promise<HttpInfo<TokenObtainPair>> {
        const result = this.api.apiauthLoginCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Promise<TokenObtainPair> {
        const result = this.api.apiauthLoginCreate(data, _options);
        return result.toPromise();
    }

    /**
     */
    public apiauthMeListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiauthMeListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiauthMeList(_options?: Configuration): Promise<void> {
        const result = this.api.apiauthMeList(_options);
        return result.toPromise();
    }


}



import { ObservableApicarteraApi } from './ObservableAPI';

import { ApicarteraApiRequestFactory, ApicarteraApiResponseProcessor} from "../apis/ApicarteraApi";
export class PromiseApicarteraApi {
    private api: ObservableApicarteraApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicarteraApiRequestFactory,
        responseProcessor?: ApicarteraApiResponseProcessor
    ) {
        this.api = new ObservableApicarteraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apicarteraCreateWithHttpInfo(data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>> {
        const result = this.api.apicarteraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apicarteraCreate(data: Carteras, _options?: Configuration): Promise<Carteras> {
        const result = this.api.apicarteraCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public apicarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apicarteraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public apicarteraDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apicarteraDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apicarteraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Carteras>>> {
        const result = this.api.apicarteraListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apicarteraList(_options?: Configuration): Promise<Array<Carteras>> {
        const result = this.api.apicarteraList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public apicarteraPartialUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>> {
        const result = this.api.apicarteraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public apicarteraPartialUpdate(id: number, data: Carteras, _options?: Configuration): Promise<Carteras> {
        const result = this.api.apicarteraPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public apicarteraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Carteras>> {
        const result = this.api.apicarteraReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public apicarteraRead(id: number, _options?: Configuration): Promise<Carteras> {
        const result = this.api.apicarteraRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public apicarteraUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>> {
        const result = this.api.apicarteraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public apicarteraUpdate(id: number, data: Carteras, _options?: Configuration): Promise<Carteras> {
        const result = this.api.apicarteraUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApicategoriasApi } from './ObservableAPI';

import { ApicategoriasApiRequestFactory, ApicategoriasApiResponseProcessor} from "../apis/ApicategoriasApi";
export class PromiseApicategoriasApi {
    private api: ObservableApicategoriasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicategoriasApiRequestFactory,
        responseProcessor?: ApicategoriasApiResponseProcessor
    ) {
        this.api = new ObservableApicategoriasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apicategoriasCreateWithHttpInfo(data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>> {
        const result = this.api.apicategoriasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apicategoriasCreate(data: Categorias, _options?: Configuration): Promise<Categorias> {
        const result = this.api.apicategoriasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public apicategoriasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apicategoriasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public apicategoriasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apicategoriasDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apicategoriasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Categorias>>> {
        const result = this.api.apicategoriasListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apicategoriasList(_options?: Configuration): Promise<Array<Categorias>> {
        const result = this.api.apicategoriasList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public apicategoriasPartialUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>> {
        const result = this.api.apicategoriasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public apicategoriasPartialUpdate(id: number, data: Categorias, _options?: Configuration): Promise<Categorias> {
        const result = this.api.apicategoriasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public apicategoriasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Categorias>> {
        const result = this.api.apicategoriasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public apicategoriasRead(id: number, _options?: Configuration): Promise<Categorias> {
        const result = this.api.apicategoriasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public apicategoriasUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>> {
        const result = this.api.apicategoriasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public apicategoriasUpdate(id: number, data: Categorias, _options?: Configuration): Promise<Categorias> {
        const result = this.api.apicategoriasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApidetalleCompraApi } from './ObservableAPI';

import { ApidetalleCompraApiRequestFactory, ApidetalleCompraApiResponseProcessor} from "../apis/ApidetalleCompraApi";
export class PromiseApidetalleCompraApi {
    private api: ObservableApidetalleCompraApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApidetalleCompraApiRequestFactory,
        responseProcessor?: ApidetalleCompraApiResponseProcessor
    ) {
        this.api = new ObservableApidetalleCompraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apidetalleCompraCreateWithHttpInfo(data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        const result = this.api.apidetalleCompraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apidetalleCompraCreate(data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras> {
        const result = this.api.apidetalleCompraCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public apidetalleCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apidetalleCompraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public apidetalleCompraDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apidetalleCompraDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apidetalleCompraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DetalleCompras>>> {
        const result = this.api.apidetalleCompraListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apidetalleCompraList(_options?: Configuration): Promise<Array<DetalleCompras>> {
        const result = this.api.apidetalleCompraList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public apidetalleCompraPartialUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        const result = this.api.apidetalleCompraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public apidetalleCompraPartialUpdate(id: number, data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras> {
        const result = this.api.apidetalleCompraPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public apidetalleCompraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        const result = this.api.apidetalleCompraReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public apidetalleCompraRead(id: number, _options?: Configuration): Promise<DetalleCompras> {
        const result = this.api.apidetalleCompraRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public apidetalleCompraUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        const result = this.api.apidetalleCompraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public apidetalleCompraUpdate(id: number, data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras> {
        const result = this.api.apidetalleCompraUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApidetalleVentaApi } from './ObservableAPI';

import { ApidetalleVentaApiRequestFactory, ApidetalleVentaApiResponseProcessor} from "../apis/ApidetalleVentaApi";
export class PromiseApidetalleVentaApi {
    private api: ObservableApidetalleVentaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApidetalleVentaApiRequestFactory,
        responseProcessor?: ApidetalleVentaApiResponseProcessor
    ) {
        this.api = new ObservableApidetalleVentaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apidetalleVentaCreateWithHttpInfo(data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        const result = this.api.apidetalleVentaCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apidetalleVentaCreate(data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas> {
        const result = this.api.apidetalleVentaCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public apidetalleVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apidetalleVentaDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public apidetalleVentaDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apidetalleVentaDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apidetalleVentaListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DetalleVentas>>> {
        const result = this.api.apidetalleVentaListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apidetalleVentaList(_options?: Configuration): Promise<Array<DetalleVentas>> {
        const result = this.api.apidetalleVentaList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public apidetalleVentaPartialUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        const result = this.api.apidetalleVentaPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public apidetalleVentaPartialUpdate(id: number, data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas> {
        const result = this.api.apidetalleVentaPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public apidetalleVentaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        const result = this.api.apidetalleVentaReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public apidetalleVentaRead(id: number, _options?: Configuration): Promise<DetalleVentas> {
        const result = this.api.apidetalleVentaRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public apidetalleVentaUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        const result = this.api.apidetalleVentaUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public apidetalleVentaUpdate(id: number, data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas> {
        const result = this.api.apidetalleVentaUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApifacturaCompraApi } from './ObservableAPI';

import { ApifacturaCompraApiRequestFactory, ApifacturaCompraApiResponseProcessor} from "../apis/ApifacturaCompraApi";
export class PromiseApifacturaCompraApi {
    private api: ObservableApifacturaCompraApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApifacturaCompraApiRequestFactory,
        responseProcessor?: ApifacturaCompraApiResponseProcessor
    ) {
        this.api = new ObservableApifacturaCompraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apifacturaCompraCreateWithHttpInfo(data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        const result = this.api.apifacturaCompraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apifacturaCompraCreate(data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras> {
        const result = this.api.apifacturaCompraCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public apifacturaCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apifacturaCompraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public apifacturaCompraDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apifacturaCompraDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apifacturaCompraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaCompras>>> {
        const result = this.api.apifacturaCompraListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apifacturaCompraList(_options?: Configuration): Promise<Array<FacturaCompras>> {
        const result = this.api.apifacturaCompraList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public apifacturaCompraPartialUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        const result = this.api.apifacturaCompraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public apifacturaCompraPartialUpdate(id: number, data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras> {
        const result = this.api.apifacturaCompraPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public apifacturaCompraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        const result = this.api.apifacturaCompraReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public apifacturaCompraRead(id: number, _options?: Configuration): Promise<FacturaCompras> {
        const result = this.api.apifacturaCompraRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public apifacturaCompraUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        const result = this.api.apifacturaCompraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public apifacturaCompraUpdate(id: number, data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras> {
        const result = this.api.apifacturaCompraUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApifacturaVCarteraApi } from './ObservableAPI';

import { ApifacturaVCarteraApiRequestFactory, ApifacturaVCarteraApiResponseProcessor} from "../apis/ApifacturaVCarteraApi";
export class PromiseApifacturaVCarteraApi {
    private api: ObservableApifacturaVCarteraApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApifacturaVCarteraApiRequestFactory,
        responseProcessor?: ApifacturaVCarteraApiResponseProcessor
    ) {
        this.api = new ObservableApifacturaVCarteraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apifacturaVCarteraCreateWithHttpInfo(data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        const result = this.api.apifacturaVCarteraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apifacturaVCarteraCreate(data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras> {
        const result = this.api.apifacturaVCarteraCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public apifacturaVCarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apifacturaVCarteraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public apifacturaVCarteraDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apifacturaVCarteraDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apifacturaVCarteraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaVCarteras>>> {
        const result = this.api.apifacturaVCarteraListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apifacturaVCarteraList(_options?: Configuration): Promise<Array<FacturaVCarteras>> {
        const result = this.api.apifacturaVCarteraList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public apifacturaVCarteraPartialUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        const result = this.api.apifacturaVCarteraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public apifacturaVCarteraPartialUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras> {
        const result = this.api.apifacturaVCarteraPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public apifacturaVCarteraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        const result = this.api.apifacturaVCarteraReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public apifacturaVCarteraRead(id: number, _options?: Configuration): Promise<FacturaVCarteras> {
        const result = this.api.apifacturaVCarteraRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public apifacturaVCarteraUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        const result = this.api.apifacturaVCarteraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public apifacturaVCarteraUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras> {
        const result = this.api.apifacturaVCarteraUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApifacturaVentaApi } from './ObservableAPI';

import { ApifacturaVentaApiRequestFactory, ApifacturaVentaApiResponseProcessor} from "../apis/ApifacturaVentaApi";
export class PromiseApifacturaVentaApi {
    private api: ObservableApifacturaVentaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApifacturaVentaApiRequestFactory,
        responseProcessor?: ApifacturaVentaApiResponseProcessor
    ) {
        this.api = new ObservableApifacturaVentaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apifacturaVentaCreateWithHttpInfo(data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        const result = this.api.apifacturaVentaCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apifacturaVentaCreate(data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas> {
        const result = this.api.apifacturaVentaCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public apifacturaVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apifacturaVentaDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public apifacturaVentaDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apifacturaVentaDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apifacturaVentaListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaVentas>>> {
        const result = this.api.apifacturaVentaListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apifacturaVentaList(_options?: Configuration): Promise<Array<FacturaVentas>> {
        const result = this.api.apifacturaVentaList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public apifacturaVentaPartialUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        const result = this.api.apifacturaVentaPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public apifacturaVentaPartialUpdate(id: number, data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas> {
        const result = this.api.apifacturaVentaPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public apifacturaVentaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        const result = this.api.apifacturaVentaReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public apifacturaVentaRead(id: number, _options?: Configuration): Promise<FacturaVentas> {
        const result = this.api.apifacturaVentaRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public apifacturaVentaUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        const result = this.api.apifacturaVentaUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public apifacturaVentaUpdate(id: number, data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas> {
        const result = this.api.apifacturaVentaUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApilotesApi } from './ObservableAPI';

import { ApilotesApiRequestFactory, ApilotesApiResponseProcessor} from "../apis/ApilotesApi";
export class PromiseApilotesApi {
    private api: ObservableApilotesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApilotesApiRequestFactory,
        responseProcessor?: ApilotesApiResponseProcessor
    ) {
        this.api = new ObservableApilotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apilotesCreateWithHttpInfo(data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>> {
        const result = this.api.apilotesCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apilotesCreate(data: Lotes, _options?: Configuration): Promise<Lotes> {
        const result = this.api.apilotesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public apilotesDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apilotesDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public apilotesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apilotesDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param productoLote producto_lote
     * @param ordering Which field to use when ordering the results.
     */
    public apilotesListWithHttpInfo(productoLote?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Lotes>>> {
        const result = this.api.apilotesListWithHttpInfo(productoLote, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param productoLote producto_lote
     * @param ordering Which field to use when ordering the results.
     */
    public apilotesList(productoLote?: string, ordering?: string, _options?: Configuration): Promise<Array<Lotes>> {
        const result = this.api.apilotesList(productoLote, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public apilotesPartialUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>> {
        const result = this.api.apilotesPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public apilotesPartialUpdate(id: number, data: Lotes, _options?: Configuration): Promise<Lotes> {
        const result = this.api.apilotesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public apilotesReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Lotes>> {
        const result = this.api.apilotesReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public apilotesRead(id: number, _options?: Configuration): Promise<Lotes> {
        const result = this.api.apilotesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public apilotesUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>> {
        const result = this.api.apilotesUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public apilotesUpdate(id: number, data: Lotes, _options?: Configuration): Promise<Lotes> {
        const result = this.api.apilotesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApipagoApi } from './ObservableAPI';

import { ApipagoApiRequestFactory, ApipagoApiResponseProcessor} from "../apis/ApipagoApi";
export class PromiseApipagoApi {
    private api: ObservableApipagoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApipagoApiRequestFactory,
        responseProcessor?: ApipagoApiResponseProcessor
    ) {
        this.api = new ObservableApipagoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apipagoCreateWithHttpInfo(data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.apipagoCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apipagoCreate(data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.apipagoCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public apipagoDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apipagoDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public apipagoDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apipagoDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apipagoListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Pagos>>> {
        const result = this.api.apipagoListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apipagoList(_options?: Configuration): Promise<Array<Pagos>> {
        const result = this.api.apipagoList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public apipagoPartialUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.apipagoPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public apipagoPartialUpdate(id: number, data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.apipagoPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public apipagoReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.apipagoReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public apipagoRead(id: number, _options?: Configuration): Promise<Pagos> {
        const result = this.api.apipagoRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public apipagoUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.apipagoUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public apipagoUpdate(id: number, data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.apipagoUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApipersonasApi } from './ObservableAPI';

import { ApipersonasApiRequestFactory, ApipersonasApiResponseProcessor} from "../apis/ApipersonasApi";
export class PromiseApipersonasApi {
    private api: ObservableApipersonasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApipersonasApiRequestFactory,
        responseProcessor?: ApipersonasApiResponseProcessor
    ) {
        this.api = new ObservableApipersonasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apipersonasCreateWithHttpInfo(data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>> {
        const result = this.api.apipersonasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apipersonasCreate(data: Personas, _options?: Configuration): Promise<Personas> {
        const result = this.api.apipersonasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public apipersonasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apipersonasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public apipersonasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apipersonasDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param nombre nombre
     * @param ordering Which field to use when ordering the results.
     */
    public apipersonasListWithHttpInfo(nombre?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Personas>>> {
        const result = this.api.apipersonasListWithHttpInfo(nombre, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param nombre nombre
     * @param ordering Which field to use when ordering the results.
     */
    public apipersonasList(nombre?: string, ordering?: string, _options?: Configuration): Promise<Array<Personas>> {
        const result = this.api.apipersonasList(nombre, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public apipersonasPartialUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>> {
        const result = this.api.apipersonasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public apipersonasPartialUpdate(id: number, data: Personas, _options?: Configuration): Promise<Personas> {
        const result = this.api.apipersonasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public apipersonasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Personas>> {
        const result = this.api.apipersonasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public apipersonasRead(id: number, _options?: Configuration): Promise<Personas> {
        const result = this.api.apipersonasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public apipersonasUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>> {
        const result = this.api.apipersonasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public apipersonasUpdate(id: number, data: Personas, _options?: Configuration): Promise<Personas> {
        const result = this.api.apipersonasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiproductosApi } from './ObservableAPI';

import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor} from "../apis/ApiproductosApi";
export class PromiseApiproductosApi {
    private api: ObservableApiproductosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiproductosApiRequestFactory,
        responseProcessor?: ApiproductosApiResponseProcessor
    ) {
        this.api = new ObservableApiproductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiproductosCreateWithHttpInfo(data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.apiproductosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiproductosCreate(data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.apiproductosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public apiproductosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiproductosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public apiproductosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiproductosDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param categoria categoria
     * @param ordering Which field to use when ordering the results.
     */
    public apiproductosListWithHttpInfo(categoria?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Productos>>> {
        const result = this.api.apiproductosListWithHttpInfo(categoria, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param categoria categoria
     * @param ordering Which field to use when ordering the results.
     */
    public apiproductosList(categoria?: string, ordering?: string, _options?: Configuration): Promise<Array<Productos>> {
        const result = this.api.apiproductosList(categoria, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public apiproductosPartialUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.apiproductosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public apiproductosPartialUpdate(id: number, data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.apiproductosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public apiproductosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.apiproductosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public apiproductosRead(id: number, _options?: Configuration): Promise<Productos> {
        const result = this.api.apiproductosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public apiproductosUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.apiproductosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public apiproductosUpdate(id: number, data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.apiproductosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApistockApi } from './ObservableAPI';

import { ApistockApiRequestFactory, ApistockApiResponseProcessor} from "../apis/ApistockApi";
export class PromiseApistockApi {
    private api: ObservableApistockApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApistockApiRequestFactory,
        responseProcessor?: ApistockApiResponseProcessor
    ) {
        this.api = new ObservableApistockApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apistockCreateWithHttpInfo(data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>> {
        const result = this.api.apistockCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apistockCreate(data: Stock, _options?: Configuration): Promise<Stock> {
        const result = this.api.apistockCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public apistockDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apistockDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public apistockDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apistockDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param cantidad cantidad
     * @param ordering Which field to use when ordering the results.
     */
    public apistockListWithHttpInfo(cantidad?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Stock>>> {
        const result = this.api.apistockListWithHttpInfo(cantidad, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param cantidad cantidad
     * @param ordering Which field to use when ordering the results.
     */
    public apistockList(cantidad?: string, ordering?: string, _options?: Configuration): Promise<Array<Stock>> {
        const result = this.api.apistockList(cantidad, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public apistockPartialUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>> {
        const result = this.api.apistockPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public apistockPartialUpdate(id: number, data: Stock, _options?: Configuration): Promise<Stock> {
        const result = this.api.apistockPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public apistockReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Stock>> {
        const result = this.api.apistockReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public apistockRead(id: number, _options?: Configuration): Promise<Stock> {
        const result = this.api.apistockRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public apistockUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>> {
        const result = this.api.apistockUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public apistockUpdate(id: number, data: Stock, _options?: Configuration): Promise<Stock> {
        const result = this.api.apistockUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiusersApi } from './ObservableAPI';

import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor} from "../apis/ApiusersApi";
export class PromiseApiusersApi {
    private api: ObservableApiusersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiusersApiRequestFactory,
        responseProcessor?: ApiusersApiResponseProcessor
    ) {
        this.api = new ObservableApiusersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiusersCreateWithHttpInfo(data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiusersCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiusersCreate(data: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiusersCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiusersDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiusersDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiusersListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<User>>> {
        const result = this.api.apiusersListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiusersList(_options?: Configuration): Promise<Array<User>> {
        const result = this.api.apiusersList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersPartialUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiusersPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersPartialUpdate(id: number, data: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiusersPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiusersReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersRead(id: number, _options?: Configuration): Promise<User> {
        const result = this.api.apiusersRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiusersUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersUpdate(id: number, data: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiusersUpdate(id, data, _options);
        return result.toPromise();
    }


}



