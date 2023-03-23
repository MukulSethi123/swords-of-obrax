export class Fighter {
  constructor({ ctx, position, size, color }) {
    this.ctx = ctx;
    this.size = size;
    this.position = position;
    this.color = color;
  }

  draw = () => {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  };
}
