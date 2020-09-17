var config = {
    type: Phaser.AUTO,
    width: 1025,
    height: 560,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: [Menu, Nivel_1, Nivel_2,Pausa_Siguiente_Nivel1, JuegoTerminado]
};

var game = new Phaser.Game(config);

var cursor;
var personaje;

var PuntosGrandes;
var PuntosChicos;

var Puntaje = 0;
var Puntaje1 = 0;
var Puntaje2 = 0;
var TextoPuntaje;
var TextoPuntaje2;

var enemigo;

var skiplvl;