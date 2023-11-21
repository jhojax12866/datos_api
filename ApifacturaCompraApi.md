# .ApifacturaCompraApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apifacturaCompraCreate**](ApifacturaCompraApi.md#apifacturaCompraCreate) | **POST** /apifactura_compra/ | 
[**apifacturaCompraDelete**](ApifacturaCompraApi.md#apifacturaCompraDelete) | **DELETE** /apifactura_compra/{id}/ | 
[**apifacturaCompraList**](ApifacturaCompraApi.md#apifacturaCompraList) | **GET** /apifactura_compra/ | 
[**apifacturaCompraPartialUpdate**](ApifacturaCompraApi.md#apifacturaCompraPartialUpdate) | **PATCH** /apifactura_compra/{id}/ | 
[**apifacturaCompraRead**](ApifacturaCompraApi.md#apifacturaCompraRead) | **GET** /apifactura_compra/{id}/ | 
[**apifacturaCompraUpdate**](ApifacturaCompraApi.md#apifacturaCompraUpdate) | **PUT** /apifactura_compra/{id}/ | 


# **apifacturaCompraCreate**
> FacturaCompras apifacturaCompraCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaCompraApi(configuration);

let body:.ApifacturaCompraApiApifacturaCompraCreateRequest = {
  // FacturaCompras
  data: {
    proveedorF: 1,
    totalC: "totalC_example",
  },
};

apiInstance.apifacturaCompraCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaCompras**|  |


### Return type

**FacturaCompras**

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

# **apifacturaCompraDelete**
> void apifacturaCompraDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaCompraApi(configuration);

let body:.ApifacturaCompraApiApifacturaCompraDeleteRequest = {
  // number | A unique integer value identifying this factura_ compra.
  id: 1,
};

apiInstance.apifacturaCompraDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_ compra. | defaults to undefined


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

# **apifacturaCompraList**
> Array<FacturaCompras> apifacturaCompraList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaCompraApi(configuration);

let body:any = {};

apiInstance.apifacturaCompraList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<FacturaCompras>**

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

# **apifacturaCompraPartialUpdate**
> FacturaCompras apifacturaCompraPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaCompraApi(configuration);

let body:.ApifacturaCompraApiApifacturaCompraPartialUpdateRequest = {
  // number | A unique integer value identifying this factura_ compra.
  id: 1,
  // FacturaCompras
  data: {
    proveedorF: 1,
    totalC: "totalC_example",
  },
};

apiInstance.apifacturaCompraPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaCompras**|  |
 **id** | [**number**] | A unique integer value identifying this factura_ compra. | defaults to undefined


### Return type

**FacturaCompras**

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

# **apifacturaCompraRead**
> FacturaCompras apifacturaCompraRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaCompraApi(configuration);

let body:.ApifacturaCompraApiApifacturaCompraReadRequest = {
  // number | A unique integer value identifying this factura_ compra.
  id: 1,
};

apiInstance.apifacturaCompraRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_ compra. | defaults to undefined


### Return type

**FacturaCompras**

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

# **apifacturaCompraUpdate**
> FacturaCompras apifacturaCompraUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaCompraApi(configuration);

let body:.ApifacturaCompraApiApifacturaCompraUpdateRequest = {
  // number | A unique integer value identifying this factura_ compra.
  id: 1,
  // FacturaCompras
  data: {
    proveedorF: 1,
    totalC: "totalC_example",
  },
};

apiInstance.apifacturaCompraUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaCompras**|  |
 **id** | [**number**] | A unique integer value identifying this factura_ compra. | defaults to undefined


### Return type

**FacturaCompras**

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


