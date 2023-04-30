const router = require("express").Router();
const controller = require("../controller/Todos");

router.get("/get/all/tasks/:status", controller.getTasksByStatus);

module.exports = router;
