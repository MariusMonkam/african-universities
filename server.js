const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("afriuniv.json");
const router = jsonServer.router("./src/data/macro_nutriments.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
