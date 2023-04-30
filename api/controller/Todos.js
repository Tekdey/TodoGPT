const Tasks = require("../schema/Tasks");

module.exports = {
  getTasksByStatus: async (req, res, next) => {
    try {
      const { status } = req.params;
      console.log(status);

      const task = await Tasks.create({ title: "hello world" });
      console.log(task);
      return res.json({ hello: "world" });
    } catch (error) {
      console.log(error);
    }
  },
};
