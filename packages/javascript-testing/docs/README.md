RSM Javascript Testing

# RSM Javascript Testing

## Table of contents

### Classes

- [StubResourceRecord](classes/StubResourceRecord.md)

### Interfaces

- [MockAxios](interfaces/MockAxios.md)
- [StubResource](interfaces/StubResource.md)

### Variables

- [AxiosResponseFactory](README.md#axiosresponsefactory)
- [FactoryType](README.md#factorytype)
- [MockAxios](README.md#mockaxios)
- [StubResourceRecordFactory](README.md#stubresourcerecordfactory)
- [TestUtils](README.md#testutils)

### Functions

- [testLoop](README.md#testloop)

## Variables

### AxiosResponseFactory

• `Const` **AxiosResponseFactory**: `IFactory`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

packages/javascript-testing/src/factories/axios-response-factory.ts:9

___

### FactoryType

• `Const` **FactoryType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AxiosResponse` | `string` |
| `StubResourceRecord` | `string` |

#### Defined in

packages/javascript-testing/src/factories/factory-type.ts:1

___

### MockAxios

• **MockAxios**: [`MockAxios`](README.md#mockaxios)

#### Defined in

packages/javascript-testing/src/mocks/mock-axios.ts:16

packages/javascript-testing/src/mocks/mock-axios.ts:135

___

### StubResourceRecordFactory

• `Const` **StubResourceRecordFactory**: `IFactory`<[`StubResourceRecord`](classes/StubResourceRecord.md)\>

#### Defined in

packages/javascript-testing/src/factories/stub-resource-record-factory.ts:9

___

### TestUtils

• `Const` **TestUtils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `faker` | `Faker` |
| `randomCase` | (`value`: `string`) => `string` |
| `randomFilename` | () => `string` |
| `randomGuid` | () => `string` |
| `randomKey` | (`obj`: `object`) => `string` |
| `randomObject` | (`keyCount?`: `number`) => `Record`<`string`, `string`\> |
| `randomPath` | () => `string` |
| `randomValue` | <TValue\>(`obj`: `Record`<`string`, `TValue`\> \| `TValue`[]) => `TValue` |
| `randomWord` | () => `string` |
| `randomWords` | () => `string`[] |

#### Defined in

packages/javascript-testing/src/utilities/test-utils.ts:3

## Functions

### testLoop

▸ **testLoop**(`name`, `fn`, `times?`): `void`

Utility function for running a test body a certain number of times. Useful for ensuring specific
behavior on implementations that return randomized data and edge cases will not immediately be
exposed.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | Name of the test |
| `fn` | `Function` | `undefined` | Function body to run (can be asynchronous) |
| `times?` | `number` | `100` | Number of times to run the test function. |

#### Returns

`void`

#### Defined in

packages/javascript-testing/src/utilities/shared-specs.ts:14
