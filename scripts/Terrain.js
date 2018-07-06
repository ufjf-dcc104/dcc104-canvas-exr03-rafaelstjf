function Terrain(w, h) {
    this.w = w;
    this.h = h;
    this.blocks = [];
    this.points = [];
    this.time = 0;
}
Terrain.prototype.draw = function (ctx) {
    for (var i = 0; i < this.blocks.length; i++)
        this.blocks[i].draw(ctx);
}
Terrain.prototype.move = function (dt, playerX) {
    for (var i = 0; i < this.blocks.length; i++) {
        this.blocks[i].move(dt);
        if ((this.blocks[i].x <= playerX && this.points[i] == false))
        {
            this.points[i] = true;
            score+=0.5;
        }
        if (this.blocks[i].x == 0) {
            this.blocks.splice(i);
            this.points.splice(i);
        }
    }
}
Terrain.prototype.spawn = function (dt, playerY) {
    var block;
    this.time = this.time + dt;
    if (this.time >= 10.0) {
        var dist = this.h / 2 - playerY - 10;
        if (playerY < 40)
            dist = 0;
        block = new Block(this.w, 40, 30, 100 + dist);
        this.blocks.push(block);
        this.points.push(false);
        block = new Block(this.w, this.h - (100 + dist), 30, this.h / 2 - (100 - dist));
        this.blocks.push(block);
        this.points.push(false);
        this.time = 0;
    }

}
Terrain.prototype.checkCollision = function (player) {
    for (var i = 0; i < this.blocks.length; i++) {
        if (this.blocks[i].checkCollision(player))
            return true;
    }
    return false;
}
Terrain.prototype.reset = function () {
    this.blocks = [];
    this.points = [];
}