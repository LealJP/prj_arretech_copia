const {create, list} = require('./controllers/UserController');
const  createProduct  = require('./controllers/ProductController');

//onst Router = require('express')


/*
const routes = Router();

routes.post("/users", create);
routes.get("/users", list);

//routes.post("/products", createProduct);

module.exports = routes;*/


const routes = (app) => {
    app.post("/users", create);
    app.get("/users", list);


    app.post("/products", createProduct);
}

module.exports = routes;