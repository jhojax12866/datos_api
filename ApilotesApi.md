# .ApilotesApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apilotesCreate**](ApilotesApi.md#apilotesCreate) | **POST** /apilotes/ | 
[**apilotesDelete**](ApilotesApi.md#apilotesDelete) | **DELETE** /apilotes/{id}/ | 
[**apilotesList**](ApilotesApi.md#apilotesList) | **GET** /apilotes/ | 
[**apilotesPartialUpdate**](ApilotesApi.md#apilotesPartialUpdate) | **PATCH** /apilotes/{id}/ | 
[**apilotesRead**](ApilotesApi.md#apilotesRead) | **GET** /apilotes/{id}/ | 
[**apilotesUpdate**](ApilotesApi.md#apilotesUpdate) | **PUT** /apilotes/{id}/ | 


# **apilotesCreate**
> Lotes apilotesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApilotesApi(configuration);

let body:.ApilotesApiApilotesCreateRequest = {
  // Lotes
  data: {
    productoLote: 1,
    cantidad: "cantidad_example",
    numeroLote: 0,
  },
};

apiInstance.apilotesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Lotes**|  |


### Return type

**Lotes**

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

# **apilotesDelete**
> void apilotesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApilotesApi(configuration);

let body:.ApilotesApiApilotesDeleteRequest = {
  // number | A unique integer value identifying this lote.
  id: 1,
};

apiInstance.apilotesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this lote. | defaults to undefined


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

# **apilotesList**
> Array<Lotes> apilotesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApilotesApi(configuration);

let body:.ApilotesApiApilotesListRequest = {
  // string | producto_lote (optional)
  productoLote: "producto_lote_example",
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
};

apiInstance.apilotesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productoLote** | [**string**] | producto_lote | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined


### Return type

**Array<Lotes>**

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

# **apilotesPartialUpdate**
> Lotes apilotesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApilotesApi(configuration);

let body:.ApilotesApiApilotesPartialUpdateRequest = {
  // number | A unique integer value identifying this lote.
  id: 1,
  // Lotes
  data: {
    productoLote: 1,
    cantidad: "cantidad_example",
    numeroLote: 0,
  },
};

apiInstance.apilotesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Lotes**|  |
 **id** | [**number**] | A unique integer value identifying this lote. | defaults to undefined


### Return type

**Lotes**

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

# **apilotesRead**
> Lotes apilotesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApilotesApi(configuration);

let body:.ApilotesApiApilotesReadRequest = {
  // number | A unique integer value identifying this lote.
  id: 1,
};

apiInstance.apilotesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this lote. | defaults to undefined


### Return type

**Lotes**

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

# **apilotesUpdate**
> Lotes apilotesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApilotesApi(configuration);

let body:.ApilotesApiApilotesUpdateRequest = {
  // number | A unique integer value identifying this lote.
  id: 1,
  // Lotes
  data: {
    productoLote: 1,
    cantidad: "cantidad_example",
    numeroLote: 0,
  },
};

apiInstance.apilotesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Lotes**|  |
 **id** | [**number**] | A unique integer value identifying this lote. | defaults to undefined


### Return type

**Lotes**

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


