controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . b c c c e e e . . . . . 
            . . . b b b b b e e e . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 0)
        projectile.x += -5
        projectile.scale += 1
        scene.cameraShake(1, 200)
        pause(200)
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
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . e e e c c c b . . . . 
            . . . . . e e e b b b b b . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 0)
        projectile.x += 5
        projectile.scale += 1
        scene.cameraShake(1, 200)
        pause(200)
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
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    myEnemy.destroy(effects.fire, 200)
})
let projectile: Sprite = null
let LeftLast = 0
let myEnemy: Sprite = null
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
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`arrival0`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
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
tiles.placeOnRandomTile(myEnemy, assets.tile`grass`)
LeftLast = 0
