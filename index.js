const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const { stringFormatter } = require("./src/functions/index");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/js", express.static(path.join(__dirname + "/src/js/")));
app.use("/css", express.static(path.join(__dirname + "/src/css/")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.post("/string-formatter", (req, res) => {
  let text = req.body.text;
  let type = req.body.type;
  let result = stringFormatter(type, text);
  res.status(200).json({ result });
});

app.listen(3333, () => console.log("Server is runing...", 3333));
