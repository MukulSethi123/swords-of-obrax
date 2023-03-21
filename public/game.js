console.log("game.js");
var socket = io();
const position = {
  x: 0,
  y: 0,
};
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      console.log("Arrow UP");
      //   position.y >= 0 && (position.y = position.y - 5);
      position.y = position.y - 5;

      break;
    case "ArrowDown":
      console.log("ADown");
      //   position.y <= canvas.height && (position.y = position.y + 5);
      position.y = position.y + 5;
      break;
    case "ArrowRight":
      console.log("Aright");
      //   position.y <= canvas.width && (position.x = position.x + 5);
      position.x = position.x + 5;
      break;
    case "ArrowLeft":
      console.log("Aleft");
      //   position.y >= 0 && (position.x = position.x - 5);
      position.x = position.x - 5;
      break;
  }
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(canvas.height);

const animate = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "blue";
  ctx.fillRect(position.x, position.y, 150, 150);
  ctx.fillStyle = "green";
  ctx.fillRect(position.x + 450, position.y + 450, 100, 100);

  window.requestAnimationFrame(animate);
};

animate();
