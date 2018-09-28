# Changelog

## v1.0.1

* Refactored NetworkClient to make it more versatile
* Added fromUri to NetworkEndPoint
* Webpack bundling switch from Uglify to Terser

## v1.0.0

* Final 1.0.0 Release
* Lib files shrunk with different WebPack options and babel removal
* Updated dependencies and README

## v0.9.9

* Updated dependencies and README

## v0.9.8

* Revert ASCII extension to retain compatibility with official libs
* Updated dependencies and README

## v0.9.7

* Reduced umd module size with externals
* Extended the range of ASCII characters that can keep their default values in StringHelper:encodeNonAscii

## v0.9.6

* Dependency Updates

## v0.9.5

* GitHub and Npm Version alignment

## v0.9.4

* Fixed repo links in readme and coverage config

## v0.9.3

* Added types() method to FactoryBase
* Added IRngService
* Added RngServiceFactory
* Added IPlatformCrypto with sign, verify, encrypt, decrypt, hash and hmac
* Added PlatformCryptoFactory
* Fixed NetworkEndPoint double slash on getUri
* Repo rename
* Updated webpack major ver

## v0.9.2

* Added UMD version of library in pkg folder

## v0.9.1

* Fix Release

## v0.9.0

* Fixed ErrorHelper.format ordering of CoreError types
* Added optional innerError for CoreError constructor
* Improved error formatting
* Added ITimeService and TimeService implementation
* Added IBackgroundTaskService and BackgroundTaskService implementation
* Added code coverage to testing
* Added ILogger interface
* Added ConsoleLogger
* Added NullLogger

## v0.6.1

* Added NetworkClientFactory
* Added get, post, getJson methods to INetworkClient
* Added args parameters for factory constructors

## v0.6.0

* Added generic factory base

## v0.5.2

* Added isAscii, encodeNonASCII, decodeNonASCII to StringHelper
* Added NumberHelper
* Removed IError

## v0.5.1

* PAL network client name unification

## v0.5.0

* First public release
