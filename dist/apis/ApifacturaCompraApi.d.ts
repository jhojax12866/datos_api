import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FacturaCompras } from '../models/FacturaCompras';
export declare class ApifacturaCompraApiRequestFactory extends BaseAPIRequestFactory {
    apifacturaCompraCreate(data: FacturaCompras, _options?: Configuration): Promise<RequestContext>;
    apifacturaCompraDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apifacturaCompraList(_options?: Configuration): Promise<RequestContext>;
    apifacturaCompraPartialUpdate(id: number, data: FacturaCompras, _options?: Configuration): Promise<RequestContext>;
    apifacturaCompraRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apifacturaCompraUpdate(id: number, data: FacturaCompras, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApifacturaCompraApiResponseProcessor {
    apifacturaCompraCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apifacturaCompraListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FacturaCompras>>>;
    apifacturaCompraPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaCompras>>;
    apifacturaCompraUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaCompras>>;
}
