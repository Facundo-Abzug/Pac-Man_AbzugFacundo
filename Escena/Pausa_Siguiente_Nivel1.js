class Pausa_Siguiente_Nivel1 extends Phaser.Scene{
    constructor(){
        super("Pausa_Siguiente_Nivel1");
    }

    preload(){
        
    }

    create(){
        var TextoSiguienteNivel = this.add.text(335, 245, 'Siguiente Nivel', { fontSize: '40px', fill: '#ffffff' });
        TextoSiguienteNivel.setInteractive()
        TextoSiguienteNivel.on("pointerdown", () => this.scene.start("Nivel_2"));

        var Siguiente = this.add.text(460, 300, "(Click)", { fontSize: '25px', fill: '#ffffff' });
        Siguiente.setInteractive()
        Siguiente.on("pointerdown", () => this.scene.start("Nivel_2"));
    }
}