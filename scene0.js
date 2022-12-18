function scene0() {

    lamp();

    push()
    fill(255)
    textSize(20)
    textAlign(RIGHT)
    translate(150, -150);
    text('The Journey to the Greatest Project', camera.position.x, camera.position.y);
    text('Press ENTER to START', camera.position.x, camera.position.y + 40);

    textSize(15)
    text('left/right to move', camera.position.x, camera.position.y + 260);
    text('space to jump', camera.position.x, camera.position.y + 280);
    text('enter to interact', camera.position.x, camera.position.y + 300);

    pop()

    if (keyCode === ENTER && scene === 0) {
        lampRad = lampRad + (frameCount / 1);
        setTimeout(() => {
            scene = 1;
            // console.log('yes');
        }, 200);
    }
}


function lamp() {
    blendMode(BLEND);
    // light the lamp
    lightenLamp();
    blendMode(MULTIPLY);
    // show the map
    image(layerImages[BG], 0, 0);
    image(layerImages[GROUND], 0, 0);
    // show my avatar
    blendMode(BLEND);
}

function lightenLamp() {
    circle(
        player.position.x + 4,
        player.position.y + 4,
        lampRad + sin((frameCount / 40)) * 20,
    );
    // filter(BLUR, 5);
}