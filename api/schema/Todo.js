const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  status: {
    type: String,
    enum: ["stable", "progress", "finished"],
  },
  deadLine: {
    type: String,
  },
  priority: {
    type: String,
    enum: ["urgent", "important", "normal"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("todo", TodoSchema, "todo");
