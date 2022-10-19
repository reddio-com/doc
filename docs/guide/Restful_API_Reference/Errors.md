# **Errors**

Reddio uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the **`2xx`** range indicate success. Codes in the **`4xx`** range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the **`5xx`** range indicate an error with Reddio's servers (these are rare).

Some **`4xx`** errors that could be handled programmatically (e.g., a card is **[declined](https://stripe.com/docs/declines)**) include an **[error code](https://stripe.com/docs/error-codes)** that briefly explains the error reported.
