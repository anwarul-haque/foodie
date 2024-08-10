const userRoutes = require("express").Router();
const { addUser, listUser, deleteUser } = require("../controller/userController");


userRoutes.post("/user",  addUser);
userRoutes.get("/user",  listUser);
userRoutes.delete("/user/:userId",  deleteUser);


module.exports = userRoutes;
