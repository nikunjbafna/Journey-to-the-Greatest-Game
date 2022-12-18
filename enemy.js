function handleEnemy() {

    enemy[0].show()
    enemy[0].checkHit(player)

    enemy[0].sprite.draw = function () {
        fill('red')
        rect(0, 0, 35, 25)
        textAlign(CENTER)
        fill(255)
        textSize(10)
        text('SOCIAL', 0, -3)
        text('MEDIA', 0, 7)
    }
}

class Enemy {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.setCollider("rectangle", 0, 0, 35, 25)
        this.sprite.immovable = true;
        // this.sprite.scale = 0.5;
        this.sprite.addImage(trapd);
    }

    show() {
        drawSprite(this.sprite);
        this.sprite.position.x = this.sprite.position.x + sin(frameCount / 50);
    }

    checkHit(player) {
        //let touchingGround1 = isInContact(this.sprite, layer[GROUND]);
        //if (touchingGround1.below === false) {
        if (this.sprite.collide(player)) {
            //this.sprite.remove();
            //kaching.play();
            //score = score + 1;
            x1 = 1;
            //return true;
        }
        // }
        return false;
    }
}