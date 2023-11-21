# .ApidetalleCompraApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apidetalleCompraCreate**](ApidetalleCompraApi.md#apidetalleCompraCreate) | **POST** /apidetalle_compra/ | 
[**apidetalleCompraDelete**](ApidetalleCompraApi.md#apidetalleCompraDelete) | **DELETE** /apidetalle_compra/{id}/ | 
[**apidetalleCompraList**](ApidetalleCompraApi.md#apidetalleCompraList) | **GET** /apidetalle_compra/ | 
[**apidetalleCompraPartialUpdate**](ApidetalleCompraApi.md#apidetalleCompraPartialUpdate) | **PATCH** /apidetalle_compra/{id}/ | 
[**apidetalleCompraRead**](ApidetalleCompraApi.md#apidetalleCompraRead) | **GET** /apidetalle_compra/{id}/ | 
[**apidetalleCompraUpdate**](ApidetalleCompraApi.md#apidetalleCompraUpdate) | **PUT** /apidetalle_compra/{id}/ | 


# **apidetalleCompraCreate**
> DetalleCompras apidetalleCompraCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleCompraApi(configuration);

let body:.ApidetalleCompraApiApidetalleCompraCreateRequest = {
  // DetalleCompras
  data: {
    facturaCompra: 1,
    fcompraData: {
      proveedorF: 1,
      totalC: "totalC_example",
    },
    productoCompra: 1,
    cantidad: 0,
    precioUnitario: "precioUnitario_example",
  },
};

apiInstance.apidetalleCompraCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleCompras**|  |


### Return type

**DetalleCompras**

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

# **apidetalleCompraDelete**
> void apidetalleCompraDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleCompraApi(configuration);

let body:.ApidetalleCompraApiApidetalleCompraDeleteRequest = {
  // number | A unique integer value identifying this detalle_ compra.
  id: 1,
};

apiInstance.apidetalleCompraDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalle_ compra. | defaults to undefined


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

# **apidetalleCompraList**
> Array<DetalleCompras> apidetalleCompraList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleCompraApi(configuration);

let body:any = {};

apiInstance.apidetalleCompraList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DetalleCompras>**

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

# **apidetalleCompraPartialUpdate**
> DetalleCompras apidetalleCompraPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleCompraApi(configuration);

let body:.ApidetalleCompraApiApidetalleCompraPartialUpdateRequest = {
  // number | A unique integer value identifying this detalle_ compra.
  id: 1,
  // DetalleCompras
  data: {
    facturaCompra: 1,
    fcompraData: {
      proveedorF: 1,
      totalC: "totalC_example",
    },
    productoCompra: 1,
    cantidad: 0,
    precioUnitario: "precioUnitario_example",
  },
};

apiInstance.apidetalleCompraPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleCompras**|  |
 **id** | [**number**] | A unique integer value identifying this detalle_ compra. | defaults to undefined


### Return type

**DetalleCompras**

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

# **apidetalleCompraRead**
> DetalleCompras apidetalleCompraRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleCompraApi(configuration);

let body:.ApidetalleCompraApiApidetalleCompraReadRequest = {
  // number | A unique integer value identifying this detalle_ compra.
  id: 1,
};

apiInstance.apidetalleCompraRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalle_ compra. | defaults to undefined


### Return type

**DetalleCompras**

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

# **apidetalleCompraUpdate**
> DetalleCompras apidetalleCompraUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetalleCompraApi(configuration);

let body:.ApidetalleCompraApiApidetalleCompraUpdateRequest = {
  // number | A unique integer value identifying this detalle_ compra.
  id: 1,
  // DetalleCompras
  data: {
    facturaCompra: 1,
    fcompraData: {
      proveedorF: 1,
      totalC: "totalC_example",
    },
    productoCompra: 1,
    cantidad: 0,
    precioUnitario: "precioUnitario_example",
  },
};

apiInstance.apidetalleCompraUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleCompras**|  |
 **id** | [**number**] | A unique integer value identifying this detalle_ compra. | defaults to undefined


### Return type

**DetalleCompras**

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


