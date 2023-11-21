import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Productos } from '../models/Productos';
export declare class ApiproductosApiRequestFactory extends BaseAPIRequestFactory {
    apiproductosCreate(data: Productos, _options?: Configuration): Promise<RequestContext>;
    apiproductosDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apiproductosList(categoria?: string, ordering?: string, _options?: Configuration): Promise<RequestContext>;
    apiproductosPartialUpdate(id: number, data: Productos, _options?: Configuration): Promise<RequestContext>;
    apiproductosRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apiproductosUpdate(id: number, data: Productos, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApiproductosApiResponseProcessor {
    apiproductosCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Productos>>;
    apiproductosDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apiproductosListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Productos>>>;
    apiproductosPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Productos>>;
    apiproductosReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Productos>>;
    apiproductosUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Productos>>;
}
