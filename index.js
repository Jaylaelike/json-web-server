const jsonServer = require('json-server');
const server = jsonServer.create();
const fs = require("fs");
const filePath = fs.writeFileSync('db.json', JSON.stringify(data));

const router = jsonServer.router(filePath);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;
const cors = require('cors');

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);

server.options('*', cors());


server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running');
});
