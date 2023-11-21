import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FacturaVCarteras } from '../models/FacturaVCarteras';
export declare class ApifacturaVCarteraApiRequestFactory extends BaseAPIRequestFactory {
    apifacturaVCarteraCreate(data: FacturaVCarteras, _options?: Configuration): Promise<RequestContext>;
    apifacturaVCarteraDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apifacturaVCarteraList(_options?: Configuration): Promise<RequestContext>;
    apifacturaVCarteraPartialUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<RequestContext>;
    apifacturaVCarteraRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apifacturaVCarteraUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApifacturaVCarteraApiResponseProcessor {
    apifacturaVCarteraCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apifacturaVCarteraListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FacturaVCarteras>>>;
    apifacturaVCarteraPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaVCarteras>>;
    apifacturaVCarteraUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FacturaVCarteras>>;
}
