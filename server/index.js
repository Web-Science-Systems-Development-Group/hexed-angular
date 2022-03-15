require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://itws:" + process.env.DBPASS + "@itws4500.t01pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const app = express();

app.use(express.static('../client/dist/hexed-ang'))

app.get('/api/getscores', async (req, res) => {
  client.connect(async err => {
    if(err) {
      res.status(500);
      res.send();
      throw err;
    }
    const collection = client.db("myFirstDatabase").collection("scores");
    const myScoreboard = await collection.find().sort({score: -1}).limit(10);
    res.json(await myScoreboard.toArray());
  });
  // const response = await fetch("https://freebee.fun/cgi-bin/scores");
  // if(response.status == 500) {
  //     res.status(502);
  // } else {
  //     res.status(200);
  // }
  // res.json(await response.json());
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

    client.connect(async err => {
      if(err) {
        res.status(500);
        res.send();
        throw err;
      }
      const collection = client.db("myFirstDatabase").collection("scores");
      await collection.insertOne({
        name, score
      });
      res.status(204);
      res.send();
    });

    // const response = await fetch("https://freebee.fun/cgi-bin/scores?" + name + "=" + score);
    // if(response.status == 500) {
    //     res.status(502);
    // } else {
    //     res.status(204);
    // }
    // res.send();
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
