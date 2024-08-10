const { Router } = require("express");
const userRoutes = require("../module/routes/userRoutes");

const baseRouter = Router();
const basePath = '/api'

// baseRouter.get('/user', (req, res)=>{
//     res.json({data:{name:"Anwarul", age:20}})
// })
baseRouter.use(userRoutes)

module.exports = { basePath, baseRouter };
