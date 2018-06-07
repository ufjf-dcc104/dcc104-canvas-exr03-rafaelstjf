function Block(x, y, w, h) {
    this.x0 = x;
    this.x = x;
    this.y0 = y;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = -10;
    this.changes = 0;
}

Block.prototype.draw = function (ctx) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.w, this.h);
}

Block.prototype.move = function (dx) {
    this.x = this.x + this.vx * dt;
}
Block.prototype.boundaries = function (w, h, playerY, scH) {
    if (this.x + this.w <= 0) {
        this.x = w + this.w;//coloca antes da tela na direita
        if (this.changes == 0) {
            if (playerY > this.h) {
                this.h = Math.random() * (playerY - this.h) + this.h;
            } else {
                this.h = Math.random() * (this.h - playerY) + playerY;
            }
            this.h -= 50;
            if (this.y > 40)
                this.y = scH - this.h;
        }
        this.changes++;
    } else if (this.x + this.w > 0 && this.x + this.w < w) {
        if (this.change > 0)
            this.change = 0;
    }
}