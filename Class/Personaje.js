class Personaje extends Phaser.GameObjects.Sprite{

    constructor(config){
        super(config.scene, config.x, config.y, config.sprite);
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this)
        this.scene.events.on('update', this.update , this);
    }

    update(){
        if(cursor.right.isDown){
            personaje.body.setVelocityX(200);
        }else if(cursor.left.isDown){
            personaje.body.setVelocityX(-200);
        }else if(cursor.up.isDown){
            personaje.body.setVelocityY(-200);
        }else if(cursor.down.isDown){
            personaje.body.setVelocityY(200);
        }
    }
};  