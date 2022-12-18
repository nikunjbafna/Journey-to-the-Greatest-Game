function handleHurdle() {

    for (let i = 0; i < 4; i++) {
        hurdle[i].show()
        hurdle[i].checkHit(player)
    }

    hurdle[0].sprite.draw = function () {
        fill(0)
        triangle(-28, 0, 0, -55, 28, 0)
    }

    hurdle[1].sprite.draw = function () {
        fill(0)
        translate(0,-55)
        rotate(PI)
        triangle(-28, 0, 0, -55, 28, 0)
    }

    hurdle[2].sprite.draw = function () {
        fill(0)
        translate(0,-55)
        rotate(PI)
        triangle(-28, 0, 0, -55, 28, 0)
    }

    hurdle[3].sprite.draw = function () {
        scale(0.5)
        fill(0)
        triangle(-28, 0, 0, -55, 28, 0)
    }

    hurdle[4].sprite.draw = function () {
        scale(0.5)
        fill(0)
        triangle(-28, 0, 0, -55, 28, 0)
    }

    hurdle[5].sprite.draw = function () {
        scale(0.5)
        fill(0)
        triangle(-28, 0, 0, -55, 28, 0)
    }
}

class Hurdle {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.setCollider("rectangle",0,-27,56,55)
        // this.sprite.addImage(spike);
        this.sprite.immovable = true;
        this.sprite.scale = 0.5
    }
    show() {
        drawSprite(this.sprite);
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