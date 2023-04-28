const { connect, connection } = require("mongoose");
require("dotenv").config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
