const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const port = process.env.PORT || 5000;

const route = require("./api/members.routes");

const app = express();
app.use(helmet());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/member", route);

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
