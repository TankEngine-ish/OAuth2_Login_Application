const fs = require('fs');
const https = require('https');   
const path = require('path');
const express = require('express');
const helmet = require('helmet');

const PORT = 3000;

const app = express();


app.use(helmet()); // every request passes through helmet middleware




function checkLoggedIn(req, res, next) {
app.use((req, res, next) => {
    const isLoggedIn = true;
    if(!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!'
        });
    }
    next();
}







app.get('/secret', (req, res) => {
    res.send('Hello from server'); 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});