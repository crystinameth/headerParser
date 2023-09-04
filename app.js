const express = require('express');
const requestIp = require('request-ip');
const app = express();

app.use(requestIp.mw());

app.use((req, res, next) => {
const preferredLanguage = req.headers['accept-language'];
req.preferredLanguage = preferredLanguage;
next();
});

app.get('/api/whoami', (req, res) => {
    const ipAddress = req.clientIp;
    const preferredLanguage = req.preferredLanguage;
    const serverSoftware = req.app.get('env');
    res.json({ 
        ipaddress: ipAddress, 
        language: preferredLanguage, 
        software: serverSoftware 
    });
});

const port = 3000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});