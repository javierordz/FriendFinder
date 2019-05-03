// DEPENDENCIES
var express = require("express");

// EXPRESS CONFIG
var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTING
require("app/routing/apiRoutes")(app);
require("app/routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});