import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { TokenObtainPair } from '../models/TokenObtainPair';
export declare class ApiauthApiRequestFactory extends BaseAPIRequestFactory {
    apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Promise<RequestContext>;
    apiauthMeList(_options?: Configuration): Promise<RequestContext>;
}
export declare class ApiauthApiResponseProcessor {
    apiauthLoginCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TokenObtainPair>>;
    apiauthMeListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
