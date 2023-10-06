[RSM Javascript Testing](../README.md) / MockAxios

# Interface: MockAxios

## Table of contents

### Properties

- [delete](MockAxios.md#delete)
- [deleteSuccess](MockAxios.md#deletesuccess)
- [get](MockAxios.md#get)
- [getSuccess](MockAxios.md#getsuccess)
- [listSuccess](MockAxios.md#listsuccess)
- [post](MockAxios.md#post)
- [postSuccess](MockAxios.md#postsuccess)
- [put](MockAxios.md#put)
- [putSuccess](MockAxios.md#putsuccess)

## Properties

### delete

• **delete**: `AxiosJestMock`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:17

___

### deleteSuccess

• **deleteSuccess**: (`record?`: `any`, `delay?`: `number`) => `void`

#### Type declaration

▸ (`record?`, `delay?`): `void`

Simple way to mock a successful axios delete request

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `record?` | `any` | value to return when resolved |
| `delay?` | `number` | milliseconds to delay before resolving the promise |

##### Returns

`void`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:24

___

### get

• **get**: `AxiosJestMock`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:26

___

### getSuccess

• **getSuccess**: (`record`: `any`, `delay?`: `number`) => `void`

#### Type declaration

▸ (`record`, `delay?`): `void`

Simple way to mock a successful axios get/find request

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `record` | `any` | value to return when resolved |
| `delay?` | `number` | milliseconds to delay before resolving the promise |

##### Returns

`void`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:33

___

### listSuccess

• **listSuccess**: (`records`: `any`[], `delay?`: `number`) => `void`

#### Type declaration

▸ (`records`, `delay?`): `void`

Simple way to mock a successful axios get/list request

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `records` | `any`[] | - |
| `delay?` | `number` | milliseconds to delay before resolving the promise |

##### Returns

`void`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:40

___

### post

• **post**: `AxiosJestMock`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:42

___

### postSuccess

• **postSuccess**: (`record`: `any`, `delay?`: `number`) => `void`

#### Type declaration

▸ (`record`, `delay?`): `void`

Simple way to mock a successful axios post request

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `record` | `any` | value to return when resolved |
| `delay?` | `number` | milliseconds to delay before resolving the promise |

##### Returns

`void`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:49

___

### put

• **put**: `AxiosJestMock`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:51

___

### putSuccess

• **putSuccess**: (`record`: `any`, `delay?`: `number`) => `void`

#### Type declaration

▸ (`record`, `delay?`): `void`

Simple way to mock a successful axios put request

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `record` | `any` | value to return when resolved |
| `delay?` | `number` | milliseconds to delay before resolving the promise |

##### Returns

`void`

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:58
