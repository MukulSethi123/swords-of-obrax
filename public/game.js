console.log("game.js");
var socket = io();
let realTimePos = { x: 600, y: 550 };
document.addEventListener("keydown", (e) => {
  const position = {
    x: realTimePos.x,
    y: realTimePos.y,
  };
  switch (e.key) {
    case "ArrowUp":
      position.y >= 0 && (position.y = position.y - 5);

      break;
    case "ArrowDown":
      if (position.y + 160 <= canvas.height - 100) {
        position.y = position.y + 5;
      }
      break;
    case "ArrowRight":
      position.x + 90 <= canvas.width && (position.x = position.x + 5);
      break;
    case "ArrowLeft":
      position.x >= 0 && (position.x = position.x - 5);

      break;
  }
  socket.emit("position", position);
});

//recieve broadcast from server and update position
socket.on("get_position_data", (position) => {
  realTimePos = position;
  console.log(realTimePos);
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(canvas.height);

const animate = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "blue";
  ctx.fillRect(realTimePos.x, realTimePos.y, 75, 150);
  window.requestAnimationFrame(animate);
};

animate();
