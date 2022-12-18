// function lightenLamp() {
//     noStroke();
//     ellipse(player.position.x + 4, player.position.y + 4, LIGHT_RADIUS * 5 + sin(second() * 10), LIGHT_RADIUS * 5 + sin(second() * 10));
//     //filter(BLUR, 5);
//   }
  
//   function lamp() {
//     blendMode(BLEND);
//     // light the lamp
//     lightenLamp();
//     blendMode(MULTIPLY);
//     // show the map
//     image(layerImages[BG], 0, 0);
//     image(layerImages[GROUND], 0, 0);
//     // show my avatar
//     blendMode(BLEND);
//   }