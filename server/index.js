const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.static('../client/dist/hexed-ang'))

app.get('/api/getscores', async (req, res) => {
    const response = await fetch("https://freebee.fun/cgi-bin/scores");
    if(response.status == 500) {
        res.status(502);
    } else {
        res.status(200);
    }
    res.json(await response.json());
});

app.get('/api/sendscore', async (req, res) => {
    if(req.query.name === undefined || req.query.score === undefined) {
        res.status(400);
        res.send();
        return;
    }

    const name = encodeURIComponent(req.query.name);
    const score = parseInt(req.query.score);

    if(isNaN(score)) {
        res.status(400);
        res.send();
        return;
    }

    const response = await fetch("https://freebee.fun/cgi-bin/scores?" + name + "=" + score);
    if(response.status == 500) {
        res.status(502);
    } else {
        res.status(204);
    }
    res.send();
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});