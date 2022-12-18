function scene2() { 
    background('red')
    rectMode(CENTER);
    rect(camera.position.x, camera.position.y, 300, 100)
    textAlign(CENTER);
    text('Stage 1 Complete \nStage 2 and 3 TBA \nPress ENTER to play again', camera.position.x, camera.position.y - 10);
    // text('', camera.position.x, camera.position.y + 10);

    if (keyIsDown(13)) {
        location.reload();
      }
}