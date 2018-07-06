function Player(x0, y0) {
    this.x0 = x0;
    this.y0 = y0;
    this.x = x0;
    this.y = y0;
    this.w = 40;
    this.h = 40;
    this.ax = 0;
    this.ay = 0;
    this.vx = 0;
    this.vy = 0;
    this.lifes = 1;
    this.jumping = false;
    this.maxH = 10;
    this.yJump = 0;
}
Player.prototype.draw = function (ctx, key) {
    /*ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
    */
   spriteController.drawSize(ctx, key, this.x, this.y, this.w, this.h);

}
Player.prototype.move = function (dt, gravity) {
    this.vx = this.vx + this.ax * dt;
    this.vy = this.vy + (this.ay + gravity) * dt;
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
}
Player.prototype.boundaries = function (h) {
    if (this.h + this.y >= h)
        return true;
}