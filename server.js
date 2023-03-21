const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3030;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

io.on("connection", (socket) => {
  console.log("a user is connected: ", socket.id);
  socket.on("position", (pos) => {
    //broadcast postion data to clients
    io.emit("get_position_data", pos);
  });
});

server.listen(port, () => {
  console.log("running client");
});
