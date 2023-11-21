import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Pagos } from '../models/Pagos';
export declare class ApipagoApiRequestFactory extends BaseAPIRequestFactory {
    apipagoCreate(data: Pagos, _options?: Configuration): Promise<RequestContext>;
    apipagoDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apipagoList(_options?: Configuration): Promise<RequestContext>;
    apipagoPartialUpdate(id: number, data: Pagos, _options?: Configuration): Promise<RequestContext>;
    apipagoRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apipagoUpdate(id: number, data: Pagos, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApipagoApiResponseProcessor {
    apipagoCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pagos>>;
    apipagoDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apipagoListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Pagos>>>;
    apipagoPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pagos>>;
    apipagoReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pagos>>;
    apipagoUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pagos>>;
}
