const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoutes);

//custom error handler
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Server is Ready"));

app.listen(port, () => {
  console.log(`app is runnig on port ${port}`);
});
