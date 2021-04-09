// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams

const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/lesson1", (request, response) => {
  response.sendFile(__dirname + "/views/lesson1.html");
});
app.get("/lesson2", (request, response) => {
  response.sendFile(__dirname + "/views/lesson2.html");
});
app.get("/lesson3", (request, response) => {
  response.sendFile(__dirname + "/views/lesson3.html");
});
app.get("/projects", (request, response) => {
  response.sendFile(__dirname + "/views/projects.html");
});
app.get("/aboutme", (request, response) => {
  response.sendFile(__dirname + "/views/aboutme.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
