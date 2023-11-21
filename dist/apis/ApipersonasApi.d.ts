import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Personas } from '../models/Personas';
export declare class ApipersonasApiRequestFactory extends BaseAPIRequestFactory {
    apipersonasCreate(data: Personas, _options?: Configuration): Promise<RequestContext>;
    apipersonasDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apipersonasList(nombre?: string, ordering?: string, _options?: Configuration): Promise<RequestContext>;
    apipersonasPartialUpdate(id: number, data: Personas, _options?: Configuration): Promise<RequestContext>;
    apipersonasRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apipersonasUpdate(id: number, data: Personas, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApipersonasApiResponseProcessor {
    apipersonasCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Personas>>;
    apipersonasDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apipersonasListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Personas>>>;
    apipersonasPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Personas>>;
    apipersonasReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Personas>>;
    apipersonasUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Personas>>;
}
