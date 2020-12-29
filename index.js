const express = require("express");
const redis = require('redis');

const app = express();

// host → docker-compose.yml で記述したservice名（コンテナ名）を記述するだけでDockerが自動でコンテナ間のネットワークを接続してくれる
// port: 6379 は通常 redis を使用する際のポート番号
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send("Number of visit is " + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 4001");
})
