import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FacturaVentas } from '../models/FacturaVentas';
export declare class ApifacturaVentaApiRequestFactory extends BaseAPIRequestFactory {
    apifacturaVentaCreate(data: FacturaVentas, _options?: Configuration): Promise<RequestContext>;
    apifacturaVentaDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apifacturaVentaList(_options?: Configuration): Promise<RequestContext>;
    apifacturaVentaPartialUpdate(id: number, data: FacturaVentas, _options?: Configuration): Promise<RequestContext>;
    apifacturaVentaRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apifacturaVentaUpdate(id: number, data: FacturaVentas, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApifacturaVentaApiResponseProcessor {
    apifacturaVentaCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apifacturaVentaListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FacturaVentas>>>;
    apifacturaVentaPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaVentas>>;
    apifacturaVentaUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaVentas>>;
}
