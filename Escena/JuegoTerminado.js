class JuegoTerminado extends Phaser.Scene{
    constructor(){
        super("JuegoTerminado");
    }

    preload(){
        this.load.image("FondoVictoria", "./Assets/FondoVictoria.png");
    }

    create(){
        Puntaje = Puntaje1 + Puntaje2;
        this.add.sprite(512,280,"FondoVictoria");
        var JuegoTerminado = this.add.text(250, 200, '¡¡Ganaste!!', { fontSize: '80px', fill: '#ffffff' });

        this.add.text(300, 300, 'Puntaje Final: ' + Puntaje, { fontSize: '40px', fill: '#ffffff' });

        var Menu = this.add.text(440, 400, 'Volver', { fontSize: '40px', fill: '#ffffff' });
        Menu.setInteractive()
        Menu.on("pointerdown", () => this.scene.start("Menu"), Puntaje = 0, Puntaje1 = 0, Puntaje2 = 0);
    }
}