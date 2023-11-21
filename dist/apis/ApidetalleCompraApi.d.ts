import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { DetalleCompras } from '../models/DetalleCompras';
export declare class ApidetalleCompraApiRequestFactory extends BaseAPIRequestFactory {
    apidetalleCompraCreate(data: DetalleCompras, _options?: Configuration): Promise<RequestContext>;
    apidetalleCompraDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apidetalleCompraList(_options?: Configuration): Promise<RequestContext>;
    apidetalleCompraPartialUpdate(id: number, data: DetalleCompras, _options?: Configuration): Promise<RequestContext>;
    apidetalleCompraRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apidetalleCompraUpdate(id: number, data: DetalleCompras, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApidetalleCompraApiResponseProcessor {
    apidetalleCompraCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apidetalleCompraListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<DetalleCompras>>>;
    apidetalleCompraPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetalleCompras>>;
    apidetalleCompraUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetalleCompras>>;
}
