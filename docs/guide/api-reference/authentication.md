# **Authentication**

The Reddio API uses **API keys** to authenticate requests. You can view and manage your API keys in **the Reddio Dashboard**.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via bearer auth, use `-H "x-api-key: rk-181872fb-4326-4b58-ae69-afb66cc487bc"`.

All API requests must be made over **[HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure)**. Calls made over plain HTTP will fail. API requests without authentication will also fail.
