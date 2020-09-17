class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    preload(){
        this.load.image("Fondo", "./Assets/FondoMenu.png");
        this.load.image("Controles", "./Assets/Controles.png");
    }

    create(){
        this.add.sprite(512,280,"Fondo");
        this.add.text(25, 200, 'Pac-Man', { fontSize: '80px', fill: '#ffffff' });

        var Nivel1 = this.add.text(25, 300, 'Nivel 1', { fontSize: '35px', fill: '#ffffff' });
        Nivel1.setInteractive()
        Nivel1.on("pointerdown", () => this.scene.start("Nivel_1"));

        var Nivel2 = this.add.text(215, 300, 'Nivel 2', { fontSize: '35px', fill: '#ffffff' });
        Nivel2.setInteractive()
        Nivel2.on("pointerdown", () => this.scene.start("Nivel_2"));

        this.add.text(90, 375, "Controles", { fontSize: '40px', fill: '#ffffff' });
        this.add.sprite(200,480,"Controles").setScale(0.7);
    }
}