function scene1() {

    image(layerImages[BG], 0, 0);
    image(layerImages[GROUND], 0, 0);

    handlePickups();
    handleSpikes();
    handleHurdle();
    handleEnemy();
    handleTrap();

    // console.log(scene, player.position.y)
    if (player.position.x > 425 && player.position.x < 825 && player.position.y > 350) {
        slowdown();
    }

    // console.log(scene)
    if (player.position.y > 460) {
        background(0, 0, 0, fade);
        fade += fadeAmount * 3;
    }

    if (player.position.y > 550) {
        scene = 2;
    }
}

function slowdown() {

    push()
    rectMode(CENTER)
    rect(player.position.x, player.position.y - 70, 90, 50, 5)
    rect(player.position.x + 30, player.position.y - 38, 10, 10, 3)
    rect(player.position.x + 25, player.position.y - 27, 5, 5, 3)
    if (player.position.y < 454) {
        textSize(10)
        text('It seems so difficult to reach the idea...', player.position.x, player.position.y - 70, 80, 40)
    }
    if (player.position.y > 454) {
        text('WAIT what is happening!', player.position.x, player.position.y - 70, 80, 40)
        // return true;
    }
    pop()

    if (player.velocity.x < -1) {
        player.velocity.x = -0.5;
    }
    if (player.velocity.x > 1) {
        player.velocity.x = 0.5;
    }
    if (player.velocity.y < 1) {
        player.velocity.y = 0.5;
    }

    // return false;
}