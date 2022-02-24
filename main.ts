namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const NPCunimportant = SpriteKind.create()
    export const Grendel = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LeftLast == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . . b b a a a a b b b . 
            . 5 5 b b b b b 5 5 b . 
            . 5 5 b b b b b 5 5 b . 
            . . . 4 4 c 4 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . . b b a a a 5 5 b . . 
            . 5 5 b b b b 5 5 b . . 
            . 5 5 b b b b b b . . . 
            . . . 4 4 c 4 4 4 . . . 
            . . . e e . . e e . . . 
            . . . . . . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . . b b a a a a b b b . 
            . 5 5 b b b b b 5 5 b . 
            . 5 5 b b b b b 5 5 b . 
            . . . 4 4 c 4 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            5 5 b b a a a a b b b . 
            5 5 b b b b b b 5 5 b . 
            . . . b b b b b 5 5 b . 
            . . . 4 4 c 4 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . . . . . . 
            `],
        100,
        true
        )
    } else if (LeftLast == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b . . 
            . b 5 5 b b b b b 5 5 . 
            . b 5 5 b b b b b 5 5 . 
            . . . 4 4 4 c 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . . b 5 5 a a a b b . . 
            . . b 5 5 b b b b 5 5 . 
            . . . b b b b b b 5 5 . 
            . . . 4 4 4 c 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . . . . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b . . 
            . b 5 5 b b b b b 5 5 . 
            . b 5 5 b b b b b 5 5 . 
            . . . 4 4 4 c 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b 5 5 
            . b 5 5 b b b b b b 5 5 
            . b 5 5 b b b b b . . . 
            . . . 4 4 4 c 4 4 . . . 
            . . . e e . . e e . . . 
            . . . . . . . e e . . . 
            `],
        100,
        true
        )
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Grendel, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    GrendelHealth += -1
    music.smallCrash.playUntilDone()
    pause(200)
    if (GrendelHealth == 0) {
        Plot_Conversation = 1
        Grendel.destroy(effects.fire, 1000)
        effects.confetti.startScreenEffect()
        pause(5000)
        game.over(true, effects.confetti)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    mySprite.sayText("Hail, Hrothgar!", 2000, false)
    pause(3000)
    mySprite.sayText("Can I kill Grendel", 2000, false)
    pause(3000)
    mySprite.sayText("I'm really good at killing things", 2000, false)
    pause(3000)
    Hrothgar.sayText("Yeah just wear clothes", 2000, false)
    pause(3000)
    mySprite.sayText("nah i'm good", 2000, false)
    pause(3000)
    color.FadeToBlack.startScreenEffect(500)
    pause(500)
    color.startFade(color.Black, color.originalPalette, 500)
    Grendel = sprites.create(assets.image`Grendel Sprite`, SpriteKind.Grendel)
    Grendel.follow(mySprite, 25)
    tiles.placeOnRandomTile(Grendel, assets.tile`myTile28`)
    GrendelHealth = 5
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerSpeedXY = 25
    if (LeftLast == 0) {
        mySprite.setImage(img`
            . . . . . . . . . . c c . . . . 
            . . . . . . . . . c c c c . . . 
            . . . 1 1 1 . . c c c c c c . . 
            . 1 1 1 1 1 1 . c c c c c c . . 
            . . 1 1 1 . 1 . b b 5 5 b b . . 
            c b . 1 1 . . . b f 5 f 5 b . . 
            b c b . 1 1 . . b 5 5 5 5 b . . 
            . b c b . 1 . . b 5 5 5 5 b . . 
            . . b c b e . . . b 5 5 b . . . 
            . . . b c e . b a a a a a a b . 
            . . . e e e 5 b b a a a a b b b 
            . . . . . 5 e b b b b b b 5 5 b 
            . . . . . . . . b b b b b 5 5 b 
            . . . . . . . . 4 4 c 4 4 4 . . 
            . . . . . . . . e e . . e e . . 
            . . . . . . . . e e . . e e . . 
            `)
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 c 4 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    } else if (LeftLast == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . c c . . . . 
            . . . . . . . . . c c c c . . . 
            . . . 1 1 1 . . c c c c c c . . 
            . 1 1 1 1 1 1 . c c c c c c . . 
            . . 1 1 1 . 1 . b b 5 5 b b . . 
            c b . 1 1 . . . b f 5 f 5 b . . 
            b c b . 1 1 . . b 5 5 5 5 b . . 
            . b c b . 1 . . b 5 5 5 5 b . . 
            . . b c b e . . . b 5 5 b . . . 
            . . . b c e . b a a a a a a b . 
            . . . e e e 5 b b a a a a b b b 
            . . . . . 5 e b b b b b b 5 5 b 
            . . . . . . . . b b b b b 5 5 b 
            . . . . . . . . 4 4 c 4 4 4 . . 
            . . . . . . . . e e . . e e . . 
            . . . . . . . . e e . . e e . . 
            `)
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 c 4 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerSpeedXY = 25
    if (controller.up.isPressed() && !(controller.left.isPressed() || controller.right.isPressed())) {
        if (LeftLast == 0) {
            mySprite.setImage(img`
                . . . . c c . . . . . . . . . . 
                . . . c c c c . . . . . . . . . 
                . . c c c c c c . . 1 1 1 . . . 
                . . c c c c c c . 1 1 1 1 1 1 . 
                . . b b 5 5 b b . 1 . 1 1 1 . . 
                . . b 5 f 5 f b . . . 1 1 . b c 
                . . b 5 5 5 5 b . . 1 1 . b c b 
                . . b 5 5 5 5 b . . 1 . b c b . 
                . . . b 5 5 b . . . e b c b . . 
                . b a a a a a a b . e c b . . . 
                b b b a a a a b b 5 e e e . . . 
                b 5 5 b b b b b b e 5 . . . . . 
                b 5 5 b b b b b . . . . . . . . 
                . . 4 4 4 c 4 4 . . . . . . . . 
                . . e e . . e e . . . . . . . . 
                . . e e . . e e . . . . . . . . 
                `)
        } else {
            mySprite.setImage(img`
                . . . . . . . . . . c c . . . . 
                . . . . . . . . . c c c c . . . 
                . . . 1 1 1 . . c c c c c c . . 
                . 1 1 1 1 1 1 . c c c c c c . . 
                . . 1 1 1 . 1 . b b 5 5 b b . . 
                c b . 1 1 . . . b f 5 f 5 b . . 
                b c b . 1 1 . . b 5 5 5 5 b . . 
                . b c b . 1 . . b 5 5 5 5 b . . 
                . . b c b e . . . b 5 5 b . . . 
                . . . b a e . b a a a a a a b . 
                . . . e e e 5 b b a a a a b b b 
                . . . . . 5 e b b b b b b 5 5 b 
                . . . . . . . . b b b b b 5 5 b 
                . . . . . . . . 4 4 c 4 4 4 . . 
                . . . . . . . . e e . . e e . . 
                . . . . . . . . e e . . e e . . 
                `)
        }
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 d d d d d d d d 1 1 1 1 
            1 1 d d . . . . . . . . d d 1 1 
            1 d . . . . . . . . . . . . d 1 
            d . . . . . . . . . . . . . . d 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 0)
        projectile.y += -15
        projectile.scale += 0.5
        scene.cameraShake(1, 200)
        pause(150)
        projectile.destroy()
        if (LeftLast == 0) {
            mySprite.setImage(img`
                . . . . . c c . . . . . 
                . . . . c c c c . . . . 
                . . . c c c c c c . . . 
                . . . c c c c c c . . . 
                . . . b b 5 5 b b . . . 
                e . . b 5 f 5 f b . . . 
                . e e b 5 5 5 5 b . . . 
                . e c b 5 5 5 5 b . . . 
                . e c c b 5 5 b . . . . 
                . . b a a a a a a b . . 
                . b b b a a a a b b b . 
                . b b b b b b b b b b . 
                . 5 5 b b b b b b 5 5 . 
                . 5 5 4 4 4 c 4 4 5 5 . 
                . . . e e . . e e . . . 
                . . . e e . . e e . . . 
                `)
        } else {
            mySprite.setImage(img`
                . . . . . c c . . . . . 
                . . . . c c c c . . . . 
                . . . c c c c c c . . . 
                . . . c c c c c c . . . 
                . . . b b 5 5 b b . . . 
                . . . b f 5 f 5 b . . e 
                . . . b 5 5 5 5 b e e . 
                . . . b 5 5 5 5 b c e . 
                . . . . b 5 5 b c c e . 
                . . b a a a a a a b . . 
                . b b b a a a a b b b . 
                . b b b b b b b b b b . 
                . 5 5 b b b b b b 5 5 . 
                . 5 5 4 4 c 4 4 4 5 5 . 
                . . . e e . . e e . . . 
                . . . e e . . e e . . . 
                `)
        }
    } else {
        if (LeftLast == 0) {
            mySprite.setImage(img`
                . . . . . . . . . . c c . . . . 
                . . . . . . . . . c c c c . . . 
                . . . 1 1 1 . . c c c c c c . . 
                . 1 1 1 1 1 1 . c c c c c c . . 
                . . 1 1 1 . 1 . b b 5 5 b b . . 
                c b . 1 1 . . . b f 5 f 5 b . . 
                b c b . 1 1 . . b 5 5 5 5 b . . 
                . b c b . 1 . . b 5 5 5 5 b . . 
                . . b c b e . . . b 5 5 b . . . 
                . . . b c e . b a a a a a a b . 
                . . . e e e 5 b b a a a a b b b 
                . . . . . 5 e b b b b b b 5 5 b 
                . . . . . . . . b b b b b 5 5 b 
                . . . . . . . . 4 4 c 4 4 4 . . 
                . . . . . . . . e e . . e e . . 
                . . . . . . . . e e . . e e . . 
                `)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . 1 1 1 1 d . . . . . 
                . . . . . 1 1 1 1 d . . . . . . 
                . . . . 1 1 1 1 d . . . . . . . 
                . . . . 1 1 1 1 d . . . . . . . 
                . . . 1 1 1 1 d . . . . . . . . 
                . . . 1 1 1 1 d . . . . . . . . 
                . . . 1 1 1 1 d . . . . . . . . 
                . . . 1 1 1 1 d . . . . . . . . 
                . . . 1 1 1 1 d . . . . . . . . 
                . . . 1 1 1 1 d . . . . . . . . 
                . . . 1 1 1 1 d . . . . . . . . 
                . . . 1 1 1 1 d . . . . . . . . 
                . . . . 1 1 1 1 d . . . . . . . 
                . . . . 1 1 1 1 d . . . . . . . 
                . . . . . 1 1 1 1 d . . . . . . 
                . . . . . . 1 1 1 1 d . . . . . 
                `, mySprite, 0, 0)
            projectile.x += -8.5
            projectile.scale += 0.5
            scene.cameraShake(1, 200)
            pause(150)
            projectile.destroy()
            mySprite.setImage(img`
                . . . . . c c . . . . . 
                . . . . c c c c . . . . 
                . . . c c c c c c . . . 
                . . . c c c c c c . . . 
                . . . b b 5 5 b b . . . 
                . . . b f 5 f 5 b . . e 
                . . . b 5 5 5 5 b e e . 
                . . . b 5 5 5 5 b c e . 
                . . . . b 5 5 b c c e . 
                . . b a a a a a a b . . 
                . b b b a a a a b b b . 
                . b b b b b b b b b b . 
                . 5 5 b b b b b b 5 5 . 
                . 5 5 4 4 c 4 4 4 5 5 . 
                . . . e e . . e e . . . 
                . . . e e . . e e . . . 
                `)
        } else if (LeftLast == 1) {
            mySprite.setImage(img`
                . . . . c c . . . . . . . . . . 
                . . . c c c c . . . . . . . . . 
                . . c c c c c c . . 1 1 1 . . . 
                . . c c c c c c . 1 1 1 1 1 1 . 
                . . b b 5 5 b b . 1 . 1 1 1 . . 
                . . b 5 f 5 f b . . . 1 1 . b c 
                . . b 5 5 5 5 b . . 1 1 . b c b 
                . . b 5 5 5 5 b . . 1 . b c b . 
                . . . b 5 5 b . . . e b c b . . 
                . b a a a a a a b . e c b . . . 
                b b b a a a a b b 5 e e e . . . 
                b 5 5 b b b b b b e 5 . . . . . 
                b 5 5 b b b b b . . . . . . . . 
                . . 4 4 4 c 4 4 . . . . . . . . 
                . . e e . . e e . . . . . . . . 
                . . e e . . e e . . . . . . . . 
                `)
            projectile = sprites.createProjectileFromSprite(assets.image`swoosh`, mySprite, 0, 0)
            projectile.x += 8.5
            projectile.scale += 0.5
            scene.cameraShake(1, 200)
            pause(150)
            projectile.destroy()
            mySprite.setImage(img`
                . . . . . c c . . . . . 
                . . . . c c c c . . . . 
                . . . c c c c c c . . . 
                . . . c c c c c c . . . 
                . . . b b 5 5 b b . . . 
                e . . b 5 f 5 f b . . . 
                . e e b 5 5 5 5 b . . . 
                . e c b 5 5 5 5 b . . . 
                . e c c b 5 5 b . . . . 
                . . b a a a a a a b . . 
                . b b b a a a a b b b . 
                . b b b b b b b b b b . 
                . 5 5 b b b b b b 5 5 . 
                . 5 5 4 4 4 c 4 4 5 5 . 
                . . . e e . . e e . . . 
                . . . e e . . e e . . . 
                `)
        } else {
        	
        }
        PlayerSpeedXY = 50
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (LeftLast == 0) {
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 c 4 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    } else if (LeftLast == 1) {
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 4 c 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    } else {
    	
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ColorOn == 0) {
        ColorOn = 1
        color.startFade(color.originalPalette, color.GrayScale, 200)
    } else if (ColorOn == 1) {
        ColorOn += 1
        color.startFade(color.GrayScale, color.Poke, 200)
    } else if (ColorOn == 2) {
        ColorOn = 0
        color.startFade(color.Poke, color.originalPalette, 200)
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        . . . b f 5 f 5 b . . e 
        . . . b 5 5 5 5 b e e . 
        . . . b 5 5 5 5 b c e . 
        . . . . b 5 5 b c c e . 
        . . b a a a a a a b . . 
        . b b b a a a a b b b . 
        . b b b b b b b b b b . 
        . 5 5 b b b b b b 5 5 . 
        . 5 5 4 4 c 4 4 4 5 5 . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `)
    LeftLast = 0
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        . . . b f 5 f 5 b . . e 
        . . . b 5 5 5 5 b e e . 
        . . . b 5 5 5 5 b c e . 
        . . . . b 5 5 b c c e . 
        . . b a a a a a a b . . 
        . . b b a a a a b b b . 
        . 5 5 b b b b b 5 5 b . 
        . 5 5 b b b b b 5 5 b . 
        . . . 4 4 c 4 4 4 . . . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `,img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        . . . b f 5 f 5 b . . e 
        . . . b 5 5 5 5 b e e . 
        . . . b 5 5 5 5 b c e . 
        . . . . b 5 5 b c c e . 
        . . b a a a a a a b . . 
        . . b b a a a 5 5 b . . 
        . 5 5 b b b b 5 5 b . . 
        . 5 5 b b b b b b . . . 
        . . . 4 4 c 4 4 4 . . . 
        . . . e e . . e e . . . 
        . . . . . . . e e . . . 
        `,img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        . . . b f 5 f 5 b . . e 
        . . . b 5 5 5 5 b e e . 
        . . . b 5 5 5 5 b c e . 
        . . . . b 5 5 b c c e . 
        . . b a a a a a a b . . 
        . . b b a a a a b b b . 
        . 5 5 b b b b b 5 5 b . 
        . 5 5 b b b b b 5 5 b . 
        . . . 4 4 c 4 4 4 . . . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `,img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        . . . b f 5 f 5 b . . e 
        . . . b 5 5 5 5 b e e . 
        . . . b 5 5 5 5 b c e . 
        . . . . b 5 5 b c c e . 
        . . b a a a a a a b . . 
        5 5 b b a a a a b b b . 
        5 5 b b b b b b 5 5 b . 
        . . . b b b b b 5 5 b . 
        . . . 4 4 c 4 4 4 . . . 
        . . . e e . . e e . . . 
        . . . e e . . . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        e . . b 5 f 5 f b . . . 
        . e e b 5 5 5 5 b . . . 
        . e c b 5 5 5 5 b . . . 
        . e c c b 5 5 b . . . . 
        . . b a a a a a a b . . 
        . b b b a a a a b b b . 
        . b b b b b b b b b b . 
        . 5 5 b b b b b b 5 5 . 
        . 5 5 4 4 4 c 4 4 5 5 . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        . . . b f 5 f 5 b . . e 
        . . . b 5 5 5 5 b e e . 
        . . . b 5 5 5 5 b c e . 
        . . . . b 5 5 b c c e . 
        . . b a a a a a a b . . 
        . b b b a a a a b b b . 
        . b b b b b b b b b b . 
        . 5 5 b b b b b b 5 5 . 
        . 5 5 4 4 c 4 4 4 5 5 . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        e . . b 5 f 5 f b . . . 
        . e e b 5 5 5 5 b . . . 
        . e c b 5 5 5 5 b . . . 
        . e c c b 5 5 b . . . . 
        . . b a a a a a a b . . 
        . b b b a a a a b b b . 
        . b b b b b b b b b b . 
        . 5 5 b b b b b b 5 5 . 
        . 5 5 4 4 4 c 4 4 5 5 . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `)
    LeftLast = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        e . . b 5 f 5 f b . . . 
        . e e b 5 5 5 5 b . . . 
        . e c b 5 5 5 5 b . . . 
        . e c c b 5 5 b . . . . 
        . . b a a a a a a b . . 
        . b b b a a a a b b . . 
        . b 5 5 b b b b b 5 5 . 
        . b 5 5 b b b b b 5 5 . 
        . . . 4 4 4 c 4 4 . . . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `,img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        e . . b 5 f 5 f b . . . 
        . e e b 5 5 5 5 b . . . 
        . e c b 5 5 5 5 b . . . 
        . e c c b 5 5 b . . . . 
        . . b a a a a a a b . . 
        . . b 5 5 a a a b b . . 
        . . b 5 5 b b b b 5 5 . 
        . . . b b b b b b 5 5 . 
        . . . 4 4 4 c 4 4 . . . 
        . . . e e . . e e . . . 
        . . . e e . . . . . . . 
        `,img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        e . . b 5 f 5 f b . . . 
        . e e b 5 5 5 5 b . . . 
        . e c b 5 5 5 5 b . . . 
        . e c c b 5 5 b . . . . 
        . . b a a a a a a b . . 
        . b b b a a a a b b . . 
        . b 5 5 b b b b b 5 5 . 
        . b 5 5 b b b b b 5 5 . 
        . . . 4 4 4 c 4 4 . . . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `,img`
        . . . . . c c . . . . . 
        . . . . c c c c . . . . 
        . . . c c c c c c . . . 
        . . . c c c c c c . . . 
        . . . b b 5 5 b b . . . 
        e . . b 5 f 5 f b . . . 
        . e e b 5 5 5 5 b . . . 
        . e c b 5 5 5 5 b . . . 
        . e c c b 5 5 b . . . . 
        . . b a a a a a a b . . 
        . b b b a a a a b b 5 5 
        . b 5 5 b b b b b b 5 5 
        . b 5 5 b b b b b . . . 
        . . . 4 4 4 c 4 4 . . . 
        . . . e e . . e e . . . 
        . . . . . . . e e . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    if (info.life() < 1) {
    	
    } else {
        music.knock.play()
        pause(100)
        music.knock.stop()
    }
    scene.cameraShake(3, 200)
    mySprite.startEffect(effects.blizzard, 500)
    if (LeftLast == 0) {
        mySprite.setImage(img`
            . . . . 2 c c 2 . . . . 
            . . . 2 c c c c 2 . . . 
            . . 2 c c c c c c 2 . . 
            . . 2 c c c c c c 2 . . 
            . . 2 b b 5 5 b b 2 . . 
            . . 2 b f 5 f 5 b 2 2 e 
            . . 2 b 5 5 5 5 b e e 2 
            . . 2 b 5 5 5 5 b c e 2 
            . . 2 2 b 5 5 b c c e 2 
            . 2 b a a a a a a b 2 . 
            2 b b b a a a a b b b 2 
            2 b b b b b b b b b b 2 
            2 5 5 b b b b b b 5 5 2 
            2 5 5 4 4 c 4 4 4 5 5 2 
            . 2 2 e e 2 2 e e 2 2 . 
            . . 2 e e 2 2 e e 2 . . 
            `)
    } else if (LeftLast == 1) {
        mySprite.setImage(img`
            . . . . 2 c c 2 . . . . 
            . . . 2 c c c c 2 . . . 
            . . 2 c c c c c c 2 . . 
            . . 2 c c c c c c 2 . . 
            . . 2 b b 5 5 b b 2 . . 
            e 2 2 b 5 f 5 f b 2 . . 
            2 e e b 5 5 5 5 b 2 . . 
            2 e c b 5 5 5 5 b 2 . . 
            2 e c c b 5 5 b 2 2 . . 
            . 2 b a a a a a a b 2 . 
            2 b b b a a a a b b b 2 
            2 b b b b b b b b b b 2 
            2 5 5 b b b b b b 5 5 2 
            2 5 5 4 4 4 c 4 4 5 5 2 
            . 2 2 e e 2 2 e e 2 2 . 
            . . 2 e e 2 2 e e 2 . . 
            `)
    } else {
    	
    }
    pause(500)
    if (LeftLast == 0) {
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 c 4 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    } else if (LeftLast == 1) {
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 4 c 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`grass0`, function (sprite, location) {
    Enemy_in_map = 0
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`Herot 2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`grass Herot start`)
    myEnemy = sprites.create(img`
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . 1 1 f 1 f 1 . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 . e . . 
        . c . 1 d . d . . d e . 
        c c . 1 1 1 1 . . d . e 
        b b e e e e e e . d . e 
        b b e e e e e e e d 1 e 
        b b e e e e e e e d 1 e 
        . b e e e e e e 1 d . e 
        . b e e e e e e . d . e 
        . . 1 1 1 1 1 1 . d e . 
        . . 1 1 . . 1 1 . e . . 
        . . 1 1 . . 1 1 . . . . 
        . . 1 1 . . 1 1 . . . . 
        `, SpriteKind.Enemy)
    Enemy_in_map += -1
    tiles.placeOnRandomTile(myEnemy, assets.tile`shore nuetral`)
    myEnemy.follow(mySprite, 25)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (LeftLast == 0) {
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 c 4 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    } else if (LeftLast == 1) {
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 4 c 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    } else {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LeftLast == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . . b b a a a a b b b . 
            . 5 5 b b b b b 5 5 b . 
            . 5 5 b b b b b 5 5 b . 
            . . . 4 4 c 4 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . . b b a a a 5 5 b . . 
            . 5 5 b b b b 5 5 b . . 
            . 5 5 b b b b b b . . . 
            . . . 4 4 c 4 4 4 . . . 
            . . . e e . . e e . . . 
            . . . . . . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . . b b a a a a b b b . 
            . 5 5 b b b b b 5 5 b . 
            . 5 5 b b b b b 5 5 b . 
            . . . 4 4 c 4 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            5 5 b b a a a a b b b . 
            5 5 b b b b b b 5 5 b . 
            . . . b b b b b 5 5 b . 
            . . . 4 4 c 4 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . . . . . . 
            `],
        100,
        true
        )
    } else if (LeftLast == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b . . 
            . b 5 5 b b b b b 5 5 . 
            . b 5 5 b b b b b 5 5 . 
            . . . 4 4 4 c 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . . b 5 5 a a a b b . . 
            . . b 5 5 b b b b 5 5 . 
            . . . b b b b b b 5 5 . 
            . . . 4 4 4 c 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . . . . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b . . 
            . b 5 5 b b b b b 5 5 . 
            . b 5 5 b b b b b 5 5 . 
            . . . 4 4 4 c 4 4 . . . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `,img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            e . . b 5 f 5 f b . . . 
            . e e b 5 5 5 5 b . . . 
            . e c b 5 5 5 5 b . . . 
            . e c c b 5 5 b . . . . 
            . . b a a a a a a b . . 
            . b b b a a a a b b 5 5 
            . b 5 5 b b b b b b 5 5 
            . b 5 5 b b b b b . . . 
            . . . 4 4 4 c 4 4 . . . 
            . . . e e . . e e . . . 
            . . . . . . . e e . . . 
            `],
        100,
        true
        )
    } else {
    	
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    PlayerSpeedXY = 100
    if (LeftLast == 0) {
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 c 4 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    } else if (LeftLast == 1) {
        mySprite.setImage(img`
            . . . . . c c . . . . . 
            . . . . c c c c . . . . 
            . . . c c c c c c . . . 
            . . . c c c c c c . . . 
            . . . b b 5 5 b b . . . 
            . . . b f 5 f 5 b . . e 
            . . . b 5 5 5 5 b e e . 
            . . . b 5 5 5 5 b c e . 
            . . . . b 5 5 b c c e . 
            . . b a a a a a a b . . 
            . b b b a a a a b b b . 
            . b b b b b b b b b b . 
            . 5 5 b b b b b b 5 5 . 
            . 5 5 4 4 c 4 4 4 5 5 . 
            . . . e e . . e e . . . 
            . . . e e . . e e . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    myEnemy.destroy(effects.fire, 200)
    Enemy_in_map += -1
    music.smallCrash.playUntilDone()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`herot inside`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile28`)
    Hrothgar = sprites.create(img`
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . 5 5 2 5 5 . . . . . 
        . . . . . b b b b b . . . . . 
        . . . . . b 5 5 5 b . . . . . 
        . . . . . 5 f 5 f 5 . . . . . 
        . . . . . 5 b b b 5 . . . . . 
        . . . . . b b 5 b b . . . . . 
        . . . . 1 1 b b b 1 1 . . . . 
        . . . 1 a a b b b a a 1 . . . 
        . . 1 a a a b b a a a a 1 . . 
        . 1 a a a a a b a a a a a 1 . 
        . 1 a a a a a a a a a a a 1 . 
        . 1 5 5 a a a a a a a 5 5 1 . 
        . 1 5 5 4 4 4 4 4 4 4 5 5 1 . 
        . . d d e e c c c e e d d . . 
        . . . d e e c c c e e d . . . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(Hrothgar, assets.tile`myTile27`)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . e e e e . . . . 
        . . . e e e e e e . . . 
        . . . e 5 5 5 e e . . . 
        . . . 5 f 5 f 5 e . . . 
        . . . 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 . . . . 
        . . b 3 3 3 3 3 3 b . . 
        . b b b 3 3 3 3 b b b . 
        . b b b b b b b b b b . 
        . 5 5 b b b b b b 5 5 . 
        . 5 5 4 4 c 4 4 4 5 5 . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `, SpriteKind.NPCunimportant)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . e e e e . . . . 
        . . . e e e e e e . . . 
        . . . e 5 5 5 e e . . . 
        . . . 5 f 5 f 5 e . . . 
        . . . 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 . . . . 
        . . b 3 3 3 3 3 3 b . . 
        . b b b 3 3 3 3 b b b . 
        . b b b b b b b b b b . 
        . 5 5 b b b b b b 5 5 . 
        . 5 5 4 4 c 4 4 4 5 5 . 
        . . . e e . . e e . . . 
        . . . e e . . e e . . . 
        `, SpriteKind.NPCunimportant)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile18`)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile18`)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let Enemy_in_map = 0
let projectile: Sprite = null
let Hrothgar: Sprite = null
let Grendel: Sprite = null
let GrendelHealth = 0
let myEnemy: Sprite = null
let ColorOn = 0
let LeftLast = 0
let Plot_Conversation = 0
let PlayerSpeedXY = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . c c . . . . . 
    . . . . c c c c . . . . 
    . . . c c c c c c . . . 
    . . . c c c c c c . . . 
    . . . b b 5 5 b b . . . 
    . . . b f 5 f 5 b . . e 
    . . . b 5 5 5 5 b e e . 
    . . . b 5 5 5 5 b c e . 
    . . . . b 5 5 b c c e . 
    . . b a a a a a a b . . 
    . b b b a a a a b b b . 
    . b b b b b b b b b b . 
    . 5 5 b b b b b b 5 5 . 
    . 5 5 4 4 c 4 4 4 5 5 . 
    . . . e e . . e e . . . 
    . . . e e . . e e . . . 
    `, SpriteKind.Player)
PlayerSpeedXY = 100
controller.moveSprite(mySprite, PlayerSpeedXY, PlayerSpeedXY)
tiles.setCurrentTilemap(tilemap`arrival0`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
Plot_Conversation = 0
LeftLast = 0
ColorOn = 0
myEnemy = sprites.create(img`
    . . . 1 1 1 1 . . . . . 
    . . 1 1 1 1 1 1 . . . . 
    . . 1 1 f 1 f 1 . . . . 
    . . 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 . e . . 
    . c . 1 d . d . . d e . 
    c c . 1 1 1 1 . . d . e 
    b b e e e e e e . d . e 
    b b e e e e e e e d 1 e 
    b b e e e e e e e d 1 e 
    . b e e e e e e 1 d . e 
    . b e e e e e e . d . e 
    . . 1 1 1 1 1 1 . d e . 
    . . 1 1 . . 1 1 . e . . 
    . . 1 1 . . 1 1 . . . . 
    . . 1 1 . . 1 1 . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(myEnemy, assets.tile`Monster Grass`)
myEnemy.follow(mySprite, 10)
info.setLife(3)
for (let index = 0; index < 4; index++) {
    myEnemy.sayText("press z to attack", 5000, false)
    pause(500)
}
GrendelHealth = 3
