const express = require("./node_modules/express/index");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(4000);
