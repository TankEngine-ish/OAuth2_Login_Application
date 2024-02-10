# OAuth_Project

This is a small Node application that I registered with Google in order to test and play around with OAuth2, cookies

# Generating certificates.
 
* Look at the command below: 

openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365

It generates a self-signed X.509 certificate (they are commonly used for testing purposes or for securing communication within a closed environment. They are NOT typically used in production environments) along with its corresponding RSA (Rivest-Shamir-Adleman algorithm) private key.

The private key is not encrypted with a passphrase (-nodes), and both the key and the certificate are written to separate files named key.pem and cert.pem, respectively. The certificate will be valid for 365 days from the time it is generated.

key.pem encrypts the data for the server identified by the cert.pem and cert.pem decrypts the data encrypted with key.pem

* securing a server with helmet.js 

* utilizing HTTP Strict Transport Security (HSTS) which is a widely supported standard to protect visitors by ensuring that their browsers always connect to a website over HTTPS.

* XSS attacks

* authentication and authorization (access control) difference. both are auth.
401 unauthenticated.
403 unauthorized.

* API keys, OAuth tokens, JWT and how they differentiate. Rate limiting with API keys. JWT act as set of credentials for a user to grant access to an API. It can be extended. It can be decoded with base64 decoding function. They have a header, payload, signature. Token based authentication(JWT) it only works with https. Opaque tokens.

* resource owner (user), client (the web app), resource server (backend of the app), authorization server (the server that authorizes the owner and gives them access tokens). 

* Authorization Code Flow.

* Stateful cookies (with server-side sessions) and stateless (with client-side sessions) cookies.


