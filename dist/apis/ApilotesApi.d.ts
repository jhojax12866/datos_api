import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Lotes } from '../models/Lotes';
export declare class ApilotesApiRequestFactory extends BaseAPIRequestFactory {
    apilotesCreate(data: Lotes, _options?: Configuration): Promise<RequestContext>;
    apilotesDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apilotesList(productoLote?: string, ordering?: string, _options?: Configuration): Promise<RequestContext>;
    apilotesPartialUpdate(id: number, data: Lotes, _options?: Configuration): Promise<RequestContext>;
    apilotesRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apilotesUpdate(id: number, data: Lotes, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApilotesApiResponseProcessor {
    apilotesCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Lotes>>;
    apilotesDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apilotesListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Lotes>>>;
    apilotesPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Lotes>>;
    apilotesReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Lotes>>;
    apilotesUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Lotes>>;
}
