function Terrain(w, h){
    this.w = w;
    this.h = h;
    this.blocks = [];
    this.block;
    for(var i = 0; i < 16; i++){
        if(i%2 == 0){
            this.block = new Block(this.w + i*50,40, 30, 100);
        }else {
            this.block = new Block(this.w + i*50,this.h-100, 30, 100);
        }
        this.blocks.push(this.block);
    }

}
Terrain.prototype.draw = function(ctx){
    for(var i = 0; i < 16; i++)
        this.blocks[i].draw(ctx);
}
Terrain.prototype.moveAndBoundaries = function(dt, playerY, scH){
    for(var i = 0; i < 16; i++){
        this.blocks[i].move(dt);
        this.blocks[i].boundaries(this.w, this.h, playerY,scH);
    }
}