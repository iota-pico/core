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
* [hash](iplatformcrypto.md#hash)
* [hmac](iplatformcrypto.md#hmac)
* [sign](iplatformcrypto.md#sign)
* [verify](iplatformcrypto.md#verify)

---

## Methods

<a id="decrypt"></a>

###  decrypt

▸ **decrypt**(publicKey: *`string`*, data: *`string`*): `string`

*Defined in [interfaces/IPlatformCrypto.ts:20](https://github.com/iota-pico/core/blob/ab219f5/src/interfaces/IPlatformCrypto.ts#L20)*

Decrypt the given data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| publicKey | `string` |  The key to use for decrypting data. |
| data | `string` |  The data to decrypt. |

**Returns:** `string`
The decrypted data.

___
<a id="encrypt"></a>

###  encrypt

▸ **encrypt**(privateKey: *`string`*, data: *`string`*): `string`

*Defined in [interfaces/IPlatformCrypto.ts:12](https://github.com/iota-pico/core/blob/ab219f5/src/interfaces/IPlatformCrypto.ts#L12)*

Encrypt the given data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| privateKey | `string` |  The key to use for encrypting data. |
| data | `string` |  The data to encrypt. |

**Returns:** `string`
The encrypted data.

___
<a id="hash"></a>

###  hash

▸ **hash**(algo: *`string`*, data: *`any`*, dataType?: * "utf8" &#124; "ascii" &#124; "latin1"*, encoding?: * "latin1" &#124; "hex" &#124; "base64"*): `any`

*Defined in [interfaces/IPlatformCrypto.ts:47](https://github.com/iota-pico/core/blob/ab219f5/src/interfaces/IPlatformCrypto.ts#L47)*

Hash the data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| algo | `string` |  The algorithm to use. |
| data | `any` |  The data to hash. |
| `Optional` dataType |  "utf8" &#124; "ascii" &#124; "latin1"|  The type of the input data utf8, ascii, latin1. |
| `Optional` encoding |  "latin1" &#124; "hex" &#124; "base64"|  The encoding to return the data latin1, hex, base64. |

**Returns:** `any`
The hash of the data.

___
<a id="hmac"></a>

###  hmac

▸ **hmac**(algo: *`string`*, key: *`any`*, data: *`any`*, dataType?: * "utf8" &#124; "ascii" &#124; "latin1"*, encoding?: * "latin1" &#124; "hex" &#124; "base64"*): `any`

*Defined in [interfaces/IPlatformCrypto.ts:61](https://github.com/iota-pico/core/blob/ab219f5/src/interfaces/IPlatformCrypto.ts#L61)*

HMAC the data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| algo | `string` |  The algorithm to use. |
| key | `any` |  The key to hash the data with. |
| data | `any` |  The data to hash. |
| `Optional` dataType |  "utf8" &#124; "ascii" &#124; "latin1"|  The type of the input data utf8, ascii, latin1. |
| `Optional` encoding |  "latin1" &#124; "hex" &#124; "base64"|  The encoding to return the data latin1, hex, base64. |

**Returns:** `any`
The hmac of the data.

___
<a id="sign"></a>

###  sign

▸ **sign**(privateKey: *`string`*, data: *`string`*): `string`

*Defined in [interfaces/IPlatformCrypto.ts:28](https://github.com/iota-pico/core/blob/ab219f5/src/interfaces/IPlatformCrypto.ts#L28)*

Sign the given data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| privateKey | `string` |  The key to use for signing data. |
| data | `string` |  The data to sign. |

**Returns:** `string`
The signature.

___
<a id="verify"></a>

###  verify

▸ **verify**(publicKey: *`string`*, data: *`string`*, signature: *`string`*): `boolean`

*Defined in [interfaces/IPlatformCrypto.ts:37](https://github.com/iota-pico/core/blob/ab219f5/src/interfaces/IPlatformCrypto.ts#L37)*

Verify the given data with the signature.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| publicKey | `string` |  The key to use for verifying data. |
| data | `string` |  The data to verify. |
| signature | `string` |  The signature to verify againt the data. |

**Returns:** `boolean`
True if the verification is successful.

___

