const routes= require("express").Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get("/", lesson1Controller.helloDani);
routes.get("/dani", lesson1Controller.helloRoute);

module.exports= routes;