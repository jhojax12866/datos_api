# .ApistockApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apistockCreate**](ApistockApi.md#apistockCreate) | **POST** /apistock/ | 
[**apistockDelete**](ApistockApi.md#apistockDelete) | **DELETE** /apistock/{id}/ | 
[**apistockList**](ApistockApi.md#apistockList) | **GET** /apistock/ | 
[**apistockPartialUpdate**](ApistockApi.md#apistockPartialUpdate) | **PATCH** /apistock/{id}/ | 
[**apistockRead**](ApistockApi.md#apistockRead) | **GET** /apistock/{id}/ | 
[**apistockUpdate**](ApistockApi.md#apistockUpdate) | **PUT** /apistock/{id}/ | 


# **apistockCreate**
> Stock apistockCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApistockApi(configuration);

let body:.ApistockApiApistockCreateRequest = {
  // Stock
  data: {
    productoStock: 1,
    cantidad: 0,
    loteStock: 1,
  },
};

apiInstance.apistockCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Stock**|  |


### Return type

**Stock**

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

# **apistockDelete**
> void apistockDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApistockApi(configuration);

let body:.ApistockApiApistockDeleteRequest = {
  // number | A unique integer value identifying this stock.
  id: 1,
};

apiInstance.apistockDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this stock. | defaults to undefined


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

# **apistockList**
> Array<Stock> apistockList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApistockApi(configuration);

let body:.ApistockApiApistockListRequest = {
  // string | cantidad (optional)
  cantidad: "cantidad_example",
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
};

apiInstance.apistockList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cantidad** | [**string**] | cantidad | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined


### Return type

**Array<Stock>**

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

# **apistockPartialUpdate**
> Stock apistockPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApistockApi(configuration);

let body:.ApistockApiApistockPartialUpdateRequest = {
  // number | A unique integer value identifying this stock.
  id: 1,
  // Stock
  data: {
    productoStock: 1,
    cantidad: 0,
    loteStock: 1,
  },
};

apiInstance.apistockPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Stock**|  |
 **id** | [**number**] | A unique integer value identifying this stock. | defaults to undefined


### Return type

**Stock**

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

# **apistockRead**
> Stock apistockRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApistockApi(configuration);

let body:.ApistockApiApistockReadRequest = {
  // number | A unique integer value identifying this stock.
  id: 1,
};

apiInstance.apistockRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this stock. | defaults to undefined


### Return type

**Stock**

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

# **apistockUpdate**
> Stock apistockUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApistockApi(configuration);

let body:.ApistockApiApistockUpdateRequest = {
  // number | A unique integer value identifying this stock.
  id: 1,
  // Stock
  data: {
    productoStock: 1,
    cantidad: 0,
    loteStock: 1,
  },
};

apiInstance.apistockUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Stock**|  |
 **id** | [**number**] | A unique integer value identifying this stock. | defaults to undefined


### Return type

**Stock**

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


