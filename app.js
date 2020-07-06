const express = require("express");
const axios = require("axios");

const app = express();

// homepage
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// cocktails page
app.get('/cocktails',(req, res) => {
  res.sendFile(__dirname, "/cocktails.html")
})

app.get("*", (req, res) => {
  res.send("not found");
});

app.listen(3000, () => console.log("listening -> port 3000"));
