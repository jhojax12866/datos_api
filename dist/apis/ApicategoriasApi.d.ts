import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Categorias } from '../models/Categorias';
export declare class ApicategoriasApiRequestFactory extends BaseAPIRequestFactory {
    apicategoriasCreate(data: Categorias, _options?: Configuration): Promise<RequestContext>;
    apicategoriasDelete(id: number, _options?: Configuration): Promise<RequestContext>;
    apicategoriasList(_options?: Configuration): Promise<RequestContext>;
    apicategoriasPartialUpdate(id: number, data: Categorias, _options?: Configuration): Promise<RequestContext>;
    apicategoriasRead(id: number, _options?: Configuration): Promise<RequestContext>;
    apicategoriasUpdate(id: number, data: Categorias, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApicategoriasApiResponseProcessor {
    apicategoriasCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categorias>>;
    apicategoriasDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    apicategoriasListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Categorias>>>;
    apicategoriasPartialUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categorias>>;
    apicategoriasReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categorias>>;
    apicategoriasUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categorias>>;
}
