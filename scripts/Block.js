function Block(x, y, w, h) {
    this.x0 = x;
    this.x = x;
    this.y0 = y;
    this.y = y;
    this.w = w;
    this.h = h;
    this.h0 = h;
    this.vx = -10;
}

Block.prototype.draw = function (ctx) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.w, this.h);
}

Block.prototype.move = function (dt) {
    this.x = this.x + this.vx * dt;
}
Block.prototype.boundaries = function (w, h) {
    if (this.x + this.w <= 0)
        return true;
    else
        return false;
}
Block.prototype.checkCollision = function (target){
    if (target.x + target.w < this.x) return false;
    if (target.x > this.x + this.w) return false;
    if (target.y + target.h < this.y) return false;
    if (target.y > this.y + this.h) return false;
    return true;

}