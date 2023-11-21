import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { DetalleVentas } from '../models/DetalleVentas';
export declare class ApidetalleVentaApiRequestFactory extends BaseAPIRequestFactory {
    apidetalleVentaCreate(data: DetalleVentas, _options?: Configuration): Promise<RequestContext>;
    apidetalleVentaDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apidetalleVentaList(_options?: Configuration): Promise<RequestContext>;
    apidetalleVentaPartialUpdate(id: number, data: DetalleVentas, _options?: Configuration): Promise<RequestContext>;
    apidetalleVentaRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apidetalleVentaUpdate(id: number, data: DetalleVentas, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApidetalleVentaApiResponseProcessor {
    apidetalleVentaCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apidetalleVentaListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<DetalleVentas>>>;
    apidetalleVentaPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetalleVentas>>;
    apidetalleVentaUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetalleVentas>>;
}
