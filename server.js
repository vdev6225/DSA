const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/about-us", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/contact-us", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/magazine", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/editions", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/articles", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/article/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/podcast-and-events", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/def-sec-edu", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/newsletter", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/newsletter-news", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/newsletter-article-page", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/newsletter-alert-page", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/newsletter-def-page", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/news/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(4000);
