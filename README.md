# OAuth_Project

## NOTES

# Generating certificates.
 
Look at the command below: 

openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365

It generates a self-signed X.509 certificate (they are commonly used for testing purposes or for securing communication within a closed environment. They are NOT typically used in production environments) along with its corresponding RSA (Rivest-Shamir-Adleman algorithm) private key.

The private key is not encrypted with a passphrase (-nodes), and both the key and the certificate are written to separate files named key.pem and cert.pem, respectively. The certificate will be valid for 365 days from the time it is generated.
