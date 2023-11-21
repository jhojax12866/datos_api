import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
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
import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor } from "../apis/ApiauthApi";
export interface ApiauthApiApiauthLoginCreateRequest {
    data: TokenObtainPair;
}
export interface ApiauthApiApiauthMeListRequest {
}
export declare class ObjectApiauthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApiauthApiRequestFactory, responseProcessor?: ApiauthApiResponseProcessor);
    apiauthLoginCreateWithHttpInfo(param: ApiauthApiApiauthLoginCreateRequest, options?: Configuration): Promise<HttpInfo<TokenObtainPair>>;
    apiauthLoginCreate(param: ApiauthApiApiauthLoginCreateRequest, options?: Configuration): Promise<TokenObtainPair>;
    apiauthMeListWithHttpInfo(param?: ApiauthApiApiauthMeListRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apiauthMeList(param?: ApiauthApiApiauthMeListRequest, options?: Configuration): Promise<void>;
}
import { ApicarteraApiRequestFactory, ApicarteraApiResponseProcessor } from "../apis/ApicarteraApi";
export interface ApicarteraApiApicarteraCreateRequest {
    data: Carteras;
}
export interface ApicarteraApiApicarteraDeleteRequest {
    id: number;
}
export interface ApicarteraApiApicarteraListRequest {
}
export interface ApicarteraApiApicarteraPartialUpdateRequest {
    id: number;
    data: Carteras;
}
export interface ApicarteraApiApicarteraReadRequest {
    id: number;
}
export interface ApicarteraApiApicarteraUpdateRequest {
    id: number;
    data: Carteras;
}
export declare class ObjectApicarteraApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApicarteraApiRequestFactory, responseProcessor?: ApicarteraApiResponseProcessor);
    apicarteraCreateWithHttpInfo(param: ApicarteraApiApicarteraCreateRequest, options?: Configuration): Promise<HttpInfo<Carteras>>;
    apicarteraCreate(param: ApicarteraApiApicarteraCreateRequest, options?: Configuration): Promise<Carteras>;
    apicarteraDeleteWithHttpInfo(param: ApicarteraApiApicarteraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apicarteraDelete(param: ApicarteraApiApicarteraDeleteRequest, options?: Configuration): Promise<void>;
    apicarteraListWithHttpInfo(param?: ApicarteraApiApicarteraListRequest, options?: Configuration): Promise<HttpInfo<Array<Carteras>>>;
    apicarteraList(param?: ApicarteraApiApicarteraListRequest, options?: Configuration): Promise<Array<Carteras>>;
    apicarteraPartialUpdateWithHttpInfo(param: ApicarteraApiApicarteraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Carteras>>;
    apicarteraPartialUpdate(param: ApicarteraApiApicarteraPartialUpdateRequest, options?: Configuration): Promise<Carteras>;
    apicarteraReadWithHttpInfo(param: ApicarteraApiApicarteraReadRequest, options?: Configuration): Promise<HttpInfo<Carteras>>;
    apicarteraRead(param: ApicarteraApiApicarteraReadRequest, options?: Configuration): Promise<Carteras>;
    apicarteraUpdateWithHttpInfo(param: ApicarteraApiApicarteraUpdateRequest, options?: Configuration): Promise<HttpInfo<Carteras>>;
    apicarteraUpdate(param: ApicarteraApiApicarteraUpdateRequest, options?: Configuration): Promise<Carteras>;
}
import { ApicategoriasApiRequestFactory, ApicategoriasApiResponseProcessor } from "../apis/ApicategoriasApi";
export interface ApicategoriasApiApicategoriasCreateRequest {
    data: Categorias;
}
export interface ApicategoriasApiApicategoriasDeleteRequest {
    id: number;
}
export interface ApicategoriasApiApicategoriasListRequest {
}
export interface ApicategoriasApiApicategoriasPartialUpdateRequest {
    id: number;
    data: Categorias;
}
export interface ApicategoriasApiApicategoriasReadRequest {
    id: number;
}
export interface ApicategoriasApiApicategoriasUpdateRequest {
    id: number;
    data: Categorias;
}
export declare class ObjectApicategoriasApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApicategoriasApiRequestFactory, responseProcessor?: ApicategoriasApiResponseProcessor);
    apicategoriasCreateWithHttpInfo(param: ApicategoriasApiApicategoriasCreateRequest, options?: Configuration): Promise<HttpInfo<Categorias>>;
    apicategoriasCreate(param: ApicategoriasApiApicategoriasCreateRequest, options?: Configuration): Promise<Categorias>;
    apicategoriasDeleteWithHttpInfo(param: ApicategoriasApiApicategoriasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apicategoriasDelete(param: ApicategoriasApiApicategoriasDeleteRequest, options?: Configuration): Promise<void>;
    apicategoriasListWithHttpInfo(param?: ApicategoriasApiApicategoriasListRequest, options?: Configuration): Promise<HttpInfo<Array<Categorias>>>;
    apicategoriasList(param?: ApicategoriasApiApicategoriasListRequest, options?: Configuration): Promise<Array<Categorias>>;
    apicategoriasPartialUpdateWithHttpInfo(param: ApicategoriasApiApicategoriasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Categorias>>;
    apicategoriasPartialUpdate(param: ApicategoriasApiApicategoriasPartialUpdateRequest, options?: Configuration): Promise<Categorias>;
    apicategoriasReadWithHttpInfo(param: ApicategoriasApiApicategoriasReadRequest, options?: Configuration): Promise<HttpInfo<Categorias>>;
    apicategoriasRead(param: ApicategoriasApiApicategoriasReadRequest, options?: Configuration): Promise<Categorias>;
    apicategoriasUpdateWithHttpInfo(param: ApicategoriasApiApicategoriasUpdateRequest, options?: Configuration): Promise<HttpInfo<Categorias>>;
    apicategoriasUpdate(param: ApicategoriasApiApicategoriasUpdateRequest, options?: Configuration): Promise<Categorias>;
}
import { ApidetalleCompraApiRequestFactory, ApidetalleCompraApiResponseProcessor } from "../apis/ApidetalleCompraApi";
export interface ApidetalleCompraApiApidetalleCompraCreateRequest {
    data: DetalleCompras;
}
export interface ApidetalleCompraApiApidetalleCompraDeleteRequest {
    id: number;
}
export interface ApidetalleCompraApiApidetalleCompraListRequest {
}
export interface ApidetalleCompraApiApidetalleCompraPartialUpdateRequest {
    id: number;
    data: DetalleCompras;
}
export interface ApidetalleCompraApiApidetalleCompraReadRequest {
    id: number;
}
export interface ApidetalleCompraApiApidetalleCompraUpdateRequest {
    id: number;
    data: DetalleCompras;
}
export declare class ObjectApidetalleCompraApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApidetalleCompraApiRequestFactory, responseProcessor?: ApidetalleCompraApiResponseProcessor);
    apidetalleCompraCreateWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraCreateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraCreate(param: ApidetalleCompraApiApidetalleCompraCreateRequest, options?: Configuration): Promise<DetalleCompras>;
    apidetalleCompraDeleteWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apidetalleCompraDelete(param: ApidetalleCompraApiApidetalleCompraDeleteRequest, options?: Configuration): Promise<void>;
    apidetalleCompraListWithHttpInfo(param?: ApidetalleCompraApiApidetalleCompraListRequest, options?: Configuration): Promise<HttpInfo<Array<DetalleCompras>>>;
    apidetalleCompraList(param?: ApidetalleCompraApiApidetalleCompraListRequest, options?: Configuration): Promise<Array<DetalleCompras>>;
    apidetalleCompraPartialUpdateWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraPartialUpdate(param: ApidetalleCompraApiApidetalleCompraPartialUpdateRequest, options?: Configuration): Promise<DetalleCompras>;
    apidetalleCompraReadWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraReadRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraRead(param: ApidetalleCompraApiApidetalleCompraReadRequest, options?: Configuration): Promise<DetalleCompras>;
    apidetalleCompraUpdateWithHttpInfo(param: ApidetalleCompraApiApidetalleCompraUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraUpdate(param: ApidetalleCompraApiApidetalleCompraUpdateRequest, options?: Configuration): Promise<DetalleCompras>;
}
import { ApidetalleVentaApiRequestFactory, ApidetalleVentaApiResponseProcessor } from "../apis/ApidetalleVentaApi";
export interface ApidetalleVentaApiApidetalleVentaCreateRequest {
    data: DetalleVentas;
}
export interface ApidetalleVentaApiApidetalleVentaDeleteRequest {
    id: number;
}
export interface ApidetalleVentaApiApidetalleVentaListRequest {
}
export interface ApidetalleVentaApiApidetalleVentaPartialUpdateRequest {
    id: number;
    data: DetalleVentas;
}
export interface ApidetalleVentaApiApidetalleVentaReadRequest {
    id: number;
}
export interface ApidetalleVentaApiApidetalleVentaUpdateRequest {
    id: number;
    data: DetalleVentas;
}
export declare class ObjectApidetalleVentaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApidetalleVentaApiRequestFactory, responseProcessor?: ApidetalleVentaApiResponseProcessor);
    apidetalleVentaCreateWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaCreateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaCreate(param: ApidetalleVentaApiApidetalleVentaCreateRequest, options?: Configuration): Promise<DetalleVentas>;
    apidetalleVentaDeleteWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apidetalleVentaDelete(param: ApidetalleVentaApiApidetalleVentaDeleteRequest, options?: Configuration): Promise<void>;
    apidetalleVentaListWithHttpInfo(param?: ApidetalleVentaApiApidetalleVentaListRequest, options?: Configuration): Promise<HttpInfo<Array<DetalleVentas>>>;
    apidetalleVentaList(param?: ApidetalleVentaApiApidetalleVentaListRequest, options?: Configuration): Promise<Array<DetalleVentas>>;
    apidetalleVentaPartialUpdateWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaPartialUpdate(param: ApidetalleVentaApiApidetalleVentaPartialUpdateRequest, options?: Configuration): Promise<DetalleVentas>;
    apidetalleVentaReadWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaReadRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaRead(param: ApidetalleVentaApiApidetalleVentaReadRequest, options?: Configuration): Promise<DetalleVentas>;
    apidetalleVentaUpdateWithHttpInfo(param: ApidetalleVentaApiApidetalleVentaUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaUpdate(param: ApidetalleVentaApiApidetalleVentaUpdateRequest, options?: Configuration): Promise<DetalleVentas>;
}
import { ApifacturaCompraApiRequestFactory, ApifacturaCompraApiResponseProcessor } from "../apis/ApifacturaCompraApi";
export interface ApifacturaCompraApiApifacturaCompraCreateRequest {
    data: FacturaCompras;
}
export interface ApifacturaCompraApiApifacturaCompraDeleteRequest {
    id: number;
}
export interface ApifacturaCompraApiApifacturaCompraListRequest {
}
export interface ApifacturaCompraApiApifacturaCompraPartialUpdateRequest {
    id: number;
    data: FacturaCompras;
}
export interface ApifacturaCompraApiApifacturaCompraReadRequest {
    id: number;
}
export interface ApifacturaCompraApiApifacturaCompraUpdateRequest {
    id: number;
    data: FacturaCompras;
}
export declare class ObjectApifacturaCompraApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApifacturaCompraApiRequestFactory, responseProcessor?: ApifacturaCompraApiResponseProcessor);
    apifacturaCompraCreateWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraCreate(param: ApifacturaCompraApiApifacturaCompraCreateRequest, options?: Configuration): Promise<FacturaCompras>;
    apifacturaCompraDeleteWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apifacturaCompraDelete(param: ApifacturaCompraApiApifacturaCompraDeleteRequest, options?: Configuration): Promise<void>;
    apifacturaCompraListWithHttpInfo(param?: ApifacturaCompraApiApifacturaCompraListRequest, options?: Configuration): Promise<HttpInfo<Array<FacturaCompras>>>;
    apifacturaCompraList(param?: ApifacturaCompraApiApifacturaCompraListRequest, options?: Configuration): Promise<Array<FacturaCompras>>;
    apifacturaCompraPartialUpdateWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraPartialUpdate(param: ApifacturaCompraApiApifacturaCompraPartialUpdateRequest, options?: Configuration): Promise<FacturaCompras>;
    apifacturaCompraReadWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraReadRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraRead(param: ApifacturaCompraApiApifacturaCompraReadRequest, options?: Configuration): Promise<FacturaCompras>;
    apifacturaCompraUpdateWithHttpInfo(param: ApifacturaCompraApiApifacturaCompraUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraUpdate(param: ApifacturaCompraApiApifacturaCompraUpdateRequest, options?: Configuration): Promise<FacturaCompras>;
}
import { ApifacturaVCarteraApiRequestFactory, ApifacturaVCarteraApiResponseProcessor } from "../apis/ApifacturaVCarteraApi";
export interface ApifacturaVCarteraApiApifacturaVCarteraCreateRequest {
    data: FacturaVCarteras;
}
export interface ApifacturaVCarteraApiApifacturaVCarteraDeleteRequest {
    id: number;
}
export interface ApifacturaVCarteraApiApifacturaVCarteraListRequest {
}
export interface ApifacturaVCarteraApiApifacturaVCarteraPartialUpdateRequest {
    id: number;
    data: FacturaVCarteras;
}
export interface ApifacturaVCarteraApiApifacturaVCarteraReadRequest {
    id: number;
}
export interface ApifacturaVCarteraApiApifacturaVCarteraUpdateRequest {
    id: number;
    data: FacturaVCarteras;
}
export declare class ObjectApifacturaVCarteraApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApifacturaVCarteraApiRequestFactory, responseProcessor?: ApifacturaVCarteraApiResponseProcessor);
    apifacturaVCarteraCreateWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraCreate(param: ApifacturaVCarteraApiApifacturaVCarteraCreateRequest, options?: Configuration): Promise<FacturaVCarteras>;
    apifacturaVCarteraDeleteWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apifacturaVCarteraDelete(param: ApifacturaVCarteraApiApifacturaVCarteraDeleteRequest, options?: Configuration): Promise<void>;
    apifacturaVCarteraListWithHttpInfo(param?: ApifacturaVCarteraApiApifacturaVCarteraListRequest, options?: Configuration): Promise<HttpInfo<Array<FacturaVCarteras>>>;
    apifacturaVCarteraList(param?: ApifacturaVCarteraApiApifacturaVCarteraListRequest, options?: Configuration): Promise<Array<FacturaVCarteras>>;
    apifacturaVCarteraPartialUpdateWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraPartialUpdate(param: ApifacturaVCarteraApiApifacturaVCarteraPartialUpdateRequest, options?: Configuration): Promise<FacturaVCarteras>;
    apifacturaVCarteraReadWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraReadRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraRead(param: ApifacturaVCarteraApiApifacturaVCarteraReadRequest, options?: Configuration): Promise<FacturaVCarteras>;
    apifacturaVCarteraUpdateWithHttpInfo(param: ApifacturaVCarteraApiApifacturaVCarteraUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraUpdate(param: ApifacturaVCarteraApiApifacturaVCarteraUpdateRequest, options?: Configuration): Promise<FacturaVCarteras>;
}
import { ApifacturaVentaApiRequestFactory, ApifacturaVentaApiResponseProcessor } from "../apis/ApifacturaVentaApi";
export interface ApifacturaVentaApiApifacturaVentaCreateRequest {
    data: FacturaVentas;
}
export interface ApifacturaVentaApiApifacturaVentaDeleteRequest {
    id: number;
}
export interface ApifacturaVentaApiApifacturaVentaListRequest {
}
export interface ApifacturaVentaApiApifacturaVentaPartialUpdateRequest {
    id: number;
    data: FacturaVentas;
}
export interface ApifacturaVentaApiApifacturaVentaReadRequest {
    id: number;
}
export interface ApifacturaVentaApiApifacturaVentaUpdateRequest {
    id: number;
    data: FacturaVentas;
}
export declare class ObjectApifacturaVentaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApifacturaVentaApiRequestFactory, responseProcessor?: ApifacturaVentaApiResponseProcessor);
    apifacturaVentaCreateWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaCreate(param: ApifacturaVentaApiApifacturaVentaCreateRequest, options?: Configuration): Promise<FacturaVentas>;
    apifacturaVentaDeleteWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apifacturaVentaDelete(param: ApifacturaVentaApiApifacturaVentaDeleteRequest, options?: Configuration): Promise<void>;
    apifacturaVentaListWithHttpInfo(param?: ApifacturaVentaApiApifacturaVentaListRequest, options?: Configuration): Promise<HttpInfo<Array<FacturaVentas>>>;
    apifacturaVentaList(param?: ApifacturaVentaApiApifacturaVentaListRequest, options?: Configuration): Promise<Array<FacturaVentas>>;
    apifacturaVentaPartialUpdateWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaPartialUpdate(param: ApifacturaVentaApiApifacturaVentaPartialUpdateRequest, options?: Configuration): Promise<FacturaVentas>;
    apifacturaVentaReadWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaReadRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaRead(param: ApifacturaVentaApiApifacturaVentaReadRequest, options?: Configuration): Promise<FacturaVentas>;
    apifacturaVentaUpdateWithHttpInfo(param: ApifacturaVentaApiApifacturaVentaUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaUpdate(param: ApifacturaVentaApiApifacturaVentaUpdateRequest, options?: Configuration): Promise<FacturaVentas>;
}
import { ApilotesApiRequestFactory, ApilotesApiResponseProcessor } from "../apis/ApilotesApi";
export interface ApilotesApiApilotesCreateRequest {
    data: Lotes;
}
export interface ApilotesApiApilotesDeleteRequest {
    id: number;
}
export interface ApilotesApiApilotesListRequest {
    productoLote?: string;
    ordering?: string;
}
export interface ApilotesApiApilotesPartialUpdateRequest {
    id: number;
    data: Lotes;
}
export interface ApilotesApiApilotesReadRequest {
    id: number;
}
export interface ApilotesApiApilotesUpdateRequest {
    id: number;
    data: Lotes;
}
export declare class ObjectApilotesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApilotesApiRequestFactory, responseProcessor?: ApilotesApiResponseProcessor);
    apilotesCreateWithHttpInfo(param: ApilotesApiApilotesCreateRequest, options?: Configuration): Promise<HttpInfo<Lotes>>;
    apilotesCreate(param: ApilotesApiApilotesCreateRequest, options?: Configuration): Promise<Lotes>;
    apilotesDeleteWithHttpInfo(param: ApilotesApiApilotesDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apilotesDelete(param: ApilotesApiApilotesDeleteRequest, options?: Configuration): Promise<void>;
    apilotesListWithHttpInfo(param?: ApilotesApiApilotesListRequest, options?: Configuration): Promise<HttpInfo<Array<Lotes>>>;
    apilotesList(param?: ApilotesApiApilotesListRequest, options?: Configuration): Promise<Array<Lotes>>;
    apilotesPartialUpdateWithHttpInfo(param: ApilotesApiApilotesPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Lotes>>;
    apilotesPartialUpdate(param: ApilotesApiApilotesPartialUpdateRequest, options?: Configuration): Promise<Lotes>;
    apilotesReadWithHttpInfo(param: ApilotesApiApilotesReadRequest, options?: Configuration): Promise<HttpInfo<Lotes>>;
    apilotesRead(param: ApilotesApiApilotesReadRequest, options?: Configuration): Promise<Lotes>;
    apilotesUpdateWithHttpInfo(param: ApilotesApiApilotesUpdateRequest, options?: Configuration): Promise<HttpInfo<Lotes>>;
    apilotesUpdate(param: ApilotesApiApilotesUpdateRequest, options?: Configuration): Promise<Lotes>;
}
import { ApipagoApiRequestFactory, ApipagoApiResponseProcessor } from "../apis/ApipagoApi";
export interface ApipagoApiApipagoCreateRequest {
    data: Pagos;
}
export interface ApipagoApiApipagoDeleteRequest {
    id: number;
}
export interface ApipagoApiApipagoListRequest {
}
export interface ApipagoApiApipagoPartialUpdateRequest {
    id: number;
    data: Pagos;
}
export interface ApipagoApiApipagoReadRequest {
    id: number;
}
export interface ApipagoApiApipagoUpdateRequest {
    id: number;
    data: Pagos;
}
export declare class ObjectApipagoApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApipagoApiRequestFactory, responseProcessor?: ApipagoApiResponseProcessor);
    apipagoCreateWithHttpInfo(param: ApipagoApiApipagoCreateRequest, options?: Configuration): Promise<HttpInfo<Pagos>>;
    apipagoCreate(param: ApipagoApiApipagoCreateRequest, options?: Configuration): Promise<Pagos>;
    apipagoDeleteWithHttpInfo(param: ApipagoApiApipagoDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apipagoDelete(param: ApipagoApiApipagoDeleteRequest, options?: Configuration): Promise<void>;
    apipagoListWithHttpInfo(param?: ApipagoApiApipagoListRequest, options?: Configuration): Promise<HttpInfo<Array<Pagos>>>;
    apipagoList(param?: ApipagoApiApipagoListRequest, options?: Configuration): Promise<Array<Pagos>>;
    apipagoPartialUpdateWithHttpInfo(param: ApipagoApiApipagoPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Pagos>>;
    apipagoPartialUpdate(param: ApipagoApiApipagoPartialUpdateRequest, options?: Configuration): Promise<Pagos>;
    apipagoReadWithHttpInfo(param: ApipagoApiApipagoReadRequest, options?: Configuration): Promise<HttpInfo<Pagos>>;
    apipagoRead(param: ApipagoApiApipagoReadRequest, options?: Configuration): Promise<Pagos>;
    apipagoUpdateWithHttpInfo(param: ApipagoApiApipagoUpdateRequest, options?: Configuration): Promise<HttpInfo<Pagos>>;
    apipagoUpdate(param: ApipagoApiApipagoUpdateRequest, options?: Configuration): Promise<Pagos>;
}
import { ApipersonasApiRequestFactory, ApipersonasApiResponseProcessor } from "../apis/ApipersonasApi";
export interface ApipersonasApiApipersonasCreateRequest {
    data: Personas;
}
export interface ApipersonasApiApipersonasDeleteRequest {
    id: number;
}
export interface ApipersonasApiApipersonasListRequest {
    nombre?: string;
    ordering?: string;
}
export interface ApipersonasApiApipersonasPartialUpdateRequest {
    id: number;
    data: Personas;
}
export interface ApipersonasApiApipersonasReadRequest {
    id: number;
}
export interface ApipersonasApiApipersonasUpdateRequest {
    id: number;
    data: Personas;
}
export declare class ObjectApipersonasApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApipersonasApiRequestFactory, responseProcessor?: ApipersonasApiResponseProcessor);
    apipersonasCreateWithHttpInfo(param: ApipersonasApiApipersonasCreateRequest, options?: Configuration): Promise<HttpInfo<Personas>>;
    apipersonasCreate(param: ApipersonasApiApipersonasCreateRequest, options?: Configuration): Promise<Personas>;
    apipersonasDeleteWithHttpInfo(param: ApipersonasApiApipersonasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apipersonasDelete(param: ApipersonasApiApipersonasDeleteRequest, options?: Configuration): Promise<void>;
    apipersonasListWithHttpInfo(param?: ApipersonasApiApipersonasListRequest, options?: Configuration): Promise<HttpInfo<Array<Personas>>>;
    apipersonasList(param?: ApipersonasApiApipersonasListRequest, options?: Configuration): Promise<Array<Personas>>;
    apipersonasPartialUpdateWithHttpInfo(param: ApipersonasApiApipersonasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Personas>>;
    apipersonasPartialUpdate(param: ApipersonasApiApipersonasPartialUpdateRequest, options?: Configuration): Promise<Personas>;
    apipersonasReadWithHttpInfo(param: ApipersonasApiApipersonasReadRequest, options?: Configuration): Promise<HttpInfo<Personas>>;
    apipersonasRead(param: ApipersonasApiApipersonasReadRequest, options?: Configuration): Promise<Personas>;
    apipersonasUpdateWithHttpInfo(param: ApipersonasApiApipersonasUpdateRequest, options?: Configuration): Promise<HttpInfo<Personas>>;
    apipersonasUpdate(param: ApipersonasApiApipersonasUpdateRequest, options?: Configuration): Promise<Personas>;
}
import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor } from "../apis/ApiproductosApi";
export interface ApiproductosApiApiproductosCreateRequest {
    data: Productos;
}
export interface ApiproductosApiApiproductosDeleteRequest {
    id: number;
}
export interface ApiproductosApiApiproductosListRequest {
    categoria?: string;
    ordering?: string;
}
export interface ApiproductosApiApiproductosPartialUpdateRequest {
    id: number;
    data: Productos;
}
export interface ApiproductosApiApiproductosReadRequest {
    id: number;
}
export interface ApiproductosApiApiproductosUpdateRequest {
    id: number;
    data: Productos;
}
export declare class ObjectApiproductosApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApiproductosApiRequestFactory, responseProcessor?: ApiproductosApiResponseProcessor);
    apiproductosCreateWithHttpInfo(param: ApiproductosApiApiproductosCreateRequest, options?: Configuration): Promise<HttpInfo<Productos>>;
    apiproductosCreate(param: ApiproductosApiApiproductosCreateRequest, options?: Configuration): Promise<Productos>;
    apiproductosDeleteWithHttpInfo(param: ApiproductosApiApiproductosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apiproductosDelete(param: ApiproductosApiApiproductosDeleteRequest, options?: Configuration): Promise<void>;
    apiproductosListWithHttpInfo(param?: ApiproductosApiApiproductosListRequest, options?: Configuration): Promise<HttpInfo<Array<Productos>>>;
    apiproductosList(param?: ApiproductosApiApiproductosListRequest, options?: Configuration): Promise<Array<Productos>>;
    apiproductosPartialUpdateWithHttpInfo(param: ApiproductosApiApiproductosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Productos>>;
    apiproductosPartialUpdate(param: ApiproductosApiApiproductosPartialUpdateRequest, options?: Configuration): Promise<Productos>;
    apiproductosReadWithHttpInfo(param: ApiproductosApiApiproductosReadRequest, options?: Configuration): Promise<HttpInfo<Productos>>;
    apiproductosRead(param: ApiproductosApiApiproductosReadRequest, options?: Configuration): Promise<Productos>;
    apiproductosUpdateWithHttpInfo(param: ApiproductosApiApiproductosUpdateRequest, options?: Configuration): Promise<HttpInfo<Productos>>;
    apiproductosUpdate(param: ApiproductosApiApiproductosUpdateRequest, options?: Configuration): Promise<Productos>;
}
import { ApistockApiRequestFactory, ApistockApiResponseProcessor } from "../apis/ApistockApi";
export interface ApistockApiApistockCreateRequest {
    data: Stock;
}
export interface ApistockApiApistockDeleteRequest {
    id: number;
}
export interface ApistockApiApistockListRequest {
    cantidad?: string;
    ordering?: string;
}
export interface ApistockApiApistockPartialUpdateRequest {
    id: number;
    data: Stock;
}
export interface ApistockApiApistockReadRequest {
    id: number;
}
export interface ApistockApiApistockUpdateRequest {
    id: number;
    data: Stock;
}
export declare class ObjectApistockApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApistockApiRequestFactory, responseProcessor?: ApistockApiResponseProcessor);
    apistockCreateWithHttpInfo(param: ApistockApiApistockCreateRequest, options?: Configuration): Promise<HttpInfo<Stock>>;
    apistockCreate(param: ApistockApiApistockCreateRequest, options?: Configuration): Promise<Stock>;
    apistockDeleteWithHttpInfo(param: ApistockApiApistockDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apistockDelete(param: ApistockApiApistockDeleteRequest, options?: Configuration): Promise<void>;
    apistockListWithHttpInfo(param?: ApistockApiApistockListRequest, options?: Configuration): Promise<HttpInfo<Array<Stock>>>;
    apistockList(param?: ApistockApiApistockListRequest, options?: Configuration): Promise<Array<Stock>>;
    apistockPartialUpdateWithHttpInfo(param: ApistockApiApistockPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Stock>>;
    apistockPartialUpdate(param: ApistockApiApistockPartialUpdateRequest, options?: Configuration): Promise<Stock>;
    apistockReadWithHttpInfo(param: ApistockApiApistockReadRequest, options?: Configuration): Promise<HttpInfo<Stock>>;
    apistockRead(param: ApistockApiApistockReadRequest, options?: Configuration): Promise<Stock>;
    apistockUpdateWithHttpInfo(param: ApistockApiApistockUpdateRequest, options?: Configuration): Promise<HttpInfo<Stock>>;
    apistockUpdate(param: ApistockApiApistockUpdateRequest, options?: Configuration): Promise<Stock>;
}
import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor } from "../apis/ApiusersApi";
export interface ApiusersApiApiusersCreateRequest {
    data: User;
}
export interface ApiusersApiApiusersDeleteRequest {
    id: number;
}
export interface ApiusersApiApiusersListRequest {
}
export interface ApiusersApiApiusersPartialUpdateRequest {
    id: number;
    data: User;
}
export interface ApiusersApiApiusersReadRequest {
    id: number;
}
export interface ApiusersApiApiusersUpdateRequest {
    id: number;
    data: User;
}
export declare class ObjectApiusersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApiusersApiRequestFactory, responseProcessor?: ApiusersApiResponseProcessor);
    apiusersCreateWithHttpInfo(param: ApiusersApiApiusersCreateRequest, options?: Configuration): Promise<HttpInfo<User>>;
    apiusersCreate(param: ApiusersApiApiusersCreateRequest, options?: Configuration): Promise<User>;
    apiusersDeleteWithHttpInfo(param: ApiusersApiApiusersDeleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    apiusersDelete(param: ApiusersApiApiusersDeleteRequest, options?: Configuration): Promise<void>;
    apiusersListWithHttpInfo(param?: ApiusersApiApiusersListRequest, options?: Configuration): Promise<HttpInfo<Array<User>>>;
    apiusersList(param?: ApiusersApiApiusersListRequest, options?: Configuration): Promise<Array<User>>;
    apiusersPartialUpdateWithHttpInfo(param: ApiusersApiApiusersPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<User>>;
    apiusersPartialUpdate(param: ApiusersApiApiusersPartialUpdateRequest, options?: Configuration): Promise<User>;
    apiusersReadWithHttpInfo(param: ApiusersApiApiusersReadRequest, options?: Configuration): Promise<HttpInfo<User>>;
    apiusersRead(param: ApiusersApiApiusersReadRequest, options?: Configuration): Promise<User>;
    apiusersUpdateWithHttpInfo(param: ApiusersApiApiusersUpdateRequest, options?: Configuration): Promise<HttpInfo<User>>;
    apiusersUpdate(param: ApiusersApiApiusersUpdateRequest, options?: Configuration): Promise<User>;
}
