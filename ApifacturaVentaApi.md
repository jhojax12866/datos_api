# .ApifacturaVentaApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apifacturaVentaCreate**](ApifacturaVentaApi.md#apifacturaVentaCreate) | **POST** /apifactura_venta/ | 
[**apifacturaVentaDelete**](ApifacturaVentaApi.md#apifacturaVentaDelete) | **DELETE** /apifactura_venta/{id}/ | 
[**apifacturaVentaList**](ApifacturaVentaApi.md#apifacturaVentaList) | **GET** /apifactura_venta/ | 
[**apifacturaVentaPartialUpdate**](ApifacturaVentaApi.md#apifacturaVentaPartialUpdate) | **PATCH** /apifactura_venta/{id}/ | 
[**apifacturaVentaRead**](ApifacturaVentaApi.md#apifacturaVentaRead) | **GET** /apifactura_venta/{id}/ | 
[**apifacturaVentaUpdate**](ApifacturaVentaApi.md#apifacturaVentaUpdate) | **PUT** /apifactura_venta/{id}/ | 


# **apifacturaVentaCreate**
> FacturaVentas apifacturaVentaCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVentaApi(configuration);

let body:.ApifacturaVentaApiApifacturaVentaCreateRequest = {
  // FacturaVentas
  data: {
    clienteF: 1,
    totalV: "totalV_example",
  },
};

apiInstance.apifacturaVentaCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVentas**|  |


### Return type

**FacturaVentas**

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

# **apifacturaVentaDelete**
> void apifacturaVentaDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVentaApi(configuration);

let body:.ApifacturaVentaApiApifacturaVentaDeleteRequest = {
  // number | A unique integer value identifying this factura_ venta.
  id: 1,
};

apiInstance.apifacturaVentaDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_ venta. | defaults to undefined


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

# **apifacturaVentaList**
> Array<FacturaVentas> apifacturaVentaList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVentaApi(configuration);

let body:any = {};

apiInstance.apifacturaVentaList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<FacturaVentas>**

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

# **apifacturaVentaPartialUpdate**
> FacturaVentas apifacturaVentaPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVentaApi(configuration);

let body:.ApifacturaVentaApiApifacturaVentaPartialUpdateRequest = {
  // number | A unique integer value identifying this factura_ venta.
  id: 1,
  // FacturaVentas
  data: {
    clienteF: 1,
    totalV: "totalV_example",
  },
};

apiInstance.apifacturaVentaPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVentas**|  |
 **id** | [**number**] | A unique integer value identifying this factura_ venta. | defaults to undefined


### Return type

**FacturaVentas**

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

# **apifacturaVentaRead**
> FacturaVentas apifacturaVentaRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVentaApi(configuration);

let body:.ApifacturaVentaApiApifacturaVentaReadRequest = {
  // number | A unique integer value identifying this factura_ venta.
  id: 1,
};

apiInstance.apifacturaVentaRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_ venta. | defaults to undefined


### Return type

**FacturaVentas**

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

# **apifacturaVentaUpdate**
> FacturaVentas apifacturaVentaUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApifacturaVentaApi(configuration);

let body:.ApifacturaVentaApiApifacturaVentaUpdateRequest = {
  // number | A unique integer value identifying this factura_ venta.
  id: 1,
  // FacturaVentas
  data: {
    clienteF: 1,
    totalV: "totalV_example",
  },
};

apiInstance.apifacturaVentaUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVentas**|  |
 **id** | [**number**] | A unique integer value identifying this factura_ venta. | defaults to undefined


### Return type

**FacturaVentas**

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


