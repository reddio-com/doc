# **API Reference and Endpoints**

The Reddio API is organized around **[REST](http://en.wikipedia.org/wiki/Representational_State_Transfer)**. Our API has predictable resource-oriented URLs, accepts **[form-encoded](https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms)** request bodies, returns **[JSON-encoded](http://www.json.org/)** responses, and uses standard HTTP response codes, authentication, and verbs.

## Endpoints

We currently offer two API endpoints, one is for testnet and the other is for mainnet.

For testnet environment, you can use the following domain, which doesn't affect your live data or interact with the mainnet.

```
https://api-dev.reddio.com
```

You can switch to the following domain for production/mainnet.

```
https://api.reddio.com
```

## Authentication and Headers

The Reddio API uses **API keys** to authenticate requests. You can view and manage your API keys in **the Reddio Dashboard**.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via bearer auth, and all API requests must be made over **[HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure)** and should have at least the following HTTP headers, otherwise your request may fail.

```
Content-Type: application/json
x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx
```

If you are using `cURL` to try out our APIs, use `-H "x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx"` when making requests.

## Responses

### Success responses

Reddio uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the **`2xx`** range indicate success. 

### Error responses

Codes in the **`4xx`** range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Some **`4xx`** errors that could be handled programmatically (e.g., a card is **[declined](https://stripe.com/docs/declines)**) include an **[error code](https://stripe.com/docs/error-codes)** that briefly explains the error reported.

Codes in the **`5xx`** range indicate an error with Reddio's system (these are rare), and theses related errors will have the unique `RedID` for us to indentify the problems.
