HCD Javascript Testing

# HCD Javascript Testing

## Table of contents

### Classes

- [StubResourceRecord](undefined)

### Interfaces

- [MockAxios](undefined)
- [StubResource](undefined)

### Variables

- [AxiosResponseFactory](undefined)
- [FactoryType](undefined)
- [MockAxios](undefined)
- [StubResourceRecordFactory](undefined)
- [TestUtils](undefined)

### Functions

- [testLoop](undefined)

## Classes

### StubResourceRecord

• **StubResourceRecord**: Class StubResourceRecord

#### Defined in

[packages/javascript-testing/src/stubs/stub-resource-record.ts:4](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/stubs/stub-resource-record.ts#L4)

## Interfaces

### MockAxios

• **MockAxios**: Interface MockAxios

#### Defined in

[packages/javascript-testing/src/mocks/mock-axios.ts:16](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/mocks/mock-axios.ts#L16)

[packages/javascript-testing/src/mocks/mock-axios.ts:135](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/mocks/mock-axios.ts#L135)

___

### StubResource

• **StubResource**: Interface StubResource

#### Defined in

[packages/javascript-testing/src/stubs/stub-resource.ts:5](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/stubs/stub-resource.ts#L5)

## Variables

### AxiosResponseFactory

• `Const` **AxiosResponseFactory**: IFactory<AxiosResponse<any, any\>\>

#### Defined in

[packages/javascript-testing/src/factories/axios-response-factory.ts:9](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/factories/axios-response-factory.ts#L9)

___

### FactoryType

• `Const` **FactoryType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AxiosResponse` | string |
| `StubResourceRecord` | string |

#### Defined in

[packages/javascript-testing/src/factories/factory-type.ts:1](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/factories/factory-type.ts#L1)

___

### MockAxios

• **MockAxios**: MockAxios

#### Defined in

[packages/javascript-testing/src/mocks/mock-axios.ts:16](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/mocks/mock-axios.ts#L16)

[packages/javascript-testing/src/mocks/mock-axios.ts:135](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/mocks/mock-axios.ts#L135)

___

### StubResourceRecordFactory

• `Const` **StubResourceRecordFactory**: IFactory<StubResourceRecord\>

#### Defined in

[packages/javascript-testing/src/factories/stub-resource-record-factory.ts:9](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/factories/stub-resource-record-factory.ts#L9)

___

### TestUtils

• `Const` **TestUtils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `faker` | Faker |
| `randomCase` | Method randomCase |
| `randomFilename` | Method randomFilename |
| `randomGuid` | Method randomGuid |
| `randomKey` | Method randomKey |
| `randomObject` | Method randomObject |
| `randomPath` | Method randomPath |
| `randomValue` | Method randomValue |
| `randomWord` | Method randomWord |
| `randomWords` | Method randomWords |

#### Defined in

[packages/javascript-testing/src/utilities/test-utils.ts:3](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/utilities/test-utils.ts#L3)

## Functions

### testLoop

▸ **testLoop**(`name`, `fn`, `times?`): void

Utility function for running a test body a certain number of times. Useful for ensuring specific
behavior on implementations that return randomized data and edge cases will not immediately be
exposed.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | string | `undefined` | Name of the test |
| `fn` | Function | `undefined` | Function body to run (can be asynchronous) |
| `times?` | number | `100` | Number of times to run the test function. |

#### Returns

void

#### Defined in

[packages/javascript-testing/src/utilities/shared-specs.ts:14](https://github.com/myty/hcd-javascript/blob/da42428/packages/javascript-testing/src/utilities/shared-specs.ts#L14)
