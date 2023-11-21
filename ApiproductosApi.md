# .ApiproductosApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiproductosCreate**](ApiproductosApi.md#apiproductosCreate) | **POST** /apiproductos/ | 
[**apiproductosDelete**](ApiproductosApi.md#apiproductosDelete) | **DELETE** /apiproductos/{id}/ | 
[**apiproductosList**](ApiproductosApi.md#apiproductosList) | **GET** /apiproductos/ | 
[**apiproductosPartialUpdate**](ApiproductosApi.md#apiproductosPartialUpdate) | **PATCH** /apiproductos/{id}/ | 
[**apiproductosRead**](ApiproductosApi.md#apiproductosRead) | **GET** /apiproductos/{id}/ | 
[**apiproductosUpdate**](ApiproductosApi.md#apiproductosUpdate) | **PUT** /apiproductos/{id}/ | 


# **apiproductosCreate**
> Productos apiproductosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiproductosApi(configuration);

let body:.ApiproductosApiApiproductosCreateRequest = {
  // Productos
  data: {
    codigo: -2147483648,
    nombre: "nombre_example",
    descripcion: "descripcion_example",
    categoria: 1,
    precio: "precio_example",
    estado: "activo",
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
  },
};

apiInstance.apiproductosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Productos**|  |


### Return type

**Productos**

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

# **apiproductosDelete**
> void apiproductosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiproductosApi(configuration);

let body:.ApiproductosApiApiproductosDeleteRequest = {
  // number | A unique integer value identifying this producto.
  id: 1,
};

apiInstance.apiproductosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this producto. | defaults to undefined


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

# **apiproductosList**
> Array<Productos> apiproductosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiproductosApi(configuration);

let body:.ApiproductosApiApiproductosListRequest = {
  // string | categoria (optional)
  categoria: "categoria_example",
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
};

apiInstance.apiproductosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoria** | [**string**] | categoria | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined


### Return type

**Array<Productos>**

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

# **apiproductosPartialUpdate**
> Productos apiproductosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiproductosApi(configuration);

let body:.ApiproductosApiApiproductosPartialUpdateRequest = {
  // number | A unique integer value identifying this producto.
  id: 1,
  // Productos
  data: {
    codigo: -2147483648,
    nombre: "nombre_example",
    descripcion: "descripcion_example",
    categoria: 1,
    precio: "precio_example",
    estado: "activo",
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
  },
};

apiInstance.apiproductosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Productos**|  |
 **id** | [**number**] | A unique integer value identifying this producto. | defaults to undefined


### Return type

**Productos**

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

# **apiproductosRead**
> Productos apiproductosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiproductosApi(configuration);

let body:.ApiproductosApiApiproductosReadRequest = {
  // number | A unique integer value identifying this producto.
  id: 1,
};

apiInstance.apiproductosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this producto. | defaults to undefined


### Return type

**Productos**

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

# **apiproductosUpdate**
> Productos apiproductosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiproductosApi(configuration);

let body:.ApiproductosApiApiproductosUpdateRequest = {
  // number | A unique integer value identifying this producto.
  id: 1,
  // Productos
  data: {
    codigo: -2147483648,
    nombre: "nombre_example",
    descripcion: "descripcion_example",
    categoria: 1,
    precio: "precio_example",
    estado: "activo",
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
  },
};

apiInstance.apiproductosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Productos**|  |
 **id** | [**number**] | A unique integer value identifying this producto. | defaults to undefined


### Return type

**Productos**

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


