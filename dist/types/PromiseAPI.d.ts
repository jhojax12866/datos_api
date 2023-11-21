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
export declare class PromiseApiauthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApiauthApiRequestFactory, responseProcessor?: ApiauthApiResponseProcessor);
    apiauthLoginCreateWithHttpInfo(data: TokenObtainPair, _options?: Configuration): Promise<HttpInfo<TokenObtainPair>>;
    apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Promise<TokenObtainPair>;
    apiauthMeListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>>;
    apiauthMeList(_options?: Configuration): Promise<void>;
}
import { ApicarteraApiRequestFactory, ApicarteraApiResponseProcessor } from "../apis/ApicarteraApi";
export declare class PromiseApicarteraApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApicarteraApiRequestFactory, responseProcessor?: ApicarteraApiResponseProcessor);
    apicarteraCreateWithHttpInfo(data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>>;
    apicarteraCreate(data: Carteras, _options?: Configuration): Promise<Carteras>;
    apicarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apicarteraDelete(id: number, _options?: Configuration): Promise<void>;
    apicarteraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Carteras>>>;
    apicarteraList(_options?: Configuration): Promise<Array<Carteras>>;
    apicarteraPartialUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>>;
    apicarteraPartialUpdate(id: number, data: Carteras, _options?: Configuration): Promise<Carteras>;
    apicarteraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Carteras>>;
    apicarteraRead(id: number, _options?: Configuration): Promise<Carteras>;
    apicarteraUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>>;
    apicarteraUpdate(id: number, data: Carteras, _options?: Configuration): Promise<Carteras>;
}
import { ApicategoriasApiRequestFactory, ApicategoriasApiResponseProcessor } from "../apis/ApicategoriasApi";
export declare class PromiseApicategoriasApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApicategoriasApiRequestFactory, responseProcessor?: ApicategoriasApiResponseProcessor);
    apicategoriasCreateWithHttpInfo(data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>>;
    apicategoriasCreate(data: Categorias, _options?: Configuration): Promise<Categorias>;
    apicategoriasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apicategoriasDelete(id: number, _options?: Configuration): Promise<void>;
    apicategoriasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Categorias>>>;
    apicategoriasList(_options?: Configuration): Promise<Array<Categorias>>;
    apicategoriasPartialUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>>;
    apicategoriasPartialUpdate(id: number, data: Categorias, _options?: Configuration): Promise<Categorias>;
    apicategoriasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Categorias>>;
    apicategoriasRead(id: number, _options?: Configuration): Promise<Categorias>;
    apicategoriasUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>>;
    apicategoriasUpdate(id: number, data: Categorias, _options?: Configuration): Promise<Categorias>;
}
import { ApidetalleCompraApiRequestFactory, ApidetalleCompraApiResponseProcessor } from "../apis/ApidetalleCompraApi";
export declare class PromiseApidetalleCompraApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApidetalleCompraApiRequestFactory, responseProcessor?: ApidetalleCompraApiResponseProcessor);
    apidetalleCompraCreateWithHttpInfo(data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraCreate(data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras>;
    apidetalleCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apidetalleCompraDelete(id: number, _options?: Configuration): Promise<void>;
    apidetalleCompraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DetalleCompras>>>;
    apidetalleCompraList(_options?: Configuration): Promise<Array<DetalleCompras>>;
    apidetalleCompraPartialUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraPartialUpdate(id: number, data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras>;
    apidetalleCompraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraRead(id: number, _options?: Configuration): Promise<DetalleCompras>;
    apidetalleCompraUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraUpdate(id: number, data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras>;
}
import { ApidetalleVentaApiRequestFactory, ApidetalleVentaApiResponseProcessor } from "../apis/ApidetalleVentaApi";
export declare class PromiseApidetalleVentaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApidetalleVentaApiRequestFactory, responseProcessor?: ApidetalleVentaApiResponseProcessor);
    apidetalleVentaCreateWithHttpInfo(data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaCreate(data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas>;
    apidetalleVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apidetalleVentaDelete(id: number, _options?: Configuration): Promise<void>;
    apidetalleVentaListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DetalleVentas>>>;
    apidetalleVentaList(_options?: Configuration): Promise<Array<DetalleVentas>>;
    apidetalleVentaPartialUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaPartialUpdate(id: number, data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas>;
    apidetalleVentaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaRead(id: number, _options?: Configuration): Promise<DetalleVentas>;
    apidetalleVentaUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaUpdate(id: number, data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas>;
}
import { ApifacturaCompraApiRequestFactory, ApifacturaCompraApiResponseProcessor } from "../apis/ApifacturaCompraApi";
export declare class PromiseApifacturaCompraApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApifacturaCompraApiRequestFactory, responseProcessor?: ApifacturaCompraApiResponseProcessor);
    apifacturaCompraCreateWithHttpInfo(data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraCreate(data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras>;
    apifacturaCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apifacturaCompraDelete(id: number, _options?: Configuration): Promise<void>;
    apifacturaCompraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaCompras>>>;
    apifacturaCompraList(_options?: Configuration): Promise<Array<FacturaCompras>>;
    apifacturaCompraPartialUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraPartialUpdate(id: number, data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras>;
    apifacturaCompraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraRead(id: number, _options?: Configuration): Promise<FacturaCompras>;
    apifacturaCompraUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraUpdate(id: number, data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras>;
}
import { ApifacturaVCarteraApiRequestFactory, ApifacturaVCarteraApiResponseProcessor } from "../apis/ApifacturaVCarteraApi";
export declare class PromiseApifacturaVCarteraApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApifacturaVCarteraApiRequestFactory, responseProcessor?: ApifacturaVCarteraApiResponseProcessor);
    apifacturaVCarteraCreateWithHttpInfo(data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraCreate(data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras>;
    apifacturaVCarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apifacturaVCarteraDelete(id: number, _options?: Configuration): Promise<void>;
    apifacturaVCarteraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaVCarteras>>>;
    apifacturaVCarteraList(_options?: Configuration): Promise<Array<FacturaVCarteras>>;
    apifacturaVCarteraPartialUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraPartialUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras>;
    apifacturaVCarteraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraRead(id: number, _options?: Configuration): Promise<FacturaVCarteras>;
    apifacturaVCarteraUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras>;
}
import { ApifacturaVentaApiRequestFactory, ApifacturaVentaApiResponseProcessor } from "../apis/ApifacturaVentaApi";
export declare class PromiseApifacturaVentaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApifacturaVentaApiRequestFactory, responseProcessor?: ApifacturaVentaApiResponseProcessor);
    apifacturaVentaCreateWithHttpInfo(data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaCreate(data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas>;
    apifacturaVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apifacturaVentaDelete(id: number, _options?: Configuration): Promise<void>;
    apifacturaVentaListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaVentas>>>;
    apifacturaVentaList(_options?: Configuration): Promise<Array<FacturaVentas>>;
    apifacturaVentaPartialUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaPartialUpdate(id: number, data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas>;
    apifacturaVentaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaRead(id: number, _options?: Configuration): Promise<FacturaVentas>;
    apifacturaVentaUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaUpdate(id: number, data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas>;
}
import { ApilotesApiRequestFactory, ApilotesApiResponseProcessor } from "../apis/ApilotesApi";
export declare class PromiseApilotesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApilotesApiRequestFactory, responseProcessor?: ApilotesApiResponseProcessor);
    apilotesCreateWithHttpInfo(data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>>;
    apilotesCreate(data: Lotes, _options?: Configuration): Promise<Lotes>;
    apilotesDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apilotesDelete(id: number, _options?: Configuration): Promise<void>;
    apilotesListWithHttpInfo(productoLote?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Lotes>>>;
    apilotesList(productoLote?: string, ordering?: string, _options?: Configuration): Promise<Array<Lotes>>;
    apilotesPartialUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>>;
    apilotesPartialUpdate(id: number, data: Lotes, _options?: Configuration): Promise<Lotes>;
    apilotesReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Lotes>>;
    apilotesRead(id: number, _options?: Configuration): Promise<Lotes>;
    apilotesUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>>;
    apilotesUpdate(id: number, data: Lotes, _options?: Configuration): Promise<Lotes>;
}
import { ApipagoApiRequestFactory, ApipagoApiResponseProcessor } from "../apis/ApipagoApi";
export declare class PromiseApipagoApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApipagoApiRequestFactory, responseProcessor?: ApipagoApiResponseProcessor);
    apipagoCreateWithHttpInfo(data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>>;
    apipagoCreate(data: Pagos, _options?: Configuration): Promise<Pagos>;
    apipagoDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apipagoDelete(id: number, _options?: Configuration): Promise<void>;
    apipagoListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Pagos>>>;
    apipagoList(_options?: Configuration): Promise<Array<Pagos>>;
    apipagoPartialUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>>;
    apipagoPartialUpdate(id: number, data: Pagos, _options?: Configuration): Promise<Pagos>;
    apipagoReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Pagos>>;
    apipagoRead(id: number, _options?: Configuration): Promise<Pagos>;
    apipagoUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>>;
    apipagoUpdate(id: number, data: Pagos, _options?: Configuration): Promise<Pagos>;
}
import { ApipersonasApiRequestFactory, ApipersonasApiResponseProcessor } from "../apis/ApipersonasApi";
export declare class PromiseApipersonasApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApipersonasApiRequestFactory, responseProcessor?: ApipersonasApiResponseProcessor);
    apipersonasCreateWithHttpInfo(data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>>;
    apipersonasCreate(data: Personas, _options?: Configuration): Promise<Personas>;
    apipersonasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apipersonasDelete(id: number, _options?: Configuration): Promise<void>;
    apipersonasListWithHttpInfo(nombre?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Personas>>>;
    apipersonasList(nombre?: string, ordering?: string, _options?: Configuration): Promise<Array<Personas>>;
    apipersonasPartialUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>>;
    apipersonasPartialUpdate(id: number, data: Personas, _options?: Configuration): Promise<Personas>;
    apipersonasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Personas>>;
    apipersonasRead(id: number, _options?: Configuration): Promise<Personas>;
    apipersonasUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>>;
    apipersonasUpdate(id: number, data: Personas, _options?: Configuration): Promise<Personas>;
}
import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor } from "../apis/ApiproductosApi";
export declare class PromiseApiproductosApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApiproductosApiRequestFactory, responseProcessor?: ApiproductosApiResponseProcessor);
    apiproductosCreateWithHttpInfo(data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>>;
    apiproductosCreate(data: Productos, _options?: Configuration): Promise<Productos>;
    apiproductosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apiproductosDelete(id: number, _options?: Configuration): Promise<void>;
    apiproductosListWithHttpInfo(categoria?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Productos>>>;
    apiproductosList(categoria?: string, ordering?: string, _options?: Configuration): Promise<Array<Productos>>;
    apiproductosPartialUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>>;
    apiproductosPartialUpdate(id: number, data: Productos, _options?: Configuration): Promise<Productos>;
    apiproductosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Productos>>;
    apiproductosRead(id: number, _options?: Configuration): Promise<Productos>;
    apiproductosUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>>;
    apiproductosUpdate(id: number, data: Productos, _options?: Configuration): Promise<Productos>;
}
import { ApistockApiRequestFactory, ApistockApiResponseProcessor } from "../apis/ApistockApi";
export declare class PromiseApistockApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApistockApiRequestFactory, responseProcessor?: ApistockApiResponseProcessor);
    apistockCreateWithHttpInfo(data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>>;
    apistockCreate(data: Stock, _options?: Configuration): Promise<Stock>;
    apistockDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apistockDelete(id: number, _options?: Configuration): Promise<void>;
    apistockListWithHttpInfo(cantidad?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Stock>>>;
    apistockList(cantidad?: string, ordering?: string, _options?: Configuration): Promise<Array<Stock>>;
    apistockPartialUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>>;
    apistockPartialUpdate(id: number, data: Stock, _options?: Configuration): Promise<Stock>;
    apistockReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Stock>>;
    apistockRead(id: number, _options?: Configuration): Promise<Stock>;
    apistockUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>>;
    apistockUpdate(id: number, data: Stock, _options?: Configuration): Promise<Stock>;
}
import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor } from "../apis/ApiusersApi";
export declare class PromiseApiusersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApiusersApiRequestFactory, responseProcessor?: ApiusersApiResponseProcessor);
    apiusersCreateWithHttpInfo(data: User, _options?: Configuration): Promise<HttpInfo<User>>;
    apiusersCreate(data: User, _options?: Configuration): Promise<User>;
    apiusersDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>>;
    apiusersDelete(id: number, _options?: Configuration): Promise<void>;
    apiusersListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<User>>>;
    apiusersList(_options?: Configuration): Promise<Array<User>>;
    apiusersPartialUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Promise<HttpInfo<User>>;
    apiusersPartialUpdate(id: number, data: User, _options?: Configuration): Promise<User>;
    apiusersReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<User>>;
    apiusersRead(id: number, _options?: Configuration): Promise<User>;
    apiusersUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Promise<HttpInfo<User>>;
    apiusersUpdate(id: number, data: User, _options?: Configuration): Promise<User>;
}
