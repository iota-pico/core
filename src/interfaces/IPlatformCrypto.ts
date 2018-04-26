/**
 * Represents an object that can perform crypto operations.
 * @interface
 */
export interface IPlatformCrypto {
    /**
     * Encrypt the given data.
     * @param privateKey The key to use for encrypting data.
     * @param data The data to encrypt.
     * @returns The encrypted data.
     */
    encrypt(privateKey: string, data: string): string;

    /**
     * Decrypt the given data.
     * @param publicKey The key to use for decrypting data.
     * @param data The data to decrypt.
     * @returns The decrypted data.
     */
    decrypt(publicKey: string, data: string): string;

    /**
     * Sign the given data.
     * @param privateKey The key to use for signing data.
     * @param data The data to sign.
     * @returns The signature.
     */
    sign(privateKey: string, data: string): string;

    /**
     * Verify the given data with the signature.
     * @param publicKey The key to use for verifying data.
     * @param data The data to verify.
     * @param signature The signature to verify againt the data.
     * @returns True if the verification is successful.
     */
    verify(publicKey: string, data: string, signature: string): boolean;

    /**
     * Hash the data.
     * @param algo The algorithm to use.
     * @param data The data to hash.
     * @param dataType The type of the input data utf8, ascii, latin1.
     * @param encoding The encoding to return the data latin1, hex, base64.
     * @returns The hash of the data.
     */
    hash(algo: string,
         data: any,
         dataType?: "utf8" | "ascii" | "latin1",
         encoding?: "latin1" | "hex" | "base64"): any;

    /**
     * HMAC the data.
     * @param algo The algorithm to use.
     * @param key The key to hash the data with.
     * @param data The data to hash.
     * @param dataType The type of the input data utf8, ascii, latin1.
     * @param encoding The encoding to return the data latin1, hex, base64.
     * @returns The hmac of the data.
     */
    hmac(algo: string,
         key: any,
         data: any,
         dataType?: "utf8" | "ascii" | "latin1",
         encoding?: "latin1" | "hex" | "base64"): any;
}
