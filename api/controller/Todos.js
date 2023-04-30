const Todo = require("../schema/Todo");

module.exports = {
  getTodoByStatus: async (req, res) => {
    try {
      const { status } = req.params;

      const task = await Todo.find({ status });
      console.log("pass");
      return res.json({ task });
    } catch (error) {
      console.log(error);
    }
  },
  getAllTodo: async (req, res) => {
    try {
      const task = await Todo.find({});

      return res.json({ task });
    } catch (error) {
      console.log(error);
    }
  },

  createTodo: async (req, res) => {
    try {
      const { title, priority, author, deadLine, status } = req.body;

      const todo = new Todo({
        title,
        priority,
        deadLine,
        author,
        status,
      });

      await todo.save();

      return res.json({ todo });
    } catch (error) {
      console.log(error);
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const { id } = req.params;

      const todo = await Todo.findByIdAndDelete(id);

      return res.json({ todo });
    } catch (error) {
      console.log(error);
    }
  },

  updateTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const { currentStatus, newStatus } = req.body;

      const todo = await Todo.findByIdAndUpdate(id, {
        status: newStatus,
      });

      return res.json({ todo });
    } catch (error) {
      console.log(error);
    }
  },
};
