const router = require("express").Router();
const controller = require("../controller/Todos");

router.get("/get/all/todo/:status", controller.getTodoByStatus);
router.get("/get/all/todo", controller.getAllTodo);
router.post("/create/todo", controller.createTodo);
router.get("/delete/todo/:id", controller.deleteTodo);
router.post("/update/todo/:id", controller.updateTodo);

module.exports = router;
