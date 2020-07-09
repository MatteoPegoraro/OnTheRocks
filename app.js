// ROUTING PAGES
const express = require("express");
const axios = require("axios");

const app = express();

app.use('/',express.static("public"));

// redirect
app.get("/", (req, res) => {
  res.redirect("/home");
});
// homepage
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/homepage.html");
});

// cocktails page
app.get("/cocktails", (req, res) => {
  res.sendFile(__dirname +  "/public/cocktail.html");
});

// cocktails list page
app.get("/listcocktails", (req, res) => {
  res.sendFile(__dirname +  "/public/listcocktails.html");
});

// pagina non trovata
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(3000, () => console.log("listening -> port 3000"));

process.on('SIGUSR2', () => { process.exit(0); });

