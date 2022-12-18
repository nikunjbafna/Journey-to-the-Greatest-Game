function handlePickups() {
    if (!inspi.checkHit(player)) {
        inspi.show()
    };

    brief.show()

    idea.show()

    // console.log(brief.checkHit(player))
    if (brief.checkHit(player)) {
        briefx = true;
        playerpause = true;
        player.velocity.x = 0;
        player.velocity.y = 0;
    };

    if (briefx) {
        // console.log('yee')
        // translate(-150, 50)
        if (playerpause) {
            push()
            rectMode(CENTER)
            rect(camera.position.x, camera.position.y + 140, 380, 100)
            textAlign(CENTER)
            translate(0, 110);
            text('Here is your brief:', camera.position.x, camera.position.y)
            text('Create a design project that blows everyone\'s mind', camera.position.x, camera.position.y + 15)
            text('This is stage 1: The Ideation stage', camera.position.x, camera.position.y + 30)
            text('Escape the hurdles and come up with the perfect idea', camera.position.x, camera.position.y + 45)
            fill(150)
            text('press ENTER to continue', camera.position.x, camera.position.y + 65)
            pop()
        }
        // setTimeout(() => {
        if (keyCode === ENTER) {
            playerpause = false;
            // }, 1000);
        }
    }

    idea.sprite.draw = function () {
        translate(-5, sin(frameCount / 20) * 5)
        push()
        fill('yellow')
        rect(0, 0, 100, 120)
        pop()
        textAlign(CENTER)
        text('Project Idea', 0, 0)
    }
    inspi.sprite.draw = function () {
        translate(-5, sin(frameCount / 20) * 5)
        rect(0, 0, 70, 50)
        textAlign(CENTER)
        text('INPIRATION', 0, 0)
    }

    brief.sprite.draw = function () {
        translate(-5, sin(frameCount / 20) * 5)
        rect(0, 0, 70, 50)
        textAlign(CENTER)
        text('Collect your', 0, -7)
        text('Project Brief!', 0, 10)
    }
}

class Pickup {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.setCollider("rectangle", 0, 0, 70, 50)
        // this.sprite.addImage(pick);
        this.sprite.immovable = true;
    }
    show() {
        drawSprite(this.sprite);
    }
    checkHit(player) {
        if (this.sprite.collide(player)) {
            this.sprite.remove();
            //kaching.play();
            //score = score + 1;
            return true;
        }
        return false;
    }
}