function handleSpikes() {

    for (let i = 0; i < 3; i++) {
        spike[i].show()
    }

    if (player.position.x <= spike[0].sprite.position.x + 70 && player.position.y <= 290) {
        spike[0].move();
    }

    spike[0].sprite.draw = function () {
        textSize(17)
        textAlign(CENTER)
        text('PROCRASTINATION', 0, -15)
        imageMode(CENTER)
        image(spike, 0, 0)
    }

    for (let i = 0; i < 3; i++) {
        if (player.position.x >= spike[i].sprite.position.x - 60 && player.position.y <= 200) {
            spike[i].move();
        }
    }

    spike[1].sprite.draw = function () {
        textSize(17)
        textAlign(CENTER)
        text('DISTRACTIONS', 0, -15)
        imageMode(CENTER)
        image(spike, 0, 0)
    }

    spike[2].sprite.draw = function () {
        textSize(17)
        textAlign(CENTER)
        text('SELF-DOUBT', 0, -15)
        imageMode(CENTER)
        image(spike, 0, 0)
    }

    for (let i = 0; i < 3; i++) {
        spike[i].checkHit(player)
    }
}

class Spike {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.setDefaultCollider();
        this.sprite.addImage(spike);
        this.sprite.immovable = true;
    }
    show() {
        drawSprite(this.sprite);
        let touchingGround1 = isInContact(this.sprite, layer[GROUND]);
        //console.log(touchingGround1.below)
        //playerBrake(this.sprite, touchingGround1);
        if (touchingGround1.below) {
            this.sprite.velocity.y = 0;
            setTimeout(() => { this.sprite.remove() }, 450);
            // this.sprite.velocity.y = 0
            // this.sprite.position.y += 2
            //this.sprite.position.y = this.sprite.position.y + touchingGround1.belowDistance
            return true;
        }
        return false;
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

    move() {
        this.sprite.velocity.y = this.sprite.velocity.y + gravity + 0.2;
    }
}