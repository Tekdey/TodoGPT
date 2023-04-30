const mongoose = require("mongoose");

async function connectDB() {
  const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jqws88l.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    }
  );
}

module.exports = { connectDB };
