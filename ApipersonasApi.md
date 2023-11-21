# .ApipersonasApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apipersonasCreate**](ApipersonasApi.md#apipersonasCreate) | **POST** /apipersonas/ | 
[**apipersonasDelete**](ApipersonasApi.md#apipersonasDelete) | **DELETE** /apipersonas/{id}/ | 
[**apipersonasList**](ApipersonasApi.md#apipersonasList) | **GET** /apipersonas/ | 
[**apipersonasPartialUpdate**](ApipersonasApi.md#apipersonasPartialUpdate) | **PATCH** /apipersonas/{id}/ | 
[**apipersonasRead**](ApipersonasApi.md#apipersonasRead) | **GET** /apipersonas/{id}/ | 
[**apipersonasUpdate**](ApipersonasApi.md#apipersonasUpdate) | **PUT** /apipersonas/{id}/ | 


# **apipersonasCreate**
> Personas apipersonasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipersonasApi(configuration);

let body:.ApipersonasApiApipersonasCreateRequest = {
  // Personas
  data: {
    nombre: "nombre_example",
    apellido: "apellido_example",
    telefono: "telefono_example",
    correo: "correo_example",
    tipoPersona: "cliente",
  },
};

apiInstance.apipersonasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Personas**|  |


### Return type

**Personas**

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

# **apipersonasDelete**
> void apipersonasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipersonasApi(configuration);

let body:.ApipersonasApiApipersonasDeleteRequest = {
  // number | A unique integer value identifying this persona.
  id: 1,
};

apiInstance.apipersonasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this persona. | defaults to undefined


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

# **apipersonasList**
> Array<Personas> apipersonasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipersonasApi(configuration);

let body:.ApipersonasApiApipersonasListRequest = {
  // string | nombre (optional)
  nombre: "nombre_example",
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
};

apiInstance.apipersonasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nombre** | [**string**] | nombre | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined


### Return type

**Array<Personas>**

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

# **apipersonasPartialUpdate**
> Personas apipersonasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipersonasApi(configuration);

let body:.ApipersonasApiApipersonasPartialUpdateRequest = {
  // number | A unique integer value identifying this persona.
  id: 1,
  // Personas
  data: {
    nombre: "nombre_example",
    apellido: "apellido_example",
    telefono: "telefono_example",
    correo: "correo_example",
    tipoPersona: "cliente",
  },
};

apiInstance.apipersonasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Personas**|  |
 **id** | [**number**] | A unique integer value identifying this persona. | defaults to undefined


### Return type

**Personas**

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

# **apipersonasRead**
> Personas apipersonasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipersonasApi(configuration);

let body:.ApipersonasApiApipersonasReadRequest = {
  // number | A unique integer value identifying this persona.
  id: 1,
};

apiInstance.apipersonasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this persona. | defaults to undefined


### Return type

**Personas**

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

# **apipersonasUpdate**
> Personas apipersonasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipersonasApi(configuration);

let body:.ApipersonasApiApipersonasUpdateRequest = {
  // number | A unique integer value identifying this persona.
  id: 1,
  // Personas
  data: {
    nombre: "nombre_example",
    apellido: "apellido_example",
    telefono: "telefono_example",
    correo: "correo_example",
    tipoPersona: "cliente",
  },
};

apiInstance.apipersonasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Personas**|  |
 **id** | [**number**] | A unique integer value identifying this persona. | defaults to undefined


### Return type

**Personas**

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


