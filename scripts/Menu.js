function Menu() {
}

Menu.prototype.draw = function (ctx, w, h, state) {
    if (state == 0) {
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Flappy ",250, h / 2);
        ctx.font = "30px Arial";
        ctx.fillStyle = "green";
        ctx.fillText("Press SPACE to play",180, 60 + h / 2);
    }else if (state == 2) {
        ctx.font = "100px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Game Over", 50, h / 2);
        ctx.font = "30px Arial";
        ctx.fillStyle = "green";
        ctx.fillText("Press SPACE to play", 180, 60 + h / 2);
    }
}