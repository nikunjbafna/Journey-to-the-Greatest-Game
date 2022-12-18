function checkInput() {
  //allowing movement
  let touchingGround = isInContact(player, layer[GROUND]);
  
  if (!playerpause) {
    if (!scene == 0) {

      player.velocity.y = player.velocity.y + gravity;

      if (alive) {
        //moving left and right 
        if (keyIsDown(LEFT_ARROW)) {
          // player.changeAnimation('walk');
          // player.mirrorX(-1);
          player.velocity.x = player.velocity.x - 1

        } else if (keyIsDown(RIGHT_ARROW)) {
          // player.changeAnimation('walk');
          // player.mirrorX(1);
          player.velocity.x = player.velocity.x + 1;
        }

        if (player.velocity.x < -5) {
          player.velocity.x = -5;
        }
        if (player.velocity.x > 5) {
          player.velocity.x = 5;
        }
        if (player.velocity.x > -1 && player.velocity.x < 1) {
          player.velocity.x = 0;
        }

        player.velocity.x = 0.9 * player.velocity.x;
      }

    }
      ///deal with vertical movemenct
      playerBrake(player, touchingGround);

      if (alive) {
        //jumping
        if (keyIsDown(32) && touchingGround.below) {
          player.velocity.y = -8;
        }
      }
    }

    if (!alive) {
      if (keyIsDown(13)) {
        location.reload();
      }
    }

}