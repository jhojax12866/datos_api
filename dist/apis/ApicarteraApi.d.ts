import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Carteras } from '../models/Carteras';
export declare class ApicarteraApiRequestFactory extends BaseAPIRequestFactory {
    apicarteraCreate(data: Carteras, _options?: Configuration): Promise<RequestContext>;
    apicarteraDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apicarteraList(_options?: Configuration): Promise<RequestContext>;
    apicarteraPartialUpdate(id: number, data: Carteras, _options?: Configuration): Promise<RequestContext>;
    apicarteraRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apicarteraUpdate(id: number, data: Carteras, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApicarteraApiResponseProcessor {
    apicarteraCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Carteras>>;
    apicarteraDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apicarteraListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Carteras>>>;
    apicarteraPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Carteras>>;
    apicarteraReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Carteras>>;
    apicarteraUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Carteras>>;
}
