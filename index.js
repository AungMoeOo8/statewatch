const { WebSocketServer, WebSocket } = require("ws");
const http = require("http");
const { Edge } = require("edge.js");
const { join } = require("path");

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("A client connected");
  ws.on("message", (data, isBinary) => {
    // ws.emit('data', data, { binary: false });
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});
