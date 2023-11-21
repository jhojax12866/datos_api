# .ApicategoriasApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apicategoriasCreate**](ApicategoriasApi.md#apicategoriasCreate) | **POST** /apicategorias/ | 
[**apicategoriasDelete**](ApicategoriasApi.md#apicategoriasDelete) | **DELETE** /apicategorias/{id}/ | 
[**apicategoriasList**](ApicategoriasApi.md#apicategoriasList) | **GET** /apicategorias/ | 
[**apicategoriasPartialUpdate**](ApicategoriasApi.md#apicategoriasPartialUpdate) | **PATCH** /apicategorias/{id}/ | 
[**apicategoriasRead**](ApicategoriasApi.md#apicategoriasRead) | **GET** /apicategorias/{id}/ | 
[**apicategoriasUpdate**](ApicategoriasApi.md#apicategoriasUpdate) | **PUT** /apicategorias/{id}/ | 


# **apicategoriasCreate**
> Categorias apicategoriasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicategoriasApi(configuration);

let body:.ApicategoriasApiApicategoriasCreateRequest = {
  // Categorias
  data: {
    descripcion: "descripcion_example",
  },
};

apiInstance.apicategoriasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Categorias**|  |


### Return type

**Categorias**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apicategoriasDelete**
> void apicategoriasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicategoriasApi(configuration);

let body:.ApicategoriasApiApicategoriasDeleteRequest = {
  // number | A unique integer value identifying this categoria.
  id: 1,
};

apiInstance.apicategoriasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this categoria. | defaults to undefined


### Return type

**void**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apicategoriasList**
> Array<Categorias> apicategoriasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicategoriasApi(configuration);

let body:any = {};

apiInstance.apicategoriasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Categorias>**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apicategoriasPartialUpdate**
> Categorias apicategoriasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicategoriasApi(configuration);

let body:.ApicategoriasApiApicategoriasPartialUpdateRequest = {
  // number | A unique integer value identifying this categoria.
  id: 1,
  // Categorias
  data: {
    descripcion: "descripcion_example",
  },
};

apiInstance.apicategoriasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Categorias**|  |
 **id** | [**number**] | A unique integer value identifying this categoria. | defaults to undefined


### Return type

**Categorias**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apicategoriasRead**
> Categorias apicategoriasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicategoriasApi(configuration);

let body:.ApicategoriasApiApicategoriasReadRequest = {
  // number | A unique integer value identifying this categoria.
  id: 1,
};

apiInstance.apicategoriasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this categoria. | defaults to undefined


### Return type

**Categorias**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apicategoriasUpdate**
> Categorias apicategoriasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicategoriasApi(configuration);

let body:.ApicategoriasApiApicategoriasUpdateRequest = {
  // number | A unique integer value identifying this categoria.
  id: 1,
  // Categorias
  data: {
    descripcion: "descripcion_example",
  },
};

apiInstance.apicategoriasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Categorias**|  |
 **id** | [**number**] | A unique integer value identifying this categoria. | defaults to undefined


### Return type

**Categorias**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


