// Dependencies
var express = require("express");
var path = require("path");

// Setup Express
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Server start
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});