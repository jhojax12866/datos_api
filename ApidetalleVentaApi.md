# .ApidetalleVentaApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apidetalleVentaCreate**](ApidetalleVentaApi.md#apidetalleVentaCreate) | **POST** /apidetalle_venta/ | 
[**apidetalleVentaDelete**](ApidetalleVentaApi.md#apidetalleVentaDelete) | **DELETE** /apidetalle_venta/{id}/ | 
[**apidetalleVentaList**](ApidetalleVentaApi.md#apidetalleVentaList) | **GET** /apidetalle_venta/ | 
[**apidetalleVentaPartialUpdate**](ApidetalleVentaApi.md#apidetalleVentaPartialUpdate) | **PATCH** /apidetalle_venta/{id}/ | 
[**apidetalleVentaRead**](ApidetalleVentaApi.md#apidetalleVentaRead) | **GET** /apidetalle_venta/{id}/ | 
[**apidetalleVentaUpdate**](ApidetalleVentaApi.md#apidetalleVentaUpdate) | **PUT** /apidetalle_venta/{id}/ | 


# **apidetalleVentaCreate**
> DetalleVentas apidetalleVentaCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleVentaApi(configuration);

let body:.ApidetalleVentaApiApidetalleVentaCreateRequest = {
  // DetalleVentas
  data: {
    facturaVenta: 1,
    productoVenta: 1,
    cantidad: 0,
    precioProducto: "precioProducto_example",
  },
};

apiInstance.apidetalleVentaCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleVentas**|  |


### Return type

**DetalleVentas**

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

# **apidetalleVentaDelete**
> void apidetalleVentaDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleVentaApi(configuration);

let body:.ApidetalleVentaApiApidetalleVentaDeleteRequest = {
  // number | A unique integer value identifying this detalle_ venta.
  id: 1,
};

apiInstance.apidetalleVentaDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalle_ venta. | defaults to undefined


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

# **apidetalleVentaList**
> Array<DetalleVentas> apidetalleVentaList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleVentaApi(configuration);

let body:any = {};

apiInstance.apidetalleVentaList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DetalleVentas>**

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

# **apidetalleVentaPartialUpdate**
> DetalleVentas apidetalleVentaPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleVentaApi(configuration);

let body:.ApidetalleVentaApiApidetalleVentaPartialUpdateRequest = {
  // number | A unique integer value identifying this detalle_ venta.
  id: 1,
  // DetalleVentas
  data: {
    facturaVenta: 1,
    productoVenta: 1,
    cantidad: 0,
    precioProducto: "precioProducto_example",
  },
};

apiInstance.apidetalleVentaPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleVentas**|  |
 **id** | [**number**] | A unique integer value identifying this detalle_ venta. | defaults to undefined


### Return type

**DetalleVentas**

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

# **apidetalleVentaRead**
> DetalleVentas apidetalleVentaRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleVentaApi(configuration);

let body:.ApidetalleVentaApiApidetalleVentaReadRequest = {
  // number | A unique integer value identifying this detalle_ venta.
  id: 1,
};

apiInstance.apidetalleVentaRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalle_ venta. | defaults to undefined


### Return type

**DetalleVentas**

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

# **apidetalleVentaUpdate**
> DetalleVentas apidetalleVentaUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleVentaApi(configuration);

let body:.ApidetalleVentaApiApidetalleVentaUpdateRequest = {
  // number | A unique integer value identifying this detalle_ venta.
  id: 1,
  // DetalleVentas
  data: {
    facturaVenta: 1,
    productoVenta: 1,
    cantidad: 0,
    precioProducto: "precioProducto_example",
  },
};

apiInstance.apidetalleVentaUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleVentas**|  |
 **id** | [**number**] | A unique integer value identifying this detalle_ venta. | defaults to undefined


### Return type

**DetalleVentas**

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


