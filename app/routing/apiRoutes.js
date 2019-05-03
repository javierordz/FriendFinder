// Routes

app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    // var newcharacter = req.body;
  
    // console.log(newcharacter);
    // characters.push(newcharacter);
  
    // res.json(newcharacter);
});