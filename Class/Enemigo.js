class Enemigo extends Phaser.GameObjects.Sprite{

    constructor(config){
        super(config.scene, config.x, config.y, config.sprite);
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this)
        this.scene.events.on('update', this.update , this);
    }

    update(){
        enemigo.body.setVelocityX(200);
    }
};  