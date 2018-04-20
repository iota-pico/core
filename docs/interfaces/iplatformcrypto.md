[@iota-pico/core](../README.md) > [IPlatformCrypto](../interfaces/iplatformcrypto.md)

# Interface: IPlatformCrypto

Represents an object that can perform crypto operations.
*__interface__*: 

## Hierarchy

**IPlatformCrypto**

## Index

### Methods

* [decrypt](iplatformcrypto.md#decrypt)
* [encrypt](iplatformcrypto.md#encrypt)
* [sign](iplatformcrypto.md#sign)
* [verify](iplatformcrypto.md#verify)

---

## Methods

<a id="decrypt"></a>

###  decrypt

▸ **decrypt**(data: *`string`*): `string`

*Defined in [interfaces/IPlatformCrypto.ts:18](https://github.com/iotaeco/iota-pico-core/blob/1ab2281/src/interfaces/IPlatformCrypto.ts#L18)*

Decrypt the given data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`   |  The data to decrypt. |

**Returns:** `string`
The decrypted data.

___

<a id="encrypt"></a>

###  encrypt

▸ **encrypt**(data: *`string`*): `string`

*Defined in [interfaces/IPlatformCrypto.ts:11](https://github.com/iotaeco/iota-pico-core/blob/1ab2281/src/interfaces/IPlatformCrypto.ts#L11)*

Encrypt the given data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`   |  The data to encrypt. |

**Returns:** `string`
The encrypted data.

___

<a id="sign"></a>

###  sign

▸ **sign**(data: *`string`*): `string`

*Defined in [interfaces/IPlatformCrypto.ts:25](https://github.com/iotaeco/iota-pico-core/blob/1ab2281/src/interfaces/IPlatformCrypto.ts#L25)*

Sign the given data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`   |  The data to sign. |

**Returns:** `string`
The signature.

___

<a id="verify"></a>

###  verify

▸ **verify**(data: *`string`*, signature: *`string`*): `boolean`

*Defined in [interfaces/IPlatformCrypto.ts:33](https://github.com/iotaeco/iota-pico-core/blob/1ab2281/src/interfaces/IPlatformCrypto.ts#L33)*

Verify the given data with the signature.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`   |  The data to verify. |
| signature | `string`   |  The signature to verify againt the data. |

**Returns:** `boolean`
True if the verification is successful.

___

