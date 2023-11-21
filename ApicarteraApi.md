# .ApicarteraApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apicarteraCreate**](ApicarteraApi.md#apicarteraCreate) | **POST** /apicartera/ | 
[**apicarteraDelete**](ApicarteraApi.md#apicarteraDelete) | **DELETE** /apicartera/{id}/ | 
[**apicarteraList**](ApicarteraApi.md#apicarteraList) | **GET** /apicartera/ | 
[**apicarteraPartialUpdate**](ApicarteraApi.md#apicarteraPartialUpdate) | **PATCH** /apicartera/{id}/ | 
[**apicarteraRead**](ApicarteraApi.md#apicarteraRead) | **GET** /apicartera/{id}/ | 
[**apicarteraUpdate**](ApicarteraApi.md#apicarteraUpdate) | **PUT** /apicartera/{id}/ | 


# **apicarteraCreate**
> Carteras apicarteraCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicarteraApi(configuration);

let body:.ApicarteraApiApicarteraCreateRequest = {
  // Carteras
  data: {
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
    pago: 1,
  },
};

apiInstance.apicarteraCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Carteras**|  |


### Return type

**Carteras**

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

# **apicarteraDelete**
> void apicarteraDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicarteraApi(configuration);

let body:.ApicarteraApiApicarteraDeleteRequest = {
  // number | A unique integer value identifying this cartera.
  id: 1,
};

apiInstance.apicarteraDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this cartera. | defaults to undefined


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

# **apicarteraList**
> Array<Carteras> apicarteraList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicarteraApi(configuration);

let body:any = {};

apiInstance.apicarteraList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Carteras>**

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

# **apicarteraPartialUpdate**
> Carteras apicarteraPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicarteraApi(configuration);

let body:.ApicarteraApiApicarteraPartialUpdateRequest = {
  // number | A unique integer value identifying this cartera.
  id: 1,
  // Carteras
  data: {
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
    pago: 1,
  },
};

apiInstance.apicarteraPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Carteras**|  |
 **id** | [**number**] | A unique integer value identifying this cartera. | defaults to undefined


### Return type

**Carteras**

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

# **apicarteraRead**
> Carteras apicarteraRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicarteraApi(configuration);

let body:.ApicarteraApiApicarteraReadRequest = {
  // number | A unique integer value identifying this cartera.
  id: 1,
};

apiInstance.apicarteraRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this cartera. | defaults to undefined


### Return type

**Carteras**

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

# **apicarteraUpdate**
> Carteras apicarteraUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicarteraApi(configuration);

let body:.ApicarteraApiApicarteraUpdateRequest = {
  // number | A unique integer value identifying this cartera.
  id: 1,
  // Carteras
  data: {
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
    pago: 1,
  },
};

apiInstance.apicarteraUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Carteras**|  |
 **id** | [**number**] | A unique integer value identifying this cartera. | defaults to undefined


### Return type

**Carteras**

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


