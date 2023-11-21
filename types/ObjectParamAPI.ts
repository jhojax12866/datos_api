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

import { ObservableApiauthApi } from "./ObservableAPI";
import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";

export interface ApiauthApiApiauthLoginCreateRequest {
    /**
     * 
     * @type TokenObtainPair
     * @memberof ApiauthApiapiauthLoginCreate
     */
    data: TokenObtainPair
}

export interface ApiauthApiApiauthMeListRequest {
}

export class ObjectApiauthApi {
    private api: ObservableApiauthApi

    public constructor(configuration: Configuration, requestFactory?: ApiauthApiRequestFactory, responseProcessor?: ApiauthApiResponseProcessor) {
        this.api = new ObservableApiauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param param the request object
     */
    public apiauthLoginCreateWithHttpInfo(param: ApiauthApiApiauthLoginCreateRequest, options?: Configuration): Promise<HttpInfo<TokenObtainPair>> {
        return this.api.apiauthLoginCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param param the request object
     */
    public apiauthLoginCreate(param: ApiauthApiApiauthLoginCreateRequest, options?: Configuration): Promise<TokenObtainPair> {
        return this.api.apiauthLoginCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiauthMeListWithHttpInfo(param: ApiauthApiApiauthMeListRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiauthMeListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiauthMeList(param: ApiauthApiApiauthMeListRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiauthMeList( options).toPromise();
    }

}

import { ObservableApicarteraApi } from "./ObservableAPI";
import { ApicarteraApiRequestFactory, ApicarteraApiResponseProcessor} from "../apis/ApicarteraApi";

export interface ApicarteraApiApicarteraCreateRequest {
    /**
     * 
     * @type Carteras
     * @memberof ApicarteraApiapicarteraCreate
     */
    data: Carteras
}

export interface ApicarteraApiApicarteraDeleteRequest {
    /**
     * A unique integer value identifying this cartera.
     * @type number
     * @memberof ApicarteraApiapicarteraDelete
     */
    id: number
}

export interface ApicarteraApiApicarteraListRequest {
}

export interface ApicarteraApiApicarteraPartialUpdateRequest {
    /**
     * A unique integer value identifying this cartera.
     * @type number
     * @memberof ApicarteraApiapicarteraPartialUpdate
     */
    id: number
    /**
     * 
     * @type Carteras
     * @memberof ApicarteraApiapicarteraPartialUpdate
     */
    data: Carteras
}

export interface ApicarteraApiApicarteraReadRequest {
    /**
     * A unique integer value identifying this cartera.
     * @type number
     * @memberof ApicarteraApiapicarteraRead
     */
    id: number
}

export interface ApicarteraApiApicarteraUpdateRequest {
    /**
     * A unique integer value identifying this cartera.
     * @type number
     * @memberof ApicarteraApiapicarteraUpdate
     */
    id: number
    /**
     * 
     * @type Carteras
     * @memberof ApicarteraApiapicarteraUpdate
     */
    data: Carteras
}

export class ObjectApicarteraApi {
    private api: ObservableApicarteraApi

    public constructor(configuration: Configuration, requestFactory?: ApicarteraApiRequestFactory, responseProcessor?: ApicarteraApiResponseProcessor) {
        this.api = new ObservableApicarteraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apicarteraCreateWithHttpInfo(param: ApicarteraApiApicarteraCreateRequest, options?: Configuration): Promise<HttpInfo<Carteras>> {
        return this.api.apicarteraCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraCreate(param: ApicarteraApiApicarteraCreateRequest, options?: Configuration): Promise<Carteras> {
        return this.api.apicarteraCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraDeleteWithHttpInfo(param: ApicarteraApiApicarteraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apicarteraDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraDelete(param: ApicarteraApiApicarteraDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apicarteraDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraListWithHttpInfo(param: ApicarteraApiApicarteraListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Carteras>>> {
        return this.api.apicarteraListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraList(param: ApicarteraApiApicarteraListRequest = {}, options?: Configuration): Promise<Array<Carteras>> {
        return this.api.apicarteraList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraPartialUpdateWithHttpInfo(param: ApicarteraApiApicarteraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Carteras>> {
        return this.api.apicarteraPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraPartialUpdate(param: ApicarteraApiApicarteraPartialUpdateRequest, options?: Configuration): Promise<Carteras> {
        return this.api.apicarteraPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraReadWithHttpInfo(param: ApicarteraApiApicarteraReadRequest, options?: Configuration): Promise<HttpInfo<Carteras>> {
        return this.api.apicarteraReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraRead(param: ApicarteraApiApicarteraReadRequest, options?: Configuration): Promise<Carteras> {
        return this.api.apicarteraRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraUpdateWithHttpInfo(param: ApicarteraApiApicarteraUpdateRequest, options?: Configuration): Promise<HttpInfo<Carteras>> {
        return this.api.apicarteraUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicarteraUpdate(param: ApicarteraApiApicarteraUpdateRequest, options?: Configuration): Promise<Carteras> {
        return this.api.apicarteraUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApicategoriasApi } from "./ObservableAPI";
import { ApicategoriasApiRequestFactory, ApicategoriasApiResponseProcessor} from "../apis/ApicategoriasApi";

export interface ApicategoriasApiApicategoriasCreateRequest {
    /**
     * 
     * @type Categorias
     * @memberof ApicategoriasApiapicategoriasCreate
     */
    data: Categorias
}

export interface ApicategoriasApiApicategoriasDeleteRequest {
    /**
     * A unique integer value identifying this categoria.
     * @type number
     * @memberof ApicategoriasApiapicategoriasDelete
     */
    id: number
}

export interface ApicategoriasApiApicategoriasListRequest {
}

export interface ApicategoriasApiApicategoriasPartialUpdateRequest {
    /**
     * A unique integer value identifying this categoria.
     * @type number
     * @memberof ApicategoriasApiapicategoriasPartialUpdate
     */
    id: number
    /**
     * 
     * @type Categorias
     * @memberof ApicategoriasApiapicategoriasPartialUpdate
     */
    data: Categorias
}

export interface ApicategoriasApiApicategoriasReadRequest {
    /**
     * A unique integer value identifying this categoria.
     * @type number
     * @memberof ApicategoriasApiapicategoriasRead
     */
    id: number
}

export interface ApicategoriasApiApicategoriasUpdateRequest {
    /**
     * A unique integer value identifying this categoria.
     * @type number
     * @memberof ApicategoriasApiapicategoriasUpdate
     */
    id: number
    /**
     * 
     * @type Categorias
     * @memberof ApicategoriasApiapicategoriasUpdate
     */
    data: Categorias
}

export class ObjectApicategoriasApi {
    private api: ObservableApicategoriasApi

    public constructor(configuration: Configuration, requestFactory?: ApicategoriasApiRequestFactory, responseProcessor?: ApicategoriasApiResponseProcessor) {
        this.api = new ObservableApicategoriasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apicategoriasCreateWithHttpInfo(param: ApicategoriasApiApicategoriasCreateRequest, options?: Configuration): Promise<HttpInfo<Categorias>> {
        return this.api.apicategoriasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasCreate(param: ApicategoriasApiApicategoriasCreateRequest, options?: Configuration): Promise<Categorias> {
        return this.api.apicategoriasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasDeleteWithHttpInfo(param: ApicategoriasApiApicategoriasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apicategoriasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasDelete(param: ApicategoriasApiApicategoriasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apicategoriasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasListWithHttpInfo(param: ApicategoriasApiApicategoriasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Categorias>>> {
        return this.api.apicategoriasListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasList(param: ApicategoriasApiApicategoriasListRequest = {}, options?: Configuration): Promise<Array<Categorias>> {
        return this.api.apicategoriasList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasPartialUpdateWithHttpInfo(param: ApicategoriasApiApicategoriasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Categorias>> {
        return this.api.apicategoriasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasPartialUpdate(param: ApicategoriasApiApicategoriasPartialUpdateRequest, options?: Configuration): Promise<Categorias> {
        return this.api.apicategoriasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasReadWithHttpInfo(param: ApicategoriasApiApicategoriasReadRequest, options?: Configuration): Promise<HttpInfo<Categorias>> {
        return this.api.apicategoriasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasRead(param: ApicategoriasApiApicategoriasReadRequest, options?: Configuration): Promise<Categorias> {
        return this.api.apicategoriasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasUpdateWithHttpInfo(param: ApicategoriasApiApicategoriasUpdateRequest, options?: Configuration): Promise<HttpInfo<Categorias>> {
        return this.api.apicategoriasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicategoriasUpdate(param: ApicategoriasApiApicategoriasUpdateRequest, options?: Configuration): Promise<Categorias> {
        return this.api.apicategoriasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApidetalleCompraApi } from "./ObservableAPI";
import { ApidetalleCompraApiRequestFactory, ApidetalleCompraApiResponseProcessor} from "../apis/ApidetalleCompraApi";

export interface ApidetalleCompraApiApidetalleCompraCreateRequest {
    /**
     * 
     * @type DetalleCompras
     * @memberof ApidetalleCompraApiapidetalleCompraCreate
     */
    data: DetalleCompras
}

export interface ApidetalleCompraApiApidetalleCompraDeleteRequest {
    /**
     * A unique integer value identifying this detalle_ compra.
     * @type number
     * @memberof ApidetalleCompraApiapidetalleCompraDelete
     */
    id: number
}

export interface ApidetalleCompraApiApidetalleCompraListRequest {
}

export interface ApidetalleCompraApiApidetalleCompraPartialUpdateRequest {
    /**
     * A unique integer value identifying this detalle_ compra.
     * @type number
     * @memberof ApidetalleCompraApiapidetalleCompraPartialUpdate
     */
    id: number
    /**
     * 
     * @type DetalleCompras
     * @memberof ApidetalleCompraApiapidetalleCompraPartialUpdate
     */
    data: DetalleCompras
}

export interface ApidetalleCompraApiApidetalleCompraReadRequest {
    /**
     * A unique integer value identifying this detalle_ compra.
     * @type number
     * @memberof ApidetalleCompraApiapidetalleCompraRead
     */
    id: number
}

export interface ApidetalleCompraApiApidetalleCompraUpdateRequest {
    /**
     * A unique integer value identifying this detalle_ compra.
     * @type number
     * @memberof ApidetalleCompraApiapidetalleCompraUpdate
     */
    id: number
    /**
     * 
     * @type DetalleCompras
     * @memberof ApidetalleCompraApiapidetalleCompraUpdate
     */
    data: DetalleCompras
}

export class ObjectApidetalleCompraApi {
    private api: ObservableApidetalleCompraApi

    public constructor(configuration: Configuration, requestFactory?: ApidetalleCompraApiRequestFactory, responseProcessor?: ApidetalleCompraApiResponseProcessor) {
        this.api = new ObservableApidetalleCompraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraCreateWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraCreateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        return this.api.apidetalleCompraCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraCreate(param: ApidetalleCompraApiApidetalleCompraCreateRequest, options?: Configuration): Promise<DetalleCompras> {
        return this.api.apidetalleCompraCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraDeleteWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apidetalleCompraDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraDelete(param: ApidetalleCompraApiApidetalleCompraDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apidetalleCompraDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraListWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DetalleCompras>>> {
        return this.api.apidetalleCompraListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraList(param: ApidetalleCompraApiApidetalleCompraListRequest = {}, options?: Configuration): Promise<Array<DetalleCompras>> {
        return this.api.apidetalleCompraList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraPartialUpdateWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        return this.api.apidetalleCompraPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraPartialUpdate(param: ApidetalleCompraApiApidetalleCompraPartialUpdateRequest, options?: Configuration): Promise<DetalleCompras> {
        return this.api.apidetalleCompraPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraReadWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraReadRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        return this.api.apidetalleCompraReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraRead(param: ApidetalleCompraApiApidetalleCompraReadRequest, options?: Configuration): Promise<DetalleCompras> {
        return this.api.apidetalleCompraRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraUpdateWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        return this.api.apidetalleCompraUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleCompraUpdate(param: ApidetalleCompraApiApidetalleCompraUpdateRequest, options?: Configuration): Promise<DetalleCompras> {
        return this.api.apidetalleCompraUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApidetalleVentaApi } from "./ObservableAPI";
import { ApidetalleVentaApiRequestFactory, ApidetalleVentaApiResponseProcessor} from "../apis/ApidetalleVentaApi";

export interface ApidetalleVentaApiApidetalleVentaCreateRequest {
    /**
     * 
     * @type DetalleVentas
     * @memberof ApidetalleVentaApiapidetalleVentaCreate
     */
    data: DetalleVentas
}

export interface ApidetalleVentaApiApidetalleVentaDeleteRequest {
    /**
     * A unique integer value identifying this detalle_ venta.
     * @type number
     * @memberof ApidetalleVentaApiapidetalleVentaDelete
     */
    id: number
}

export interface ApidetalleVentaApiApidetalleVentaListRequest {
}

export interface ApidetalleVentaApiApidetalleVentaPartialUpdateRequest {
    /**
     * A unique integer value identifying this detalle_ venta.
     * @type number
     * @memberof ApidetalleVentaApiapidetalleVentaPartialUpdate
     */
    id: number
    /**
     * 
     * @type DetalleVentas
     * @memberof ApidetalleVentaApiapidetalleVentaPartialUpdate
     */
    data: DetalleVentas
}

export interface ApidetalleVentaApiApidetalleVentaReadRequest {
    /**
     * A unique integer value identifying this detalle_ venta.
     * @type number
     * @memberof ApidetalleVentaApiapidetalleVentaRead
     */
    id: number
}

export interface ApidetalleVentaApiApidetalleVentaUpdateRequest {
    /**
     * A unique integer value identifying this detalle_ venta.
     * @type number
     * @memberof ApidetalleVentaApiapidetalleVentaUpdate
     */
    id: number
    /**
     * 
     * @type DetalleVentas
     * @memberof ApidetalleVentaApiapidetalleVentaUpdate
     */
    data: DetalleVentas
}

export class ObjectApidetalleVentaApi {
    private api: ObservableApidetalleVentaApi

    public constructor(configuration: Configuration, requestFactory?: ApidetalleVentaApiRequestFactory, responseProcessor?: ApidetalleVentaApiResponseProcessor) {
        this.api = new ObservableApidetalleVentaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaCreateWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaCreateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        return this.api.apidetalleVentaCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaCreate(param: ApidetalleVentaApiApidetalleVentaCreateRequest, options?: Configuration): Promise<DetalleVentas> {
        return this.api.apidetalleVentaCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaDeleteWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apidetalleVentaDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaDelete(param: ApidetalleVentaApiApidetalleVentaDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apidetalleVentaDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaListWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DetalleVentas>>> {
        return this.api.apidetalleVentaListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaList(param: ApidetalleVentaApiApidetalleVentaListRequest = {}, options?: Configuration): Promise<Array<DetalleVentas>> {
        return this.api.apidetalleVentaList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaPartialUpdateWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        return this.api.apidetalleVentaPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaPartialUpdate(param: ApidetalleVentaApiApidetalleVentaPartialUpdateRequest, options?: Configuration): Promise<DetalleVentas> {
        return this.api.apidetalleVentaPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaReadWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaReadRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        return this.api.apidetalleVentaReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaRead(param: ApidetalleVentaApiApidetalleVentaReadRequest, options?: Configuration): Promise<DetalleVentas> {
        return this.api.apidetalleVentaRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaUpdateWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        return this.api.apidetalleVentaUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetalleVentaUpdate(param: ApidetalleVentaApiApidetalleVentaUpdateRequest, options?: Configuration): Promise<DetalleVentas> {
        return this.api.apidetalleVentaUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApifacturaCompraApi } from "./ObservableAPI";
import { ApifacturaCompraApiRequestFactory, ApifacturaCompraApiResponseProcessor} from "../apis/ApifacturaCompraApi";

export interface ApifacturaCompraApiApifacturaCompraCreateRequest {
    /**
     * 
     * @type FacturaCompras
     * @memberof ApifacturaCompraApiapifacturaCompraCreate
     */
    data: FacturaCompras
}

export interface ApifacturaCompraApiApifacturaCompraDeleteRequest {
    /**
     * A unique integer value identifying this factura_ compra.
     * @type number
     * @memberof ApifacturaCompraApiapifacturaCompraDelete
     */
    id: number
}

export interface ApifacturaCompraApiApifacturaCompraListRequest {
}

export interface ApifacturaCompraApiApifacturaCompraPartialUpdateRequest {
    /**
     * A unique integer value identifying this factura_ compra.
     * @type number
     * @memberof ApifacturaCompraApiapifacturaCompraPartialUpdate
     */
    id: number
    /**
     * 
     * @type FacturaCompras
     * @memberof ApifacturaCompraApiapifacturaCompraPartialUpdate
     */
    data: FacturaCompras
}

export interface ApifacturaCompraApiApifacturaCompraReadRequest {
    /**
     * A unique integer value identifying this factura_ compra.
     * @type number
     * @memberof ApifacturaCompraApiapifacturaCompraRead
     */
    id: number
}

export interface ApifacturaCompraApiApifacturaCompraUpdateRequest {
    /**
     * A unique integer value identifying this factura_ compra.
     * @type number
     * @memberof ApifacturaCompraApiapifacturaCompraUpdate
     */
    id: number
    /**
     * 
     * @type FacturaCompras
     * @memberof ApifacturaCompraApiapifacturaCompraUpdate
     */
    data: FacturaCompras
}

export class ObjectApifacturaCompraApi {
    private api: ObservableApifacturaCompraApi

    public constructor(configuration: Configuration, requestFactory?: ApifacturaCompraApiRequestFactory, responseProcessor?: ApifacturaCompraApiResponseProcessor) {
        this.api = new ObservableApifacturaCompraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraCreateWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        return this.api.apifacturaCompraCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraCreate(param: ApifacturaCompraApiApifacturaCompraCreateRequest, options?: Configuration): Promise<FacturaCompras> {
        return this.api.apifacturaCompraCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraDeleteWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apifacturaCompraDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraDelete(param: ApifacturaCompraApiApifacturaCompraDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apifacturaCompraDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraListWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FacturaCompras>>> {
        return this.api.apifacturaCompraListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraList(param: ApifacturaCompraApiApifacturaCompraListRequest = {}, options?: Configuration): Promise<Array<FacturaCompras>> {
        return this.api.apifacturaCompraList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraPartialUpdateWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        return this.api.apifacturaCompraPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraPartialUpdate(param: ApifacturaCompraApiApifacturaCompraPartialUpdateRequest, options?: Configuration): Promise<FacturaCompras> {
        return this.api.apifacturaCompraPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraReadWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraReadRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        return this.api.apifacturaCompraReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraRead(param: ApifacturaCompraApiApifacturaCompraReadRequest, options?: Configuration): Promise<FacturaCompras> {
        return this.api.apifacturaCompraRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraUpdateWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        return this.api.apifacturaCompraUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaCompraUpdate(param: ApifacturaCompraApiApifacturaCompraUpdateRequest, options?: Configuration): Promise<FacturaCompras> {
        return this.api.apifacturaCompraUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApifacturaVCarteraApi } from "./ObservableAPI";
import { ApifacturaVCarteraApiRequestFactory, ApifacturaVCarteraApiResponseProcessor} from "../apis/ApifacturaVCarteraApi";

export interface ApifacturaVCarteraApiApifacturaVCarteraCreateRequest {
    /**
     * 
     * @type FacturaVCarteras
     * @memberof ApifacturaVCarteraApiapifacturaVCarteraCreate
     */
    data: FacturaVCarteras
}

export interface ApifacturaVCarteraApiApifacturaVCarteraDeleteRequest {
    /**
     * A unique integer value identifying this factura_v_ cartera.
     * @type number
     * @memberof ApifacturaVCarteraApiapifacturaVCarteraDelete
     */
    id: number
}

export interface ApifacturaVCarteraApiApifacturaVCarteraListRequest {
}

export interface ApifacturaVCarteraApiApifacturaVCarteraPartialUpdateRequest {
    /**
     * A unique integer value identifying this factura_v_ cartera.
     * @type number
     * @memberof ApifacturaVCarteraApiapifacturaVCarteraPartialUpdate
     */
    id: number
    /**
     * 
     * @type FacturaVCarteras
     * @memberof ApifacturaVCarteraApiapifacturaVCarteraPartialUpdate
     */
    data: FacturaVCarteras
}

export interface ApifacturaVCarteraApiApifacturaVCarteraReadRequest {
    /**
     * A unique integer value identifying this factura_v_ cartera.
     * @type number
     * @memberof ApifacturaVCarteraApiapifacturaVCarteraRead
     */
    id: number
}

export interface ApifacturaVCarteraApiApifacturaVCarteraUpdateRequest {
    /**
     * A unique integer value identifying this factura_v_ cartera.
     * @type number
     * @memberof ApifacturaVCarteraApiapifacturaVCarteraUpdate
     */
    id: number
    /**
     * 
     * @type FacturaVCarteras
     * @memberof ApifacturaVCarteraApiapifacturaVCarteraUpdate
     */
    data: FacturaVCarteras
}

export class ObjectApifacturaVCarteraApi {
    private api: ObservableApifacturaVCarteraApi

    public constructor(configuration: Configuration, requestFactory?: ApifacturaVCarteraApiRequestFactory, responseProcessor?: ApifacturaVCarteraApiResponseProcessor) {
        this.api = new ObservableApifacturaVCarteraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraCreateWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        return this.api.apifacturaVCarteraCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraCreate(param: ApifacturaVCarteraApiApifacturaVCarteraCreateRequest, options?: Configuration): Promise<FacturaVCarteras> {
        return this.api.apifacturaVCarteraCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraDeleteWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apifacturaVCarteraDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraDelete(param: ApifacturaVCarteraApiApifacturaVCarteraDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apifacturaVCarteraDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraListWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FacturaVCarteras>>> {
        return this.api.apifacturaVCarteraListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraList(param: ApifacturaVCarteraApiApifacturaVCarteraListRequest = {}, options?: Configuration): Promise<Array<FacturaVCarteras>> {
        return this.api.apifacturaVCarteraList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraPartialUpdateWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        return this.api.apifacturaVCarteraPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraPartialUpdate(param: ApifacturaVCarteraApiApifacturaVCarteraPartialUpdateRequest, options?: Configuration): Promise<FacturaVCarteras> {
        return this.api.apifacturaVCarteraPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraReadWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraReadRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        return this.api.apifacturaVCarteraReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraRead(param: ApifacturaVCarteraApiApifacturaVCarteraReadRequest, options?: Configuration): Promise<FacturaVCarteras> {
        return this.api.apifacturaVCarteraRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraUpdateWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        return this.api.apifacturaVCarteraUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVCarteraUpdate(param: ApifacturaVCarteraApiApifacturaVCarteraUpdateRequest, options?: Configuration): Promise<FacturaVCarteras> {
        return this.api.apifacturaVCarteraUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApifacturaVentaApi } from "./ObservableAPI";
import { ApifacturaVentaApiRequestFactory, ApifacturaVentaApiResponseProcessor} from "../apis/ApifacturaVentaApi";

export interface ApifacturaVentaApiApifacturaVentaCreateRequest {
    /**
     * 
     * @type FacturaVentas
     * @memberof ApifacturaVentaApiapifacturaVentaCreate
     */
    data: FacturaVentas
}

export interface ApifacturaVentaApiApifacturaVentaDeleteRequest {
    /**
     * A unique integer value identifying this factura_ venta.
     * @type number
     * @memberof ApifacturaVentaApiapifacturaVentaDelete
     */
    id: number
}

export interface ApifacturaVentaApiApifacturaVentaListRequest {
}

export interface ApifacturaVentaApiApifacturaVentaPartialUpdateRequest {
    /**
     * A unique integer value identifying this factura_ venta.
     * @type number
     * @memberof ApifacturaVentaApiapifacturaVentaPartialUpdate
     */
    id: number
    /**
     * 
     * @type FacturaVentas
     * @memberof ApifacturaVentaApiapifacturaVentaPartialUpdate
     */
    data: FacturaVentas
}

export interface ApifacturaVentaApiApifacturaVentaReadRequest {
    /**
     * A unique integer value identifying this factura_ venta.
     * @type number
     * @memberof ApifacturaVentaApiapifacturaVentaRead
     */
    id: number
}

export interface ApifacturaVentaApiApifacturaVentaUpdateRequest {
    /**
     * A unique integer value identifying this factura_ venta.
     * @type number
     * @memberof ApifacturaVentaApiapifacturaVentaUpdate
     */
    id: number
    /**
     * 
     * @type FacturaVentas
     * @memberof ApifacturaVentaApiapifacturaVentaUpdate
     */
    data: FacturaVentas
}

export class ObjectApifacturaVentaApi {
    private api: ObservableApifacturaVentaApi

    public constructor(configuration: Configuration, requestFactory?: ApifacturaVentaApiRequestFactory, responseProcessor?: ApifacturaVentaApiResponseProcessor) {
        this.api = new ObservableApifacturaVentaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaCreateWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        return this.api.apifacturaVentaCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaCreate(param: ApifacturaVentaApiApifacturaVentaCreateRequest, options?: Configuration): Promise<FacturaVentas> {
        return this.api.apifacturaVentaCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaDeleteWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apifacturaVentaDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaDelete(param: ApifacturaVentaApiApifacturaVentaDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apifacturaVentaDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaListWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FacturaVentas>>> {
        return this.api.apifacturaVentaListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaList(param: ApifacturaVentaApiApifacturaVentaListRequest = {}, options?: Configuration): Promise<Array<FacturaVentas>> {
        return this.api.apifacturaVentaList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaPartialUpdateWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        return this.api.apifacturaVentaPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaPartialUpdate(param: ApifacturaVentaApiApifacturaVentaPartialUpdateRequest, options?: Configuration): Promise<FacturaVentas> {
        return this.api.apifacturaVentaPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaReadWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaReadRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        return this.api.apifacturaVentaReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaRead(param: ApifacturaVentaApiApifacturaVentaReadRequest, options?: Configuration): Promise<FacturaVentas> {
        return this.api.apifacturaVentaRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaUpdateWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        return this.api.apifacturaVentaUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apifacturaVentaUpdate(param: ApifacturaVentaApiApifacturaVentaUpdateRequest, options?: Configuration): Promise<FacturaVentas> {
        return this.api.apifacturaVentaUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApilotesApi } from "./ObservableAPI";
import { ApilotesApiRequestFactory, ApilotesApiResponseProcessor} from "../apis/ApilotesApi";

export interface ApilotesApiApilotesCreateRequest {
    /**
     * 
     * @type Lotes
     * @memberof ApilotesApiapilotesCreate
     */
    data: Lotes
}

export interface ApilotesApiApilotesDeleteRequest {
    /**
     * A unique integer value identifying this lote.
     * @type number
     * @memberof ApilotesApiapilotesDelete
     */
    id: number
}

export interface ApilotesApiApilotesListRequest {
    /**
     * producto_lote
     * @type string
     * @memberof ApilotesApiapilotesList
     */
    productoLote?: string
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof ApilotesApiapilotesList
     */
    ordering?: string
}

export interface ApilotesApiApilotesPartialUpdateRequest {
    /**
     * A unique integer value identifying this lote.
     * @type number
     * @memberof ApilotesApiapilotesPartialUpdate
     */
    id: number
    /**
     * 
     * @type Lotes
     * @memberof ApilotesApiapilotesPartialUpdate
     */
    data: Lotes
}

export interface ApilotesApiApilotesReadRequest {
    /**
     * A unique integer value identifying this lote.
     * @type number
     * @memberof ApilotesApiapilotesRead
     */
    id: number
}

export interface ApilotesApiApilotesUpdateRequest {
    /**
     * A unique integer value identifying this lote.
     * @type number
     * @memberof ApilotesApiapilotesUpdate
     */
    id: number
    /**
     * 
     * @type Lotes
     * @memberof ApilotesApiapilotesUpdate
     */
    data: Lotes
}

export class ObjectApilotesApi {
    private api: ObservableApilotesApi

    public constructor(configuration: Configuration, requestFactory?: ApilotesApiRequestFactory, responseProcessor?: ApilotesApiResponseProcessor) {
        this.api = new ObservableApilotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apilotesCreateWithHttpInfo(param: ApilotesApiApilotesCreateRequest, options?: Configuration): Promise<HttpInfo<Lotes>> {
        return this.api.apilotesCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesCreate(param: ApilotesApiApilotesCreateRequest, options?: Configuration): Promise<Lotes> {
        return this.api.apilotesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesDeleteWithHttpInfo(param: ApilotesApiApilotesDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apilotesDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesDelete(param: ApilotesApiApilotesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apilotesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesListWithHttpInfo(param: ApilotesApiApilotesListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Lotes>>> {
        return this.api.apilotesListWithHttpInfo(param.productoLote, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesList(param: ApilotesApiApilotesListRequest = {}, options?: Configuration): Promise<Array<Lotes>> {
        return this.api.apilotesList(param.productoLote, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesPartialUpdateWithHttpInfo(param: ApilotesApiApilotesPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Lotes>> {
        return this.api.apilotesPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesPartialUpdate(param: ApilotesApiApilotesPartialUpdateRequest, options?: Configuration): Promise<Lotes> {
        return this.api.apilotesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesReadWithHttpInfo(param: ApilotesApiApilotesReadRequest, options?: Configuration): Promise<HttpInfo<Lotes>> {
        return this.api.apilotesReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesRead(param: ApilotesApiApilotesReadRequest, options?: Configuration): Promise<Lotes> {
        return this.api.apilotesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesUpdateWithHttpInfo(param: ApilotesApiApilotesUpdateRequest, options?: Configuration): Promise<HttpInfo<Lotes>> {
        return this.api.apilotesUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apilotesUpdate(param: ApilotesApiApilotesUpdateRequest, options?: Configuration): Promise<Lotes> {
        return this.api.apilotesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApipagoApi } from "./ObservableAPI";
import { ApipagoApiRequestFactory, ApipagoApiResponseProcessor} from "../apis/ApipagoApi";

export interface ApipagoApiApipagoCreateRequest {
    /**
     * 
     * @type Pagos
     * @memberof ApipagoApiapipagoCreate
     */
    data: Pagos
}

export interface ApipagoApiApipagoDeleteRequest {
    /**
     * A unique integer value identifying this pago.
     * @type number
     * @memberof ApipagoApiapipagoDelete
     */
    id: number
}

export interface ApipagoApiApipagoListRequest {
}

export interface ApipagoApiApipagoPartialUpdateRequest {
    /**
     * A unique integer value identifying this pago.
     * @type number
     * @memberof ApipagoApiapipagoPartialUpdate
     */
    id: number
    /**
     * 
     * @type Pagos
     * @memberof ApipagoApiapipagoPartialUpdate
     */
    data: Pagos
}

export interface ApipagoApiApipagoReadRequest {
    /**
     * A unique integer value identifying this pago.
     * @type number
     * @memberof ApipagoApiapipagoRead
     */
    id: number
}

export interface ApipagoApiApipagoUpdateRequest {
    /**
     * A unique integer value identifying this pago.
     * @type number
     * @memberof ApipagoApiapipagoUpdate
     */
    id: number
    /**
     * 
     * @type Pagos
     * @memberof ApipagoApiapipagoUpdate
     */
    data: Pagos
}

export class ObjectApipagoApi {
    private api: ObservableApipagoApi

    public constructor(configuration: Configuration, requestFactory?: ApipagoApiRequestFactory, responseProcessor?: ApipagoApiResponseProcessor) {
        this.api = new ObservableApipagoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apipagoCreateWithHttpInfo(param: ApipagoApiApipagoCreateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.apipagoCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoCreate(param: ApipagoApiApipagoCreateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.apipagoCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoDeleteWithHttpInfo(param: ApipagoApiApipagoDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apipagoDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoDelete(param: ApipagoApiApipagoDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apipagoDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoListWithHttpInfo(param: ApipagoApiApipagoListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Pagos>>> {
        return this.api.apipagoListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoList(param: ApipagoApiApipagoListRequest = {}, options?: Configuration): Promise<Array<Pagos>> {
        return this.api.apipagoList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoPartialUpdateWithHttpInfo(param: ApipagoApiApipagoPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.apipagoPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoPartialUpdate(param: ApipagoApiApipagoPartialUpdateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.apipagoPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoReadWithHttpInfo(param: ApipagoApiApipagoReadRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.apipagoReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoRead(param: ApipagoApiApipagoReadRequest, options?: Configuration): Promise<Pagos> {
        return this.api.apipagoRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoUpdateWithHttpInfo(param: ApipagoApiApipagoUpdateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.apipagoUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagoUpdate(param: ApipagoApiApipagoUpdateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.apipagoUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApipersonasApi } from "./ObservableAPI";
import { ApipersonasApiRequestFactory, ApipersonasApiResponseProcessor} from "../apis/ApipersonasApi";

export interface ApipersonasApiApipersonasCreateRequest {
    /**
     * 
     * @type Personas
     * @memberof ApipersonasApiapipersonasCreate
     */
    data: Personas
}

export interface ApipersonasApiApipersonasDeleteRequest {
    /**
     * A unique integer value identifying this persona.
     * @type number
     * @memberof ApipersonasApiapipersonasDelete
     */
    id: number
}

export interface ApipersonasApiApipersonasListRequest {
    /**
     * nombre
     * @type string
     * @memberof ApipersonasApiapipersonasList
     */
    nombre?: string
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof ApipersonasApiapipersonasList
     */
    ordering?: string
}

export interface ApipersonasApiApipersonasPartialUpdateRequest {
    /**
     * A unique integer value identifying this persona.
     * @type number
     * @memberof ApipersonasApiapipersonasPartialUpdate
     */
    id: number
    /**
     * 
     * @type Personas
     * @memberof ApipersonasApiapipersonasPartialUpdate
     */
    data: Personas
}

export interface ApipersonasApiApipersonasReadRequest {
    /**
     * A unique integer value identifying this persona.
     * @type number
     * @memberof ApipersonasApiapipersonasRead
     */
    id: number
}

export interface ApipersonasApiApipersonasUpdateRequest {
    /**
     * A unique integer value identifying this persona.
     * @type number
     * @memberof ApipersonasApiapipersonasUpdate
     */
    id: number
    /**
     * 
     * @type Personas
     * @memberof ApipersonasApiapipersonasUpdate
     */
    data: Personas
}

export class ObjectApipersonasApi {
    private api: ObservableApipersonasApi

    public constructor(configuration: Configuration, requestFactory?: ApipersonasApiRequestFactory, responseProcessor?: ApipersonasApiResponseProcessor) {
        this.api = new ObservableApipersonasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apipersonasCreateWithHttpInfo(param: ApipersonasApiApipersonasCreateRequest, options?: Configuration): Promise<HttpInfo<Personas>> {
        return this.api.apipersonasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasCreate(param: ApipersonasApiApipersonasCreateRequest, options?: Configuration): Promise<Personas> {
        return this.api.apipersonasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasDeleteWithHttpInfo(param: ApipersonasApiApipersonasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apipersonasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasDelete(param: ApipersonasApiApipersonasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apipersonasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasListWithHttpInfo(param: ApipersonasApiApipersonasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Personas>>> {
        return this.api.apipersonasListWithHttpInfo(param.nombre, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasList(param: ApipersonasApiApipersonasListRequest = {}, options?: Configuration): Promise<Array<Personas>> {
        return this.api.apipersonasList(param.nombre, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasPartialUpdateWithHttpInfo(param: ApipersonasApiApipersonasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Personas>> {
        return this.api.apipersonasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasPartialUpdate(param: ApipersonasApiApipersonasPartialUpdateRequest, options?: Configuration): Promise<Personas> {
        return this.api.apipersonasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasReadWithHttpInfo(param: ApipersonasApiApipersonasReadRequest, options?: Configuration): Promise<HttpInfo<Personas>> {
        return this.api.apipersonasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasRead(param: ApipersonasApiApipersonasReadRequest, options?: Configuration): Promise<Personas> {
        return this.api.apipersonasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasUpdateWithHttpInfo(param: ApipersonasApiApipersonasUpdateRequest, options?: Configuration): Promise<HttpInfo<Personas>> {
        return this.api.apipersonasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipersonasUpdate(param: ApipersonasApiApipersonasUpdateRequest, options?: Configuration): Promise<Personas> {
        return this.api.apipersonasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiproductosApi } from "./ObservableAPI";
import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor} from "../apis/ApiproductosApi";

export interface ApiproductosApiApiproductosCreateRequest {
    /**
     * 
     * @type Productos
     * @memberof ApiproductosApiapiproductosCreate
     */
    data: Productos
}

export interface ApiproductosApiApiproductosDeleteRequest {
    /**
     * A unique integer value identifying this producto.
     * @type number
     * @memberof ApiproductosApiapiproductosDelete
     */
    id: number
}

export interface ApiproductosApiApiproductosListRequest {
    /**
     * categoria
     * @type string
     * @memberof ApiproductosApiapiproductosList
     */
    categoria?: string
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof ApiproductosApiapiproductosList
     */
    ordering?: string
}

export interface ApiproductosApiApiproductosPartialUpdateRequest {
    /**
     * A unique integer value identifying this producto.
     * @type number
     * @memberof ApiproductosApiapiproductosPartialUpdate
     */
    id: number
    /**
     * 
     * @type Productos
     * @memberof ApiproductosApiapiproductosPartialUpdate
     */
    data: Productos
}

export interface ApiproductosApiApiproductosReadRequest {
    /**
     * A unique integer value identifying this producto.
     * @type number
     * @memberof ApiproductosApiapiproductosRead
     */
    id: number
}

export interface ApiproductosApiApiproductosUpdateRequest {
    /**
     * A unique integer value identifying this producto.
     * @type number
     * @memberof ApiproductosApiapiproductosUpdate
     */
    id: number
    /**
     * 
     * @type Productos
     * @memberof ApiproductosApiapiproductosUpdate
     */
    data: Productos
}

export class ObjectApiproductosApi {
    private api: ObservableApiproductosApi

    public constructor(configuration: Configuration, requestFactory?: ApiproductosApiRequestFactory, responseProcessor?: ApiproductosApiResponseProcessor) {
        this.api = new ObservableApiproductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiproductosCreateWithHttpInfo(param: ApiproductosApiApiproductosCreateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.apiproductosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosCreate(param: ApiproductosApiApiproductosCreateRequest, options?: Configuration): Promise<Productos> {
        return this.api.apiproductosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosDeleteWithHttpInfo(param: ApiproductosApiApiproductosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiproductosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosDelete(param: ApiproductosApiApiproductosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiproductosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosListWithHttpInfo(param: ApiproductosApiApiproductosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Productos>>> {
        return this.api.apiproductosListWithHttpInfo(param.categoria, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosList(param: ApiproductosApiApiproductosListRequest = {}, options?: Configuration): Promise<Array<Productos>> {
        return this.api.apiproductosList(param.categoria, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosPartialUpdateWithHttpInfo(param: ApiproductosApiApiproductosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.apiproductosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosPartialUpdate(param: ApiproductosApiApiproductosPartialUpdateRequest, options?: Configuration): Promise<Productos> {
        return this.api.apiproductosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosReadWithHttpInfo(param: ApiproductosApiApiproductosReadRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.apiproductosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosRead(param: ApiproductosApiApiproductosReadRequest, options?: Configuration): Promise<Productos> {
        return this.api.apiproductosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosUpdateWithHttpInfo(param: ApiproductosApiApiproductosUpdateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.apiproductosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosUpdate(param: ApiproductosApiApiproductosUpdateRequest, options?: Configuration): Promise<Productos> {
        return this.api.apiproductosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApistockApi } from "./ObservableAPI";
import { ApistockApiRequestFactory, ApistockApiResponseProcessor} from "../apis/ApistockApi";

export interface ApistockApiApistockCreateRequest {
    /**
     * 
     * @type Stock
     * @memberof ApistockApiapistockCreate
     */
    data: Stock
}

export interface ApistockApiApistockDeleteRequest {
    /**
     * A unique integer value identifying this stock.
     * @type number
     * @memberof ApistockApiapistockDelete
     */
    id: number
}

export interface ApistockApiApistockListRequest {
    /**
     * cantidad
     * @type string
     * @memberof ApistockApiapistockList
     */
    cantidad?: string
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof ApistockApiapistockList
     */
    ordering?: string
}

export interface ApistockApiApistockPartialUpdateRequest {
    /**
     * A unique integer value identifying this stock.
     * @type number
     * @memberof ApistockApiapistockPartialUpdate
     */
    id: number
    /**
     * 
     * @type Stock
     * @memberof ApistockApiapistockPartialUpdate
     */
    data: Stock
}

export interface ApistockApiApistockReadRequest {
    /**
     * A unique integer value identifying this stock.
     * @type number
     * @memberof ApistockApiapistockRead
     */
    id: number
}

export interface ApistockApiApistockUpdateRequest {
    /**
     * A unique integer value identifying this stock.
     * @type number
     * @memberof ApistockApiapistockUpdate
     */
    id: number
    /**
     * 
     * @type Stock
     * @memberof ApistockApiapistockUpdate
     */
    data: Stock
}

export class ObjectApistockApi {
    private api: ObservableApistockApi

    public constructor(configuration: Configuration, requestFactory?: ApistockApiRequestFactory, responseProcessor?: ApistockApiResponseProcessor) {
        this.api = new ObservableApistockApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apistockCreateWithHttpInfo(param: ApistockApiApistockCreateRequest, options?: Configuration): Promise<HttpInfo<Stock>> {
        return this.api.apistockCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockCreate(param: ApistockApiApistockCreateRequest, options?: Configuration): Promise<Stock> {
        return this.api.apistockCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockDeleteWithHttpInfo(param: ApistockApiApistockDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apistockDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockDelete(param: ApistockApiApistockDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apistockDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockListWithHttpInfo(param: ApistockApiApistockListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Stock>>> {
        return this.api.apistockListWithHttpInfo(param.cantidad, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockList(param: ApistockApiApistockListRequest = {}, options?: Configuration): Promise<Array<Stock>> {
        return this.api.apistockList(param.cantidad, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockPartialUpdateWithHttpInfo(param: ApistockApiApistockPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Stock>> {
        return this.api.apistockPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockPartialUpdate(param: ApistockApiApistockPartialUpdateRequest, options?: Configuration): Promise<Stock> {
        return this.api.apistockPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockReadWithHttpInfo(param: ApistockApiApistockReadRequest, options?: Configuration): Promise<HttpInfo<Stock>> {
        return this.api.apistockReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockRead(param: ApistockApiApistockReadRequest, options?: Configuration): Promise<Stock> {
        return this.api.apistockRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockUpdateWithHttpInfo(param: ApistockApiApistockUpdateRequest, options?: Configuration): Promise<HttpInfo<Stock>> {
        return this.api.apistockUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apistockUpdate(param: ApistockApiApistockUpdateRequest, options?: Configuration): Promise<Stock> {
        return this.api.apistockUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiusersApi } from "./ObservableAPI";
import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor} from "../apis/ApiusersApi";

export interface ApiusersApiApiusersCreateRequest {
    /**
     * 
     * @type User
     * @memberof ApiusersApiapiusersCreate
     */
    data: User
}

export interface ApiusersApiApiusersDeleteRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiusersApiapiusersDelete
     */
    id: number
}

export interface ApiusersApiApiusersListRequest {
}

export interface ApiusersApiApiusersPartialUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiusersApiapiusersPartialUpdate
     */
    id: number
    /**
     * 
     * @type User
     * @memberof ApiusersApiapiusersPartialUpdate
     */
    data: User
}

export interface ApiusersApiApiusersReadRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiusersApiapiusersRead
     */
    id: number
}

export interface ApiusersApiApiusersUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiusersApiapiusersUpdate
     */
    id: number
    /**
     * 
     * @type User
     * @memberof ApiusersApiapiusersUpdate
     */
    data: User
}

export class ObjectApiusersApi {
    private api: ObservableApiusersApi

    public constructor(configuration: Configuration, requestFactory?: ApiusersApiRequestFactory, responseProcessor?: ApiusersApiResponseProcessor) {
        this.api = new ObservableApiusersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiusersCreateWithHttpInfo(param: ApiusersApiApiusersCreateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiusersCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersCreate(param: ApiusersApiApiusersCreateRequest, options?: Configuration): Promise<User> {
        return this.api.apiusersCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersDeleteWithHttpInfo(param: ApiusersApiApiusersDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiusersDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersDelete(param: ApiusersApiApiusersDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiusersDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersListWithHttpInfo(param: ApiusersApiApiusersListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<User>>> {
        return this.api.apiusersListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersList(param: ApiusersApiApiusersListRequest = {}, options?: Configuration): Promise<Array<User>> {
        return this.api.apiusersList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersPartialUpdateWithHttpInfo(param: ApiusersApiApiusersPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiusersPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersPartialUpdate(param: ApiusersApiApiusersPartialUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.apiusersPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersReadWithHttpInfo(param: ApiusersApiApiusersReadRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiusersReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersRead(param: ApiusersApiApiusersReadRequest, options?: Configuration): Promise<User> {
        return this.api.apiusersRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersUpdateWithHttpInfo(param: ApiusersApiApiusersUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiusersUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersUpdate(param: ApiusersApiApiusersUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.apiusersUpdate(param.id, param.data,  options).toPromise();
    }

}
