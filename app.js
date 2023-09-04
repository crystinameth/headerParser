const express = require('express');
const requestIp = require('request-ip');
const app = express();

app.use(requestIp.mw());

app.get('/api/whoami', (req, res) => {
    const ipAddress = req.clientIp;
    res.json({ ipaddress: ipAddress});
});

const port = 3000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});