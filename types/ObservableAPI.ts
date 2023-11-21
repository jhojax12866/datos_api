import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";
export class ObservableApiauthApi {
    private requestFactory: ApiauthApiRequestFactory;
    private responseProcessor: ApiauthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiauthApiRequestFactory,
        responseProcessor?: ApiauthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiauthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiauthApiResponseProcessor();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreateWithHttpInfo(data: TokenObtainPair, _options?: Configuration): Observable<HttpInfo<TokenObtainPair>> {
        const requestContextPromise = this.requestFactory.apiauthLoginCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiauthLoginCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Observable<TokenObtainPair> {
        return this.apiauthLoginCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TokenObtainPair>) => apiResponse.data));
    }

    /**
     */
    public apiauthMeListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiauthMeList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiauthMeListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiauthMeList(_options?: Configuration): Observable<void> {
        return this.apiauthMeListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ApicarteraApiRequestFactory, ApicarteraApiResponseProcessor} from "../apis/ApicarteraApi";
export class ObservableApicarteraApi {
    private requestFactory: ApicarteraApiRequestFactory;
    private responseProcessor: ApicarteraApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicarteraApiRequestFactory,
        responseProcessor?: ApicarteraApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApicarteraApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApicarteraApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apicarteraCreateWithHttpInfo(data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>> {
        const requestContextPromise = this.requestFactory.apicarteraCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicarteraCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apicarteraCreate(data: Carteras, _options?: Configuration): Observable<Carteras> {
        return this.apicarteraCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Carteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public apicarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apicarteraDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicarteraDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public apicarteraDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apicarteraDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apicarteraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Carteras>>> {
        const requestContextPromise = this.requestFactory.apicarteraList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicarteraListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apicarteraList(_options?: Configuration): Observable<Array<Carteras>> {
        return this.apicarteraListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Carteras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public apicarteraPartialUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>> {
        const requestContextPromise = this.requestFactory.apicarteraPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicarteraPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public apicarteraPartialUpdate(id: number, data: Carteras, _options?: Configuration): Observable<Carteras> {
        return this.apicarteraPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Carteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public apicarteraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Carteras>> {
        const requestContextPromise = this.requestFactory.apicarteraRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicarteraReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public apicarteraRead(id: number, _options?: Configuration): Observable<Carteras> {
        return this.apicarteraReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Carteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public apicarteraUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>> {
        const requestContextPromise = this.requestFactory.apicarteraUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicarteraUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public apicarteraUpdate(id: number, data: Carteras, _options?: Configuration): Observable<Carteras> {
        return this.apicarteraUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Carteras>) => apiResponse.data));
    }

}

import { ApicategoriasApiRequestFactory, ApicategoriasApiResponseProcessor} from "../apis/ApicategoriasApi";
export class ObservableApicategoriasApi {
    private requestFactory: ApicategoriasApiRequestFactory;
    private responseProcessor: ApicategoriasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicategoriasApiRequestFactory,
        responseProcessor?: ApicategoriasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApicategoriasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApicategoriasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apicategoriasCreateWithHttpInfo(data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>> {
        const requestContextPromise = this.requestFactory.apicategoriasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicategoriasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apicategoriasCreate(data: Categorias, _options?: Configuration): Observable<Categorias> {
        return this.apicategoriasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Categorias>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public apicategoriasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apicategoriasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicategoriasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public apicategoriasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apicategoriasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apicategoriasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Categorias>>> {
        const requestContextPromise = this.requestFactory.apicategoriasList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicategoriasListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apicategoriasList(_options?: Configuration): Observable<Array<Categorias>> {
        return this.apicategoriasListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Categorias>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public apicategoriasPartialUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>> {
        const requestContextPromise = this.requestFactory.apicategoriasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicategoriasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public apicategoriasPartialUpdate(id: number, data: Categorias, _options?: Configuration): Observable<Categorias> {
        return this.apicategoriasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Categorias>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public apicategoriasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Categorias>> {
        const requestContextPromise = this.requestFactory.apicategoriasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicategoriasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public apicategoriasRead(id: number, _options?: Configuration): Observable<Categorias> {
        return this.apicategoriasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Categorias>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public apicategoriasUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>> {
        const requestContextPromise = this.requestFactory.apicategoriasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicategoriasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public apicategoriasUpdate(id: number, data: Categorias, _options?: Configuration): Observable<Categorias> {
        return this.apicategoriasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Categorias>) => apiResponse.data));
    }

}

import { ApidetalleCompraApiRequestFactory, ApidetalleCompraApiResponseProcessor} from "../apis/ApidetalleCompraApi";
export class ObservableApidetalleCompraApi {
    private requestFactory: ApidetalleCompraApiRequestFactory;
    private responseProcessor: ApidetalleCompraApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApidetalleCompraApiRequestFactory,
        responseProcessor?: ApidetalleCompraApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApidetalleCompraApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApidetalleCompraApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apidetalleCompraCreateWithHttpInfo(data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>> {
        const requestContextPromise = this.requestFactory.apidetalleCompraCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleCompraCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apidetalleCompraCreate(data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras> {
        return this.apidetalleCompraCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<DetalleCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public apidetalleCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apidetalleCompraDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleCompraDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public apidetalleCompraDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apidetalleCompraDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apidetalleCompraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DetalleCompras>>> {
        const requestContextPromise = this.requestFactory.apidetalleCompraList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleCompraListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apidetalleCompraList(_options?: Configuration): Observable<Array<DetalleCompras>> {
        return this.apidetalleCompraListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DetalleCompras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public apidetalleCompraPartialUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>> {
        const requestContextPromise = this.requestFactory.apidetalleCompraPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleCompraPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public apidetalleCompraPartialUpdate(id: number, data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras> {
        return this.apidetalleCompraPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetalleCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public apidetalleCompraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<DetalleCompras>> {
        const requestContextPromise = this.requestFactory.apidetalleCompraRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleCompraReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public apidetalleCompraRead(id: number, _options?: Configuration): Observable<DetalleCompras> {
        return this.apidetalleCompraReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DetalleCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public apidetalleCompraUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>> {
        const requestContextPromise = this.requestFactory.apidetalleCompraUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleCompraUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public apidetalleCompraUpdate(id: number, data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras> {
        return this.apidetalleCompraUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetalleCompras>) => apiResponse.data));
    }

}

import { ApidetalleVentaApiRequestFactory, ApidetalleVentaApiResponseProcessor} from "../apis/ApidetalleVentaApi";
export class ObservableApidetalleVentaApi {
    private requestFactory: ApidetalleVentaApiRequestFactory;
    private responseProcessor: ApidetalleVentaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApidetalleVentaApiRequestFactory,
        responseProcessor?: ApidetalleVentaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApidetalleVentaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApidetalleVentaApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apidetalleVentaCreateWithHttpInfo(data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>> {
        const requestContextPromise = this.requestFactory.apidetalleVentaCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleVentaCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apidetalleVentaCreate(data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas> {
        return this.apidetalleVentaCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<DetalleVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public apidetalleVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apidetalleVentaDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleVentaDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public apidetalleVentaDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apidetalleVentaDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apidetalleVentaListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DetalleVentas>>> {
        const requestContextPromise = this.requestFactory.apidetalleVentaList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleVentaListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apidetalleVentaList(_options?: Configuration): Observable<Array<DetalleVentas>> {
        return this.apidetalleVentaListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DetalleVentas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public apidetalleVentaPartialUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>> {
        const requestContextPromise = this.requestFactory.apidetalleVentaPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleVentaPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public apidetalleVentaPartialUpdate(id: number, data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas> {
        return this.apidetalleVentaPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetalleVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public apidetalleVentaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<DetalleVentas>> {
        const requestContextPromise = this.requestFactory.apidetalleVentaRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleVentaReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public apidetalleVentaRead(id: number, _options?: Configuration): Observable<DetalleVentas> {
        return this.apidetalleVentaReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DetalleVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public apidetalleVentaUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>> {
        const requestContextPromise = this.requestFactory.apidetalleVentaUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetalleVentaUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public apidetalleVentaUpdate(id: number, data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas> {
        return this.apidetalleVentaUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetalleVentas>) => apiResponse.data));
    }

}

import { ApifacturaCompraApiRequestFactory, ApifacturaCompraApiResponseProcessor} from "../apis/ApifacturaCompraApi";
export class ObservableApifacturaCompraApi {
    private requestFactory: ApifacturaCompraApiRequestFactory;
    private responseProcessor: ApifacturaCompraApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApifacturaCompraApiRequestFactory,
        responseProcessor?: ApifacturaCompraApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApifacturaCompraApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApifacturaCompraApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apifacturaCompraCreateWithHttpInfo(data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>> {
        const requestContextPromise = this.requestFactory.apifacturaCompraCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaCompraCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apifacturaCompraCreate(data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras> {
        return this.apifacturaCompraCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<FacturaCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public apifacturaCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apifacturaCompraDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaCompraDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public apifacturaCompraDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apifacturaCompraDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apifacturaCompraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaCompras>>> {
        const requestContextPromise = this.requestFactory.apifacturaCompraList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaCompraListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apifacturaCompraList(_options?: Configuration): Observable<Array<FacturaCompras>> {
        return this.apifacturaCompraListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<FacturaCompras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public apifacturaCompraPartialUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>> {
        const requestContextPromise = this.requestFactory.apifacturaCompraPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaCompraPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public apifacturaCompraPartialUpdate(id: number, data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras> {
        return this.apifacturaCompraPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public apifacturaCompraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaCompras>> {
        const requestContextPromise = this.requestFactory.apifacturaCompraRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaCompraReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public apifacturaCompraRead(id: number, _options?: Configuration): Observable<FacturaCompras> {
        return this.apifacturaCompraReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FacturaCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public apifacturaCompraUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>> {
        const requestContextPromise = this.requestFactory.apifacturaCompraUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaCompraUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public apifacturaCompraUpdate(id: number, data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras> {
        return this.apifacturaCompraUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaCompras>) => apiResponse.data));
    }

}

import { ApifacturaVCarteraApiRequestFactory, ApifacturaVCarteraApiResponseProcessor} from "../apis/ApifacturaVCarteraApi";
export class ObservableApifacturaVCarteraApi {
    private requestFactory: ApifacturaVCarteraApiRequestFactory;
    private responseProcessor: ApifacturaVCarteraApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApifacturaVCarteraApiRequestFactory,
        responseProcessor?: ApifacturaVCarteraApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApifacturaVCarteraApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApifacturaVCarteraApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apifacturaVCarteraCreateWithHttpInfo(data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>> {
        const requestContextPromise = this.requestFactory.apifacturaVCarteraCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVCarteraCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apifacturaVCarteraCreate(data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras> {
        return this.apifacturaVCarteraCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<FacturaVCarteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public apifacturaVCarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apifacturaVCarteraDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVCarteraDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public apifacturaVCarteraDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apifacturaVCarteraDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apifacturaVCarteraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaVCarteras>>> {
        const requestContextPromise = this.requestFactory.apifacturaVCarteraList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVCarteraListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apifacturaVCarteraList(_options?: Configuration): Observable<Array<FacturaVCarteras>> {
        return this.apifacturaVCarteraListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<FacturaVCarteras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public apifacturaVCarteraPartialUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>> {
        const requestContextPromise = this.requestFactory.apifacturaVCarteraPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVCarteraPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public apifacturaVCarteraPartialUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras> {
        return this.apifacturaVCarteraPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaVCarteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public apifacturaVCarteraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>> {
        const requestContextPromise = this.requestFactory.apifacturaVCarteraRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVCarteraReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public apifacturaVCarteraRead(id: number, _options?: Configuration): Observable<FacturaVCarteras> {
        return this.apifacturaVCarteraReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FacturaVCarteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public apifacturaVCarteraUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>> {
        const requestContextPromise = this.requestFactory.apifacturaVCarteraUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVCarteraUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public apifacturaVCarteraUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras> {
        return this.apifacturaVCarteraUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaVCarteras>) => apiResponse.data));
    }

}

import { ApifacturaVentaApiRequestFactory, ApifacturaVentaApiResponseProcessor} from "../apis/ApifacturaVentaApi";
export class ObservableApifacturaVentaApi {
    private requestFactory: ApifacturaVentaApiRequestFactory;
    private responseProcessor: ApifacturaVentaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApifacturaVentaApiRequestFactory,
        responseProcessor?: ApifacturaVentaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApifacturaVentaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApifacturaVentaApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apifacturaVentaCreateWithHttpInfo(data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>> {
        const requestContextPromise = this.requestFactory.apifacturaVentaCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVentaCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apifacturaVentaCreate(data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas> {
        return this.apifacturaVentaCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<FacturaVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public apifacturaVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apifacturaVentaDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVentaDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public apifacturaVentaDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apifacturaVentaDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apifacturaVentaListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaVentas>>> {
        const requestContextPromise = this.requestFactory.apifacturaVentaList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVentaListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apifacturaVentaList(_options?: Configuration): Observable<Array<FacturaVentas>> {
        return this.apifacturaVentaListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<FacturaVentas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public apifacturaVentaPartialUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>> {
        const requestContextPromise = this.requestFactory.apifacturaVentaPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVentaPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public apifacturaVentaPartialUpdate(id: number, data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas> {
        return this.apifacturaVentaPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public apifacturaVentaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaVentas>> {
        const requestContextPromise = this.requestFactory.apifacturaVentaRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVentaReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public apifacturaVentaRead(id: number, _options?: Configuration): Observable<FacturaVentas> {
        return this.apifacturaVentaReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FacturaVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public apifacturaVentaUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>> {
        const requestContextPromise = this.requestFactory.apifacturaVentaUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apifacturaVentaUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public apifacturaVentaUpdate(id: number, data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas> {
        return this.apifacturaVentaUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaVentas>) => apiResponse.data));
    }

}

import { ApilotesApiRequestFactory, ApilotesApiResponseProcessor} from "../apis/ApilotesApi";
export class ObservableApilotesApi {
    private requestFactory: ApilotesApiRequestFactory;
    private responseProcessor: ApilotesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApilotesApiRequestFactory,
        responseProcessor?: ApilotesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApilotesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApilotesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apilotesCreateWithHttpInfo(data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>> {
        const requestContextPromise = this.requestFactory.apilotesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apilotesCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apilotesCreate(data: Lotes, _options?: Configuration): Observable<Lotes> {
        return this.apilotesCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Lotes>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public apilotesDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apilotesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apilotesDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public apilotesDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apilotesDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param productoLote producto_lote
     * @param ordering Which field to use when ordering the results.
     */
    public apilotesListWithHttpInfo(productoLote?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Lotes>>> {
        const requestContextPromise = this.requestFactory.apilotesList(productoLote, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apilotesListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param productoLote producto_lote
     * @param ordering Which field to use when ordering the results.
     */
    public apilotesList(productoLote?: string, ordering?: string, _options?: Configuration): Observable<Array<Lotes>> {
        return this.apilotesListWithHttpInfo(productoLote, ordering, _options).pipe(map((apiResponse: HttpInfo<Array<Lotes>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public apilotesPartialUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>> {
        const requestContextPromise = this.requestFactory.apilotesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apilotesPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public apilotesPartialUpdate(id: number, data: Lotes, _options?: Configuration): Observable<Lotes> {
        return this.apilotesPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Lotes>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public apilotesReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Lotes>> {
        const requestContextPromise = this.requestFactory.apilotesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apilotesReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public apilotesRead(id: number, _options?: Configuration): Observable<Lotes> {
        return this.apilotesReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Lotes>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public apilotesUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>> {
        const requestContextPromise = this.requestFactory.apilotesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apilotesUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public apilotesUpdate(id: number, data: Lotes, _options?: Configuration): Observable<Lotes> {
        return this.apilotesUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Lotes>) => apiResponse.data));
    }

}

import { ApipagoApiRequestFactory, ApipagoApiResponseProcessor} from "../apis/ApipagoApi";
export class ObservableApipagoApi {
    private requestFactory: ApipagoApiRequestFactory;
    private responseProcessor: ApipagoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApipagoApiRequestFactory,
        responseProcessor?: ApipagoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApipagoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApipagoApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apipagoCreateWithHttpInfo(data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.apipagoCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagoCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apipagoCreate(data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.apipagoCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public apipagoDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apipagoDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagoDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public apipagoDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apipagoDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apipagoListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Pagos>>> {
        const requestContextPromise = this.requestFactory.apipagoList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagoListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apipagoList(_options?: Configuration): Observable<Array<Pagos>> {
        return this.apipagoListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Pagos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public apipagoPartialUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.apipagoPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagoPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public apipagoPartialUpdate(id: number, data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.apipagoPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public apipagoReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.apipagoRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagoReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public apipagoRead(id: number, _options?: Configuration): Observable<Pagos> {
        return this.apipagoReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public apipagoUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.apipagoUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagoUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public apipagoUpdate(id: number, data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.apipagoUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

}

import { ApipersonasApiRequestFactory, ApipersonasApiResponseProcessor} from "../apis/ApipersonasApi";
export class ObservableApipersonasApi {
    private requestFactory: ApipersonasApiRequestFactory;
    private responseProcessor: ApipersonasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApipersonasApiRequestFactory,
        responseProcessor?: ApipersonasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApipersonasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApipersonasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apipersonasCreateWithHttpInfo(data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>> {
        const requestContextPromise = this.requestFactory.apipersonasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipersonasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apipersonasCreate(data: Personas, _options?: Configuration): Observable<Personas> {
        return this.apipersonasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Personas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public apipersonasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apipersonasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipersonasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public apipersonasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apipersonasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param nombre nombre
     * @param ordering Which field to use when ordering the results.
     */
    public apipersonasListWithHttpInfo(nombre?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Personas>>> {
        const requestContextPromise = this.requestFactory.apipersonasList(nombre, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipersonasListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param nombre nombre
     * @param ordering Which field to use when ordering the results.
     */
    public apipersonasList(nombre?: string, ordering?: string, _options?: Configuration): Observable<Array<Personas>> {
        return this.apipersonasListWithHttpInfo(nombre, ordering, _options).pipe(map((apiResponse: HttpInfo<Array<Personas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public apipersonasPartialUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>> {
        const requestContextPromise = this.requestFactory.apipersonasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipersonasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public apipersonasPartialUpdate(id: number, data: Personas, _options?: Configuration): Observable<Personas> {
        return this.apipersonasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Personas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public apipersonasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Personas>> {
        const requestContextPromise = this.requestFactory.apipersonasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipersonasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public apipersonasRead(id: number, _options?: Configuration): Observable<Personas> {
        return this.apipersonasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Personas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public apipersonasUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>> {
        const requestContextPromise = this.requestFactory.apipersonasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipersonasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public apipersonasUpdate(id: number, data: Personas, _options?: Configuration): Observable<Personas> {
        return this.apipersonasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Personas>) => apiResponse.data));
    }

}

import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor} from "../apis/ApiproductosApi";
export class ObservableApiproductosApi {
    private requestFactory: ApiproductosApiRequestFactory;
    private responseProcessor: ApiproductosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiproductosApiRequestFactory,
        responseProcessor?: ApiproductosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiproductosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiproductosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiproductosCreateWithHttpInfo(data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.apiproductosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiproductosCreate(data: Productos, _options?: Configuration): Observable<Productos> {
        return this.apiproductosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public apiproductosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiproductosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public apiproductosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiproductosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param categoria categoria
     * @param ordering Which field to use when ordering the results.
     */
    public apiproductosListWithHttpInfo(categoria?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Productos>>> {
        const requestContextPromise = this.requestFactory.apiproductosList(categoria, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param categoria categoria
     * @param ordering Which field to use when ordering the results.
     */
    public apiproductosList(categoria?: string, ordering?: string, _options?: Configuration): Observable<Array<Productos>> {
        return this.apiproductosListWithHttpInfo(categoria, ordering, _options).pipe(map((apiResponse: HttpInfo<Array<Productos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public apiproductosPartialUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.apiproductosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public apiproductosPartialUpdate(id: number, data: Productos, _options?: Configuration): Observable<Productos> {
        return this.apiproductosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public apiproductosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.apiproductosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public apiproductosRead(id: number, _options?: Configuration): Observable<Productos> {
        return this.apiproductosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public apiproductosUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.apiproductosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public apiproductosUpdate(id: number, data: Productos, _options?: Configuration): Observable<Productos> {
        return this.apiproductosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

}

import { ApistockApiRequestFactory, ApistockApiResponseProcessor} from "../apis/ApistockApi";
export class ObservableApistockApi {
    private requestFactory: ApistockApiRequestFactory;
    private responseProcessor: ApistockApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApistockApiRequestFactory,
        responseProcessor?: ApistockApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApistockApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApistockApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apistockCreateWithHttpInfo(data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>> {
        const requestContextPromise = this.requestFactory.apistockCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apistockCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apistockCreate(data: Stock, _options?: Configuration): Observable<Stock> {
        return this.apistockCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Stock>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public apistockDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apistockDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apistockDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public apistockDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apistockDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param cantidad cantidad
     * @param ordering Which field to use when ordering the results.
     */
    public apistockListWithHttpInfo(cantidad?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Stock>>> {
        const requestContextPromise = this.requestFactory.apistockList(cantidad, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apistockListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param cantidad cantidad
     * @param ordering Which field to use when ordering the results.
     */
    public apistockList(cantidad?: string, ordering?: string, _options?: Configuration): Observable<Array<Stock>> {
        return this.apistockListWithHttpInfo(cantidad, ordering, _options).pipe(map((apiResponse: HttpInfo<Array<Stock>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public apistockPartialUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>> {
        const requestContextPromise = this.requestFactory.apistockPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apistockPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public apistockPartialUpdate(id: number, data: Stock, _options?: Configuration): Observable<Stock> {
        return this.apistockPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Stock>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public apistockReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Stock>> {
        const requestContextPromise = this.requestFactory.apistockRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apistockReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public apistockRead(id: number, _options?: Configuration): Observable<Stock> {
        return this.apistockReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Stock>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public apistockUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>> {
        const requestContextPromise = this.requestFactory.apistockUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apistockUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public apistockUpdate(id: number, data: Stock, _options?: Configuration): Observable<Stock> {
        return this.apistockUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Stock>) => apiResponse.data));
    }

}

import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor} from "../apis/ApiusersApi";
export class ObservableApiusersApi {
    private requestFactory: ApiusersApiRequestFactory;
    private responseProcessor: ApiusersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiusersApiRequestFactory,
        responseProcessor?: ApiusersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiusersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiusersApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiusersCreateWithHttpInfo(data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiusersCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiusersCreate(data: User, _options?: Configuration): Observable<User> {
        return this.apiusersCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiusersDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiusersDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiusersListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<User>>> {
        const requestContextPromise = this.requestFactory.apiusersList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiusersList(_options?: Configuration): Observable<Array<User>> {
        return this.apiusersListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<User>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersPartialUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiusersPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersPartialUpdate(id: number, data: User, _options?: Configuration): Observable<User> {
        return this.apiusersPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiusersRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersRead(id: number, _options?: Configuration): Observable<User> {
        return this.apiusersReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiusersUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersUpdate(id: number, data: User, _options?: Configuration): Observable<User> {
        return this.apiusersUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}
