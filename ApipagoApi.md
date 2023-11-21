# .ApipagoApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apipagoCreate**](ApipagoApi.md#apipagoCreate) | **POST** /apipago/ | 
[**apipagoDelete**](ApipagoApi.md#apipagoDelete) | **DELETE** /apipago/{id}/ | 
[**apipagoList**](ApipagoApi.md#apipagoList) | **GET** /apipago/ | 
[**apipagoPartialUpdate**](ApipagoApi.md#apipagoPartialUpdate) | **PATCH** /apipago/{id}/ | 
[**apipagoRead**](ApipagoApi.md#apipagoRead) | **GET** /apipago/{id}/ | 
[**apipagoUpdate**](ApipagoApi.md#apipagoUpdate) | **PUT** /apipago/{id}/ | 


# **apipagoCreate**
> Pagos apipagoCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagoApi(configuration);

let body:.ApipagoApiApipagoCreateRequest = {
  // Pagos
  data: {
    medioPago: "Efectivo",
    estadoPago: "PENDIENTE",
    facturaV: 1,
    facturaC: 1,
  },
};

apiInstance.apipagoCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |


### Return type

**Pagos**

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

# **apipagoDelete**
> void apipagoDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagoApi(configuration);

let body:.ApipagoApiApipagoDeleteRequest = {
  // number | A unique integer value identifying this pago.
  id: 1,
};

apiInstance.apipagoDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this pago. | defaults to undefined


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

# **apipagoList**
> Array<Pagos> apipagoList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagoApi(configuration);

let body:any = {};

apiInstance.apipagoList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Pagos>**

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

# **apipagoPartialUpdate**
> Pagos apipagoPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagoApi(configuration);

let body:.ApipagoApiApipagoPartialUpdateRequest = {
  // number | A unique integer value identifying this pago.
  id: 1,
  // Pagos
  data: {
    medioPago: "Efectivo",
    estadoPago: "PENDIENTE",
    facturaV: 1,
    facturaC: 1,
  },
};

apiInstance.apipagoPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |
 **id** | [**number**] | A unique integer value identifying this pago. | defaults to undefined


### Return type

**Pagos**

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

# **apipagoRead**
> Pagos apipagoRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagoApi(configuration);

let body:.ApipagoApiApipagoReadRequest = {
  // number | A unique integer value identifying this pago.
  id: 1,
};

apiInstance.apipagoRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this pago. | defaults to undefined


### Return type

**Pagos**

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

# **apipagoUpdate**
> Pagos apipagoUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagoApi(configuration);

let body:.ApipagoApiApipagoUpdateRequest = {
  // number | A unique integer value identifying this pago.
  id: 1,
  // Pagos
  data: {
    medioPago: "Efectivo",
    estadoPago: "PENDIENTE",
    facturaV: 1,
    facturaC: 1,
  },
};

apiInstance.apipagoUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |
 **id** | [**number**] | A unique integer value identifying this pago. | defaults to undefined


### Return type

**Pagos**

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


