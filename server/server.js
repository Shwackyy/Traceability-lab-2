const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/server.html"));
  });

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We are online on ${port}`)
});
//having a hard time

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '753fe4a8f844402f83148300d335a3fd',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

