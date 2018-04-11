/**
 * Represents an object that can perform crypto operations.
 * @interface
 */
export interface IPlatformCrypto {
    /**
     * Encrypt the given data.
     * @param data The data to encrypt.
     * @returns The encrypted data.
     */
    encrypt(data: string): string;

    /**
     * Decrypt the given data.
     * @param data The data to decrypt.
     * @returns The decrypted data.
     */
    decrypt(data: string): string;

    /**
     * Sign the given data.
     * @param data The data to sign.
     * @returns The signature.
     */
    sign(data: string): string;

    /**
     * Verify the given data with the signature.
     * @param data The data to verify.
     * @param signature The signature to verify againt the data.
     * @returns True if the verification is successful.
     */
    verify(data: string, signature: string): boolean;
}
