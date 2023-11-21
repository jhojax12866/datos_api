import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Stock } from '../models/Stock';
export declare class ApistockApiRequestFactory extends BaseAPIRequestFactory {
    apistockCreate(data: Stock, _options?: Configuration): Promise<RequestContext>;
    apistockDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apistockList(cantidad?: string, ordering?: string, _options?: Configuration): Promise<RequestContext>;
    apistockPartialUpdate(id: number, data: Stock, _options?: Configuration): Promise<RequestContext>;
    apistockRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apistockUpdate(id: number, data: Stock, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApistockApiResponseProcessor {
    apistockCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Stock>>;
    apistockDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apistockListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Stock>>>;
    apistockPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Stock>>;
    apistockReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Stock>>;
    apistockUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Stock>>;
}
