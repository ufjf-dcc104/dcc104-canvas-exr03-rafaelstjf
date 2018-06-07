Function Menu(){

}

Menu.prototype.draw = function (ctx) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Space Shooter", 10 + w / 2, h / 2);
    ctx.font = "29px Arial";
    ctx.fillText("High Score: " + highScore, 750, 30);
    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Press SPACE to play", w / 2, 60 + h / 2);
}