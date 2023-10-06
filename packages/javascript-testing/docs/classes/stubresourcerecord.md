[RSM Javascript Testing](../README.md) / StubResourceRecord

# Class: StubResourceRecord

## Hierarchy

- `Record`<{ `id`: `number` = 0; `name`: `string` = "stub" }, `this`\> & `Readonly`<{ `id`: `number` = 0; `name`: `string` = "stub" }\>

  ↳ **`StubResourceRecord`**

## Implements

- [`StubResource`](../interfaces/StubResource.md)

## Table of contents

### Constructors

- [constructor](StubResourceRecord.md#constructor)

### Properties

- [id](StubResourceRecord.md#id)
- [name](StubResourceRecord.md#name)

## Constructors

### constructor

• **new StubResourceRecord**(`values?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `Iterable`<[`string`, `unknown`]\> \| `Partial`<{ `id`: `number` = 0; `name`: `string` = "stub" }\> |

#### Inherited from

Record({
        id: 0,
        name: "stub",
    }).constructor

#### Defined in

node_modules/.pnpm/immutable@4.3.4/node_modules/immutable/dist/immutable.d.ts:2618

## Properties

### id

• `Readonly` **id**: `number` = `0`

#### Implementation of

[StubResource](../interfaces/StubResource.md).[id](../interfaces/StubResource.md#id)

#### Inherited from

Record({
        id: 0,
        name: "stub",
    }).id

#### Defined in

packages/javascript-testing/src/stubs/stub-resource-record.ts:6

___

### name

• `Readonly` **name**: `string` = `"stub"`

#### Implementation of

[StubResource](../interfaces/StubResource.md).[name](../interfaces/StubResource.md#name)

#### Inherited from

Record({
        id: 0,
        name: "stub",
    }).name

#### Defined in

packages/javascript-testing/src/stubs/stub-resource-record.ts:7
