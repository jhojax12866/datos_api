import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableApiauthApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApiauthApiRequestFactory, responseProcessor?: ApiauthApiResponseProcessor);
    apiauthLoginCreateWithHttpInfo(data: TokenObtainPair, _options?: Configuration): Observable<HttpInfo<TokenObtainPair>>;
    apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Observable<TokenObtainPair>;
    apiauthMeListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>>;
    apiauthMeList(_options?: Configuration): Observable<void>;
}
import { ApicarteraApiRequestFactory, ApicarteraApiResponseProcessor } from "../apis/ApicarteraApi";
export declare class ObservableApicarteraApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApicarteraApiRequestFactory, responseProcessor?: ApicarteraApiResponseProcessor);
    apicarteraCreateWithHttpInfo(data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>>;
    apicarteraCreate(data: Carteras, _options?: Configuration): Observable<Carteras>;
    apicarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apicarteraDelete(id: number, _options?: Configuration): Observable<void>;
    apicarteraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Carteras>>>;
    apicarteraList(_options?: Configuration): Observable<Array<Carteras>>;
    apicarteraPartialUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>>;
    apicarteraPartialUpdate(id: number, data: Carteras, _options?: Configuration): Observable<Carteras>;
    apicarteraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Carteras>>;
    apicarteraRead(id: number, _options?: Configuration): Observable<Carteras>;
    apicarteraUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>>;
    apicarteraUpdate(id: number, data: Carteras, _options?: Configuration): Observable<Carteras>;
}
import { ApicategoriasApiRequestFactory, ApicategoriasApiResponseProcessor } from "../apis/ApicategoriasApi";
export declare class ObservableApicategoriasApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApicategoriasApiRequestFactory, responseProcessor?: ApicategoriasApiResponseProcessor);
    apicategoriasCreateWithHttpInfo(data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>>;
    apicategoriasCreate(data: Categorias, _options?: Configuration): Observable<Categorias>;
    apicategoriasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apicategoriasDelete(id: number, _options?: Configuration): Observable<void>;
    apicategoriasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Categorias>>>;
    apicategoriasList(_options?: Configuration): Observable<Array<Categorias>>;
    apicategoriasPartialUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>>;
    apicategoriasPartialUpdate(id: number, data: Categorias, _options?: Configuration): Observable<Categorias>;
    apicategoriasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Categorias>>;
    apicategoriasRead(id: number, _options?: Configuration): Observable<Categorias>;
    apicategoriasUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>>;
    apicategoriasUpdate(id: number, data: Categorias, _options?: Configuration): Observable<Categorias>;
}
import { ApidetalleCompraApiRequestFactory, ApidetalleCompraApiResponseProcessor } from "../apis/ApidetalleCompraApi";
export declare class ObservableApidetalleCompraApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApidetalleCompraApiRequestFactory, responseProcessor?: ApidetalleCompraApiResponseProcessor);
    apidetalleCompraCreateWithHttpInfo(data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>>;
    apidetalleCompraCreate(data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras>;
    apidetalleCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apidetalleCompraDelete(id: number, _options?: Configuration): Observable<void>;
    apidetalleCompraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DetalleCompras>>>;
    apidetalleCompraList(_options?: Configuration): Observable<Array<DetalleCompras>>;
    apidetalleCompraPartialUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>>;
    apidetalleCompraPartialUpdate(id: number, data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras>;
    apidetalleCompraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<DetalleCompras>>;
    apidetalleCompraRead(id: number, _options?: Configuration): Observable<DetalleCompras>;
    apidetalleCompraUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>>;
    apidetalleCompraUpdate(id: number, data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras>;
}
import { ApidetalleVentaApiRequestFactory, ApidetalleVentaApiResponseProcessor } from "../apis/ApidetalleVentaApi";
export declare class ObservableApidetalleVentaApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApidetalleVentaApiRequestFactory, responseProcessor?: ApidetalleVentaApiResponseProcessor);
    apidetalleVentaCreateWithHttpInfo(data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>>;
    apidetalleVentaCreate(data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas>;
    apidetalleVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apidetalleVentaDelete(id: number, _options?: Configuration): Observable<void>;
    apidetalleVentaListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DetalleVentas>>>;
    apidetalleVentaList(_options?: Configuration): Observable<Array<DetalleVentas>>;
    apidetalleVentaPartialUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>>;
    apidetalleVentaPartialUpdate(id: number, data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas>;
    apidetalleVentaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<DetalleVentas>>;
    apidetalleVentaRead(id: number, _options?: Configuration): Observable<DetalleVentas>;
    apidetalleVentaUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>>;
    apidetalleVentaUpdate(id: number, data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas>;
}
import { ApifacturaCompraApiRequestFactory, ApifacturaCompraApiResponseProcessor } from "../apis/ApifacturaCompraApi";
export declare class ObservableApifacturaCompraApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApifacturaCompraApiRequestFactory, responseProcessor?: ApifacturaCompraApiResponseProcessor);
    apifacturaCompraCreateWithHttpInfo(data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>>;
    apifacturaCompraCreate(data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras>;
    apifacturaCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apifacturaCompraDelete(id: number, _options?: Configuration): Observable<void>;
    apifacturaCompraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaCompras>>>;
    apifacturaCompraList(_options?: Configuration): Observable<Array<FacturaCompras>>;
    apifacturaCompraPartialUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>>;
    apifacturaCompraPartialUpdate(id: number, data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras>;
    apifacturaCompraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaCompras>>;
    apifacturaCompraRead(id: number, _options?: Configuration): Observable<FacturaCompras>;
    apifacturaCompraUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>>;
    apifacturaCompraUpdate(id: number, data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras>;
}
import { ApifacturaVCarteraApiRequestFactory, ApifacturaVCarteraApiResponseProcessor } from "../apis/ApifacturaVCarteraApi";
export declare class ObservableApifacturaVCarteraApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApifacturaVCarteraApiRequestFactory, responseProcessor?: ApifacturaVCarteraApiResponseProcessor);
    apifacturaVCarteraCreateWithHttpInfo(data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraCreate(data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras>;
    apifacturaVCarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apifacturaVCarteraDelete(id: number, _options?: Configuration): Observable<void>;
    apifacturaVCarteraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaVCarteras>>>;
    apifacturaVCarteraList(_options?: Configuration): Observable<Array<FacturaVCarteras>>;
    apifacturaVCarteraPartialUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraPartialUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras>;
    apifacturaVCarteraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraRead(id: number, _options?: Configuration): Observable<FacturaVCarteras>;
    apifacturaVCarteraUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras>;
}
import { ApifacturaVentaApiRequestFactory, ApifacturaVentaApiResponseProcessor } from "../apis/ApifacturaVentaApi";
export declare class ObservableApifacturaVentaApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApifacturaVentaApiRequestFactory, responseProcessor?: ApifacturaVentaApiResponseProcessor);
    apifacturaVentaCreateWithHttpInfo(data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>>;
    apifacturaVentaCreate(data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas>;
    apifacturaVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apifacturaVentaDelete(id: number, _options?: Configuration): Observable<void>;
    apifacturaVentaListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaVentas>>>;
    apifacturaVentaList(_options?: Configuration): Observable<Array<FacturaVentas>>;
    apifacturaVentaPartialUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>>;
    apifacturaVentaPartialUpdate(id: number, data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas>;
    apifacturaVentaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaVentas>>;
    apifacturaVentaRead(id: number, _options?: Configuration): Observable<FacturaVentas>;
    apifacturaVentaUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>>;
    apifacturaVentaUpdate(id: number, data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas>;
}
import { ApilotesApiRequestFactory, ApilotesApiResponseProcessor } from "../apis/ApilotesApi";
export declare class ObservableApilotesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApilotesApiRequestFactory, responseProcessor?: ApilotesApiResponseProcessor);
    apilotesCreateWithHttpInfo(data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>>;
    apilotesCreate(data: Lotes, _options?: Configuration): Observable<Lotes>;
    apilotesDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apilotesDelete(id: number, _options?: Configuration): Observable<void>;
    apilotesListWithHttpInfo(productoLote?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Lotes>>>;
    apilotesList(productoLote?: string, ordering?: string, _options?: Configuration): Observable<Array<Lotes>>;
    apilotesPartialUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>>;
    apilotesPartialUpdate(id: number, data: Lotes, _options?: Configuration): Observable<Lotes>;
    apilotesReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Lotes>>;
    apilotesRead(id: number, _options?: Configuration): Observable<Lotes>;
    apilotesUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>>;
    apilotesUpdate(id: number, data: Lotes, _options?: Configuration): Observable<Lotes>;
}
import { ApipagoApiRequestFactory, ApipagoApiResponseProcessor } from "../apis/ApipagoApi";
export declare class ObservableApipagoApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApipagoApiRequestFactory, responseProcessor?: ApipagoApiResponseProcessor);
    apipagoCreateWithHttpInfo(data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>>;
    apipagoCreate(data: Pagos, _options?: Configuration): Observable<Pagos>;
    apipagoDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apipagoDelete(id: number, _options?: Configuration): Observable<void>;
    apipagoListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Pagos>>>;
    apipagoList(_options?: Configuration): Observable<Array<Pagos>>;
    apipagoPartialUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>>;
    apipagoPartialUpdate(id: number, data: Pagos, _options?: Configuration): Observable<Pagos>;
    apipagoReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Pagos>>;
    apipagoRead(id: number, _options?: Configuration): Observable<Pagos>;
    apipagoUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>>;
    apipagoUpdate(id: number, data: Pagos, _options?: Configuration): Observable<Pagos>;
}
import { ApipersonasApiRequestFactory, ApipersonasApiResponseProcessor } from "../apis/ApipersonasApi";
export declare class ObservableApipersonasApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApipersonasApiRequestFactory, responseProcessor?: ApipersonasApiResponseProcessor);
    apipersonasCreateWithHttpInfo(data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>>;
    apipersonasCreate(data: Personas, _options?: Configuration): Observable<Personas>;
    apipersonasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apipersonasDelete(id: number, _options?: Configuration): Observable<void>;
    apipersonasListWithHttpInfo(nombre?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Personas>>>;
    apipersonasList(nombre?: string, ordering?: string, _options?: Configuration): Observable<Array<Personas>>;
    apipersonasPartialUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>>;
    apipersonasPartialUpdate(id: number, data: Personas, _options?: Configuration): Observable<Personas>;
    apipersonasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Personas>>;
    apipersonasRead(id: number, _options?: Configuration): Observable<Personas>;
    apipersonasUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>>;
    apipersonasUpdate(id: number, data: Personas, _options?: Configuration): Observable<Personas>;
}
import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor } from "../apis/ApiproductosApi";
export declare class ObservableApiproductosApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApiproductosApiRequestFactory, responseProcessor?: ApiproductosApiResponseProcessor);
    apiproductosCreateWithHttpInfo(data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>>;
    apiproductosCreate(data: Productos, _options?: Configuration): Observable<Productos>;
    apiproductosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apiproductosDelete(id: number, _options?: Configuration): Observable<void>;
    apiproductosListWithHttpInfo(categoria?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Productos>>>;
    apiproductosList(categoria?: string, ordering?: string, _options?: Configuration): Observable<Array<Productos>>;
    apiproductosPartialUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>>;
    apiproductosPartialUpdate(id: number, data: Productos, _options?: Configuration): Observable<Productos>;
    apiproductosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Productos>>;
    apiproductosRead(id: number, _options?: Configuration): Observable<Productos>;
    apiproductosUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>>;
    apiproductosUpdate(id: number, data: Productos, _options?: Configuration): Observable<Productos>;
}
import { ApistockApiRequestFactory, ApistockApiResponseProcessor } from "../apis/ApistockApi";
export declare class ObservableApistockApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApistockApiRequestFactory, responseProcessor?: ApistockApiResponseProcessor);
    apistockCreateWithHttpInfo(data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>>;
    apistockCreate(data: Stock, _options?: Configuration): Observable<Stock>;
    apistockDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apistockDelete(id: number, _options?: Configuration): Observable<void>;
    apistockListWithHttpInfo(cantidad?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Stock>>>;
    apistockList(cantidad?: string, ordering?: string, _options?: Configuration): Observable<Array<Stock>>;
    apistockPartialUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>>;
    apistockPartialUpdate(id: number, data: Stock, _options?: Configuration): Observable<Stock>;
    apistockReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Stock>>;
    apistockRead(id: number, _options?: Configuration): Observable<Stock>;
    apistockUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>>;
    apistockUpdate(id: number, data: Stock, _options?: Configuration): Observable<Stock>;
}
import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor } from "../apis/ApiusersApi";
export declare class ObservableApiusersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApiusersApiRequestFactory, responseProcessor?: ApiusersApiResponseProcessor);
    apiusersCreateWithHttpInfo(data: User, _options?: Configuration): Observable<HttpInfo<User>>;
    apiusersCreate(data: User, _options?: Configuration): Observable<User>;
    apiusersDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>>;
    apiusersDelete(id: number, _options?: Configuration): Observable<void>;
    apiusersListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<User>>>;
    apiusersList(_options?: Configuration): Observable<Array<User>>;
    apiusersPartialUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Observable<HttpInfo<User>>;
    apiusersPartialUpdate(id: number, data: User, _options?: Configuration): Observable<User>;
    apiusersReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<User>>;
    apiusersRead(id: number, _options?: Configuration): Observable<User>;
    apiusersUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Observable<HttpInfo<User>>;
    apiusersUpdate(id: number, data: User, _options?: Configuration): Observable<User>;
}
