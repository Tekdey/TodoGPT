const mongoose = require("mongoose");
const { Schema } = mongoose;

const TasksSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  status: {
    type: String,
    enum: ["stable", "progress", "finished"],
  },
  deadLine: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("tasks", TasksSchema, "tasks");
