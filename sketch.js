let scene = 0;
let nextScene = false;

//elements
let player;
let pickup;
let brief;
let idea;
let spike = [];
let hurdle = [];
let enemy = [];
let trap = [];
let gravity = 0.3;

// booleans
let alive = true;
let playerpause = false;
let borders = true;
let getBrief = false;
let briefx = false;

// offsets
let x1 = 0
let offset = 0;
let lampRad = 200
let fade = 0;
let fadeAmount = 1;

let layer = [];
let layerImages = [];

var tiledmap;

let BG = 0;
let GROUND = 1;

function preload() {
  retro = loadFont('assets/PixelOperator.ttf');
  tiledmap = loadTiledMap("world", "images");
  character = loadImage("anims/char.png")
  pick = loadImage("anims/pick.png")
  spike = loadImage("anims/spike.png")
  trapd = loadImage("anims/trap.png")
  song = loadSound('assets/ghost.mp3');
}

function setup() {
  createCanvas(400, 400);
  noStroke()

  layer = getTilemapLayers(tiledmap);
  layerImages = getTilemapImages(tiledmap);

  textFont(retro);

  brief = new Pickup(220, 370);
  inspi = new Pickup(880, 100);
  idea = new Pickup(950, 420)

  spike[0] = new Spike(70, 70)
  spike[1] = new Spike(550, 23)
  spike[2] = new Spike(655, 23)

  hurdle[0] = new Hurdle(350, 160)
  hurdle[1] = new Hurdle(250, 43)
  hurdle[2] = new Hurdle(450, 43)
  hurdle[3] = new Hurdle(795, 305)
  hurdle[4] = new Hurdle(810, 305)
  hurdle[5] = new Hurdle(825, 305)

  enemy[0] = new Enemy(625, 290)

  trap[0] = new Trap(784, 496);

  player = createSprite(60, 452);
  player.velocity.x = 0;
  player.setDefaultCollider();
  player.alive = true;
  player.addImage(character);
}

function draw() {

  switch (scene) {
    case 0:
      // background(255)
      scene0();
      break;
    case 1:
      background(0);
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
  }

  checkInput();

  if (borders) {
    checkWorldBounds(player, tiledmap);
  }

  drawSprite(player);

  focusCamera(player, tiledmap);

  die()

   if (alive && scene === 1) {
     song.play()
  // song.loop();
   } else if(!alive) { 
     song.stop() 
  }

};

function die() {
  if (!alive) {
    //    rect(width / 2 - 50, height / 2 - 50, 100, 100);
    background(255, 255, 255, 150)
    rectMode(CENTER);
    rect(camera.position.x, camera.position.y, 300, 100)
    textAlign(CENTER);
    text('You were not able to complete the project :(', camera.position.x, camera.position.y - 10);
    text('Press ENTER to RETRY', camera.position.x, camera.position.y + 10);
  }
  if (x1 === 1) {
    player.velocity.x = 0;
    player.velocity.y = -5;
    player.rotation = 90;

    alive = false;
    offset++;
  }

  if (offset >= 20) {
    player.velocity.y = 5 + gravity;
  }
}
