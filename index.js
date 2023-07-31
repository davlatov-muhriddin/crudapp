const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Main Page");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewURLParser: true,
  })
  .then(() => console.log("Mongo db Connected"));

app.use("/api/cardcontent", require("./routes/CardContentRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`Server Is Running On Port ${process.env.PORT}`)
);
