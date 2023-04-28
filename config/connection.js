const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connection string for MongoDB

const connectionString =
  "mongodb+srv://admin1:admin1@cluster0.prbigx3.mongodb.net/?retryWrites=true&w=majority";
// Connect to MongoDB database
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
