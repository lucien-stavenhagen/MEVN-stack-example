const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const uploadsdir = require("./utils/utils").uploadsdir;

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST;

//
// create our uploads dir
//
if (!fs.existsSync(path.join(__dirname, uploadsdir))) {
  fs.mkdirSync(path.join(__dirname, uploadsdir));
}
// connect to mongodb out in atlas
// hoist creds out to make it easier to update
const username = "lstavenhagen";
const password = "dalemace";
const dbname = "expresstest";

// connect to mongodb out on atlas
mongoose.connect(
  "mongodb+srv://" +
    username +
    ":" +
    password +
    "@cluster0-g06zf.mongodb.net/" +
    dbname +
    "?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
//middleware for parsing json
app.use(express.json());

//middleware for form submissions
app.use(express.urlencoded({ extended: false }));

// middleware to handle CORS
// leave it wide open for now
app.use(cors());

//
// make the uploads dir publicly accessible
//
app.use(`/${uploadsdir}`, express.static(path.join(__dirname, uploadsdir)));

//grab our router for posts API
app.use("/api/posts", require("./routes/posts"));
//grab users API router
app.use("/api/users", require("./routes/users"));
// grab images API router
app.use("/api/images", require("./routes/images"));

app.listen(PORT, HOST, () => console.log(`listening on port ${PORT}`));
