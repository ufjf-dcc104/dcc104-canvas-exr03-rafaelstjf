function HUD(screenWidth) {
    this.x = 0;
    this.y = 0;
    this.screenWidth = screenWidth;

}

HUD.prototype.draw = function (ctx, score, highscore) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, this.screenWidth , 40);
    ctx.strokeStyle = "black";
    ctx.strokeRect(1, 1, this.screenWidth-1, 39);
    ctx.font = "32px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 10, 30);
    ctx.fillText("High Score: " + highscore, 350, 30);
}