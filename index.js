const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3009;

app.use(express.static("public"));

io.on("connection", (socket) => {

});


server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});