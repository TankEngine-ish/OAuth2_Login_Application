# OAuth2_Project

This is a small Node application that I registered with Google in order to test and play around with OAuth2, cookies, sessions, etc.

NOTE: Private keys and certificates should be stored to an .env file inside a gitignore.

# Personal Notes and things I've learned
 
* Generating SSL certificates like the one below for example:

openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365

This generates a self-signed X.509 certificate (they are commonly used for testing purposes or for securing communication within a closed environment. They are NOT typically used in production environments) along with its corresponding RSA (Rivest-Shamir-Adleman algorithm) private key.

The private key is not encrypted with a passphrase (-nodes), and both the key and the certificate are written to separate files named key.pem and cert.pem, respectively. The certificate will be valid for 365 days from the time it is generated.

key.pem encrypts the data for the server identified by the cert.pem and cert.pem decrypts the data encrypted with key.pem.

* Securing a server with helmet.js 

* Utilizing HTTP Strict Transport Security (HSTS) which is a widely supported standard to protect visitors by ensuring that their browsers always connect to a website over HTTPS.

* XSS attacks.

* Authentication and authorization (access control) difference. 401 is unauthenticated. 403 is unauthorized.

* API keys, OAuth tokens, JWT and how they differentiate. Rate limiting with API keys. JWT act as set of credentials for a user to grant access to an API. 

* The parts of the authorization code flow: resource owner (user), client (the web app, mobile app, etc.), resource server (backend of the app), authorization server (the server that authorizes the owner and gives them access tokens). 

* Stateful cookies (with server-side sessions) and stateless (with client-side sessions) cookies.

* Limiting the data that we save in our sessions.

