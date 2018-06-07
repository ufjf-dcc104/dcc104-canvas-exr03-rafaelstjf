function HUD(screenWidth) {
    this.x = 0;
    this.y = 0;
    this.screenWidth = screenWidth;
    //lifes
    this.spriteLife = new Image();
    this.spriteLife.src="assets/heart.png";
    //ctx.drawImage(this.sprite,this.x, this.y,this.w, this.h);

}

HUD.prototype.draw = function (ctx, score, highScore, lifes) {
    //Lifes: S2 S2 S2  Score: XX HighScore: XX
    ctx.fillRect(1, 1, this.screenWidth - 2, 48);
    ctx.font = "32px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 550, 30);
    ctx.fillText("High Score: " + highScore, 750, 30);
    ctx.fillText("Lifes: ", 2, 32);
    ctx.drawImage(this.spriteLife, Math.abs(lifes-3)*(this.spriteLife.width/3),0, (this.spriteLife.width/3), this.spriteLife.height, 80, 4, 32, 32);
}