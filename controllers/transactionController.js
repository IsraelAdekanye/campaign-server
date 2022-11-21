var axios = require('axios');
var qs = require('qs');
require('dotenv').config();
//const { pgPool } = require("../queries/queries");

// INITIALIZE TRANSACTION
const initialize = async (request, response) => {
    const { email, uuid, amount
    } = request.body
    const donation = amount * 100;

    var data = qs.stringify({
        'email': `${email}`,
        'amount': `${donation}`,
        'currency': 'NGN',
        'reference': `${uuid}`,
        'callback_url': process.env.ORIGIN,
        'bearer': 'account' 
      });


    var config = {
    method: 'POST',
    url: 'https://api.paystack.co/transaction/initialize',
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': 'application/json', 
        'Authorization': process.env.AUTHORIZATION
    },
    data : data
    };

    try {
        await axios(config).then(response0 => {
            if (response0.data.status == true) {
                console.log(response0.data);
                response.status(200).json(response0.data);
            }
            else console.log("error")
        })
    } catch (error) {
        response.status(400).json({error: error.message, message: error.response.data.message});
        console.log(error);
    }

}

module.exports = {
    initialize
}

// {
//     code: 'ERR_BAD_REQUEST',
//     config: {
//       transitional: {
//         silentJSONParsing: true,
//         forcedJSONParsing: true,
//         clarifyTimeoutError: false
//       },
//       adapter: [Function: httpAdapter],
//       transformRequest: [ [Function: transformRequest] ],
//       transformResponse: [ [Function: transformResponse] ],
//       timeout: 0,
//       xsrfCookieName: 'XSRF-TOKEN',
//       xsrfHeaderName: 'X-XSRF-TOKEN',
//       maxContentLength: -1,
//       maxBodyLength: -1,
//       env: { FormData: [Function], Blob: [class Blob] },
//       validateStatus: [Function: validateStatus],
//       headers: AxiosHeaders {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Accept: 'application/json',
//         Authorization: 'Bearer sk_test_639c6e204c9029f563fab8ec65c261053b90e082',
//         'User-Agent': 'axios/1.1.3',
//         'Content-Length': '122',
//         'Accept-Encoding': 'gzip, deflate, br',
//         [Symbol(defaults)]: [Object]
//       },
//       method: 'post',
//       url: 'https://api.paystack.co/transaction/initialize',
//       data: 'email=person%40gmail.com&amount=50000&currency=NGN&reference=246&callback_url=http%3A%2F%2Flocalhost%3A3000&bearer=account'
//     },
//     request: <ref *1> ClientRequest {
//       _events: [Object: null prototype] {
//         abort: [Function (anonymous)],
//         aborted: [Function (anonymous)],
//         connect: [Function (anonymous)],
//         error: [Function (anonymous)],
//         socket: [Function (anonymous)],
//         timeout: [Function (anonymous)],
//         prefinish: [Function: requestOnPrefinish]
//       },
//       _eventsCount: 7,
//       _maxListeners: undefined,
//       outputData: [],
//       outputSize: 0,
//       writable: true,
//       destroyed: false,
//       _last: true,
//       chunkedEncoding: false,
//       shouldKeepAlive: false,
//       maxRequestsOnConnectionReached: false,
//       _defaultKeepAlive: true,
//       useChunkedEncodingByDefault: true,
//       sendDate: false,
//       _removedConnection: false,
//       _removedContLen: false,
//       _removedTE: false,
//       _contentLength: null,
//       _hasBody: true,
//       _trailer: '',
//       finished: true,
//       _headerSent: true,
//       _closed: false,
//       socket: TLSSocket {
//         _tlsOptions: [Object],
//         _secureEstablished: true,
//         _securePending: false,
//         _newSessionPending: false,
//         _controlReleased: true,
//         secureConnecting: false,
//         _SNICallback: null,
//         servername: 'api.paystack.co',
//         alpnProtocol: false,
//         authorized: true,
//         authorizationError: null,
//         encrypted: true,
//         _events: [Object: null prototype],
//         _eventsCount: 10,
//         connecting: false,
//         _hadError: false,
//         _parent: null,
//         _host: 'api.paystack.co',
//         _readableState: [ReadableState],
//         _maxListeners: undefined,
//         _writableState: [WritableState],
//         allowHalfOpen: false,
//         _sockname: null,
//         _pendingData: null,
//         _pendingEncoding: '',
//         server: undefined,
//         _server: null,
//         ssl: [TLSWrap],
//         _requestCert: true,
//         _rejectUnauthorized: true,
//         parser: null,
//         _httpMessage: [Circular *1],
//         [Symbol(res)]: [TLSWrap],
//         [Symbol(verified)]: true,
//         [Symbol(pendingSession)]: null,
//         [Symbol(async_id_symbol)]: 28,
//         [Symbol(kHandle)]: [TLSWrap],
//         [Symbol(lastWriteQueueSize)]: 0,
//         [Symbol(timeout)]: null,
//         [Symbol(kBuffer)]: null,
//         [Symbol(kBufferCb)]: null,
//         [Symbol(kBufferGen)]: null,
//         [Symbol(kCapture)]: false,
//         [Symbol(kSetNoDelay)]: false,
//         [Symbol(kSetKeepAlive)]: true,
//         [Symbol(kSetKeepAliveInitialDelay)]: 60,
//         [Symbol(kBytesRead)]: 0,
//         [Symbol(kBytesWritten)]: 0,
//         [Symbol(connect-options)]: [Object]
//       },
//       _header: 'POST /transaction/initialize HTTP/1.1\r\n' +
//         'Accept: application/json\r\n' +
//         'Content-Type: application/x-www-form-urlencoded\r\n' +
//         'Authorization: Bearer sk_test_639c6e204c9029f563fab8ec65c261053b90e082\r\n' +
//         'User-Agent: axios/1.1.3\r\n' +
//         'Content-Length: 122\r\n' +
//         'Accept-Encoding: gzip, deflate, br\r\n' +
//         'Host: api.paystack.co\r\n' +
//         'Connection: close\r\n' +
//         '\r\n',
//       _keepAliveTimeout: 0,
//       _onPendingData: [Function: nop],
//       agent: Agent {
//         _events: [Object: null prototype],
//         _eventsCount: 2,
//         _maxListeners: undefined,
//         defaultPort: 443,
//         protocol: 'https:',
//         options: [Object: null prototype],
//         requests: [Object: null prototype] {},
//         sockets: [Object: null prototype],
//         freeSockets: [Object: null prototype] {},
//         keepAliveMsecs: 1000,
//         keepAlive: false,
//         maxSockets: Infinity,
//         maxFreeSockets: 256,
//         scheduling: 'lifo',
//         maxTotalSockets: Infinity,
//         totalSocketCount: 1,
//         maxCachedSessions: 100,
//         _sessionCache: [Object],
//         [Symbol(kCapture)]: false
//       },
//       socketPath: undefined,
//       method: 'POST',
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       path: '/transaction/initialize',
//       _ended: true,
//       res: IncomingMessage {
//         _readableState: [ReadableState],
//         _events: [Object: null prototype],
//         _eventsCount: 4,
//         _maxListeners: undefined,
//         socket: [TLSSocket],
//         httpVersionMajor: 1,
//         httpVersionMinor: 1,
//         httpVersion: '1.1',
//         complete: true,
//         rawHeaders: [Array],
//         rawTrailers: [],
//         aborted: false,
//         upgrade: false,
//         url: '',
//         method: null,
//         statusCode: 400,
//         statusMessage: 'Bad Request',
//         client: [TLSSocket],
//         _consuming: false,
//         _dumped: false,
//         req: [Circular *1],
//         responseUrl: 'https://api.paystack.co/transaction/initialize',
//         redirects: [],
//         [Symbol(kCapture)]: false,
//         [Symbol(kHeaders)]: [Object],
//         [Symbol(kHeadersCount)]: 38,
//         [Symbol(kTrailers)]: null,
//         [Symbol(kTrailersCount)]: 0
//       },
//       aborted: false,
//       timeoutCb: null,
//       upgradeOrConnect: false,
//       parser: null,
//       maxHeadersCount: null,
//       reusedSocket: false,
//       host: 'api.paystack.co',
//       protocol: 'https:',
//       _redirectable: Writable {
//         _writableState: [WritableState],
//         _events: [Object: null prototype],
//         _eventsCount: 3,
//         _maxListeners: undefined,
//         _options: [Object],
//         _ended: true,
//         _ending: true,
//         _redirectCount: 0,
//         _redirects: [],
//         _requestBodyLength: 122,
//         _requestBodyBuffers: [],
//         _onNativeResponse: [Function (anonymous)],
//         _currentRequest: [Circular *1],
//         _currentUrl: 'https://api.paystack.co/transaction/initialize',
//         [Symbol(kCapture)]: false
//       },
//       [Symbol(kCapture)]: false,
//       [Symbol(kNeedDrain)]: false,
//       [Symbol(corked)]: 0,
//       [Symbol(kOutHeaders)]: [Object: null prototype] {
//         accept: [Array],
//         'content-type': [Array],
//         authorization: [Array],
//         'user-agent': [Array],
//         'content-length': [Array],
//         'accept-encoding': [Array],
//         host: [Array]
//       },
//       [Symbol(kUniqueHeaders)]: null
//     },
//     response: {
//       status: 400,
//       statusText: 'Bad Request',
//       headers: AxiosHeaders {
//         date: 'Mon, 21 Nov 2022 12:39:13 GMT',
//         'content-type': 'application/json; charset=utf-8',
//         'content-length': '60',
//         connection: 'close',
//         'x-amzn-requestid': '88fd2718-83cf-49af-b32a-0403630c8a3a',
//         'access-control-allow-origin': '*',
//         'x-amzn-remapped-content-length': '60',
//         'x-amzn-remapped-connection': 'keep-alive',
//         'set-cookie': [Array],
//         'x-amz-apigw-id': 'b86pqGQeDoEFl9g=',
//         vary: 'X-HTTP-Method-Override, Accept-Encoding',
//         'x-amzn-remapped-server': 'nginx',
//         etag: 'W/"3c-YZxMT+Lfhfsh6kl1Fxf3lA"',
//         'x-amzn-remapped-date': 'Mon, 21 Nov 2022 12:39:12 GMT',
//         'cf-cache-status': 'DYNAMIC',
//         'strict-transport-security': 'max-age=15552000; includeSubDomains; preload',
//         'x-content-type-options': 'nosniff',
//         server: 'cloudflare',
//         'cf-ray': '76d97ca119cbc4f8-LOS',
//         [Symbol(defaults)]: null
//       },
//       config: {
//         transitional: [Object],
//         adapter: [Function: httpAdapter],
//         transformRequest: [Array],
//         transformResponse: [Array],
//         timeout: 0,
//         xsrfCookieName: 'XSRF-TOKEN',
//         xsrfHeaderName: 'X-XSRF-TOKEN',
//         maxContentLength: -1,
//         maxBodyLength: -1,
//         env: [Object],
//         validateStatus: [Function: validateStatus],
//         headers: [AxiosHeaders],
//         method: 'post',
//         url: 'https://api.paystack.co/transaction/initialize',
//         data: 'email=person%40gmail.com&amount=50000&currency=NGN&reference=246&callback_url=http%3A%2F%2Flocalhost%3A3000&bearer=account'
//       },
//       request: <ref *1> ClientRequest {
//         _events: [Object: null prototype],
//         _eventsCount: 7,
//         _maxListeners: undefined,
//         outputData: [],
//         outputSize: 0,
//         writable: true,
//         destroyed: false,
//         _last: true,
//         chunkedEncoding: false,
//         shouldKeepAlive: false,
//         maxRequestsOnConnectionReached: false,
//         _defaultKeepAlive: true,
//         useChunkedEncodingByDefault: true,
//         sendDate: false,
//         _removedConnection: false,
//         _removedContLen: false,
//         _removedTE: false,
//         _contentLength: null,
//         _hasBody: true,
//         _trailer: '',
//         finished: true,
//         _headerSent: true,
//         _closed: false,
//         socket: [TLSSocket],
//         _header: 'POST /transaction/initialize HTTP/1.1\r\n' +
//           'Accept: application/json\r\n' +
//           'Content-Type: application/x-www-form-urlencoded\r\n' +
//           'Authorization: Bearer sk_test_639c6e204c9029f563fab8ec65c261053b90e082\r\n' +
//           'User-Agent: axios/1.1.3\r\n' +
//           'Content-Length: 122\r\n' +
//           'Accept-Encoding: gzip, deflate, br\r\n' +
//           'Host: api.paystack.co\r\n' +
//           'Connection: close\r\n' +
//           '\r\n',
//         _keepAliveTimeout: 0,
//         _onPendingData: [Function: nop],
//         agent: [Agent],
//         socketPath: undefined,
//         method: 'POST',
//         maxHeaderSize: undefined,
//         insecureHTTPParser: undefined,
//         path: '/transaction/initialize',
//         _ended: true,
//         res: [IncomingMessage],
//         aborted: false,
//         timeoutCb: null,
//         upgradeOrConnect: false,
//         parser: null,
//         maxHeadersCount: null,
//         reusedSocket: false,
//         host: 'api.paystack.co',
//         protocol: 'https:',
//         _redirectable: [Writable],
//         [Symbol(kCapture)]: false,
//         [Symbol(kNeedDrain)]: false,
//         [Symbol(corked)]: 0,
//         [Symbol(kOutHeaders)]: [Object: null prototype],
//         [Symbol(kUniqueHeaders)]: null
//       },
//       data: { status: false, message: 'Duplicate Transaction Reference' }
//     }
//   }