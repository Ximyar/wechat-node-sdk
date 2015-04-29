var express = require("express"),
  app = express();
app.use(express.static('resources')).listen(4000);