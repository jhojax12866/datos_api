# .ApifacturaVCarteraApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apifacturaVCarteraCreate**](ApifacturaVCarteraApi.md#apifacturaVCarteraCreate) | **POST** /apifactura_v_cartera/ | 
[**apifacturaVCarteraDelete**](ApifacturaVCarteraApi.md#apifacturaVCarteraDelete) | **DELETE** /apifactura_v_cartera/{id}/ | 
[**apifacturaVCarteraList**](ApifacturaVCarteraApi.md#apifacturaVCarteraList) | **GET** /apifactura_v_cartera/ | 
[**apifacturaVCarteraPartialUpdate**](ApifacturaVCarteraApi.md#apifacturaVCarteraPartialUpdate) | **PATCH** /apifactura_v_cartera/{id}/ | 
[**apifacturaVCarteraRead**](ApifacturaVCarteraApi.md#apifacturaVCarteraRead) | **GET** /apifactura_v_cartera/{id}/ | 
[**apifacturaVCarteraUpdate**](ApifacturaVCarteraApi.md#apifacturaVCarteraUpdate) | **PUT** /apifactura_v_cartera/{id}/ | 


# **apifacturaVCarteraCreate**
> FacturaVCarteras apifacturaVCarteraCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVCarteraApi(configuration);

let body:.ApifacturaVCarteraApiApifacturaVCarteraCreateRequest = {
  // FacturaVCarteras
  data: {
    facturaVenta: 1,
    cartera: 1,
  },
};

apiInstance.apifacturaVCarteraCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVCarteras**|  |


### Return type

**FacturaVCarteras**

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

# **apifacturaVCarteraDelete**
> void apifacturaVCarteraDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVCarteraApi(configuration);

let body:.ApifacturaVCarteraApiApifacturaVCarteraDeleteRequest = {
  // number | A unique integer value identifying this factura_v_ cartera.
  id: 1,
};

apiInstance.apifacturaVCarteraDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_v_ cartera. | defaults to undefined


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

# **apifacturaVCarteraList**
> Array<FacturaVCarteras> apifacturaVCarteraList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVCarteraApi(configuration);

let body:any = {};

apiInstance.apifacturaVCarteraList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<FacturaVCarteras>**

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

# **apifacturaVCarteraPartialUpdate**
> FacturaVCarteras apifacturaVCarteraPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVCarteraApi(configuration);

let body:.ApifacturaVCarteraApiApifacturaVCarteraPartialUpdateRequest = {
  // number | A unique integer value identifying this factura_v_ cartera.
  id: 1,
  // FacturaVCarteras
  data: {
    facturaVenta: 1,
    cartera: 1,
  },
};

apiInstance.apifacturaVCarteraPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVCarteras**|  |
 **id** | [**number**] | A unique integer value identifying this factura_v_ cartera. | defaults to undefined


### Return type

**FacturaVCarteras**

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

# **apifacturaVCarteraRead**
> FacturaVCarteras apifacturaVCarteraRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVCarteraApi(configuration);

let body:.ApifacturaVCarteraApiApifacturaVCarteraReadRequest = {
  // number | A unique integer value identifying this factura_v_ cartera.
  id: 1,
};

apiInstance.apifacturaVCarteraRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_v_ cartera. | defaults to undefined


### Return type

**FacturaVCarteras**

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

# **apifacturaVCarteraUpdate**
> FacturaVCarteras apifacturaVCarteraUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVCarteraApi(configuration);

let body:.ApifacturaVCarteraApiApifacturaVCarteraUpdateRequest = {
  // number | A unique integer value identifying this factura_v_ cartera.
  id: 1,
  // FacturaVCarteras
  data: {
    facturaVenta: 1,
    cartera: 1,
  },
};

apiInstance.apifacturaVCarteraUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVCarteras**|  |
 **id** | [**number**] | A unique integer value identifying this factura_v_ cartera. | defaults to undefined


### Return type

**FacturaVCarteras**

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


