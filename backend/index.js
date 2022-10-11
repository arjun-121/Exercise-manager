const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(
//   "mongodb+srv://Arjun-Sharma:arjun1087@cluster0.nrbexdj.mongodb.net/?retryWrites=true&w=majority"
// );

const connectDB = async () => {

  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDb connected");
  } catch (err) {
    console.log("Failed to connect!", err);
  }
};
connectDB();

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB database connection established successfully");
});

// app.get("/search/:key", (req, res) => {
//   res.send("Search API");
// });

const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");
const registerRouter = require("./routes/register");
const loginRouter = require('./routes/login');
// const searchRouter = require('./routes/search');

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);
app.use("/register" , registerRouter);
app.use("/users" , loginRouter);
// 


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
