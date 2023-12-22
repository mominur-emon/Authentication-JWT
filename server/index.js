const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Ready"));

app.listen(port, () => {
  console.log(`app is runnig on port ${port}`);
});
