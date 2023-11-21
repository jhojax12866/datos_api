import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { User } from '../models/User';
export declare class ApiusersApiRequestFactory extends BaseAPIRequestFactory {
    apiusersCreate(data: User, _options?: Configuration): Promise<RequestContext>;
    apiusersDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apiusersList(_options?: Configuration): Promise<RequestContext>;
    apiusersPartialUpdate(id: number, data: User, _options?: Configuration): Promise<RequestContext>;
    apiusersRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apiusersUpdate(id: number, data: User, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApiusersApiResponseProcessor {
    apiusersCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
    apiusersDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apiusersListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<User>>>;
    apiusersPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
    apiusersReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
    apiusersUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
}
