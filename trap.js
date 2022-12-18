function handleTrap() {

    trap[0].show()
    trap[0].checkHit(player)

}

class Trap {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.setCollider("rectangle", 0, 0, 160, 32)
        // this.sprite.immovable = true;
        // this.sprite.scale = 0.5;
        this.sprite.addImage(trapd);
    }

    show() {
        drawSprite(this.sprite);
    }

    checkHit(player) {
        //let touchingGround1 = isInContact(this.sprite, layer[GROUND]);
        //if (touchingGround1.below === false) {
        if (this.sprite.collide(player)) {
            setTimeout(() => {
                borders = false;
            }, 1000);
        }
        // }
        return false;
    }
}