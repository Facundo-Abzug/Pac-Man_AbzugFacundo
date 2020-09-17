class Nivel_1 extends Phaser.Scene{
    constructor(){
        super("Nivel_1");
    }

    preload(){
        this.load.image("puntosGrandes", "./Assets/PuntosGrandes.png");
        this.load.image("puntosChicos", "./Assets/PuntosChicos.png");
        this.load.image("pared", "./Assets/Pared.png");
        this.load.image("fondo", "./Assets/Fondo.png");
        this.load.image("paredEnemigos", "./Assets/ParedEnemigos.png");
        this.load.image("derecha1", "./Assets/derecha1.png");
        this.load.image("Enemigo", "./Assets/Enemigo.png")

        this.load.tilemapTiledJSON("mapa1", "./Assets/Mapa1.json");
    }

    create(){
        var mapa = this.make.tilemap({key: "mapa1"});

        this.add.sprite(200, 200, "fondo").setScale(100);
        var TileParedes = mapa.addTilesetImage("Pared", "pared");
        var TileParedesEnemigos = mapa.addTilesetImage("ParedEnemigos", "paredEnemigos");
        var TilePuntosGrandes = mapa.addTilesetImage("PuntosGrandes", "puntosGrandes");
        var TilePuntosChicos = mapa.addTilesetImage("PuntosChicos", "puntosChicos");

        var Pared = mapa.createDynamicLayer("Pared", TileParedes, 0, 0);
        var ParedEnemigo = mapa.createDynamicLayer("ParedesEnemigos", TileParedesEnemigos, 0, 0);
        PuntosGrandes = mapa.createDynamicLayer("PuntosGrandes", TilePuntosGrandes, 0, 0);
        PuntosChicos = mapa.createDynamicLayer("PuntosChicos", TilePuntosChicos, 0, 0);
        
        Pared.setCollisionByExclusion(-1, true);
        ParedEnemigo.setCollisionByExclusion(-1, true);
        PuntosGrandes.setTileIndexCallback(4, this.hitPuntosGrandes, this);
        PuntosChicos.setTileIndexCallback(3, this.hitPuntosChicos, this);

        //PERSONAJE
        personaje = new Personaje({scene: this, x: 528, y: 400, sprite: "derecha1"});

        this.physics.add.collider(personaje, Pared);
        this.physics.add.collider(personaje, ParedEnemigo);
        this.physics.add.overlap(personaje, PuntosGrandes);
        this.physics.add.overlap(personaje, PuntosChicos);

        cursor = this.input.keyboard.createCursorKeys();

        TextoPuntaje = this.add.text(200, 520, 'Puntos: ' + Puntaje1, { fontSize: '32px', fill: '#000' });

        var NumeroNivel = this.add.text(25, 520, "Nivel 1", { fontSize: '32px', fill: '#000' });

        //Enemigo
        enemigo = new Enemigo({scene: this, x: 530, y: 48, sprite: "Enemigo"});
        this.physics.add.collider(enemigo, Pared);

        //BOTON SKIP LVL
        skiplvl = this.add.text(700, 520, 'Skip', { fontSize: '32px', fill: '#000' });
        skiplvl.setInteractive()
        skiplvl.on("pointerdown", () => this.scene.start("Nivel_2"));
    }

    update(){
        if(Puntaje1 == 1250){
            this.SiguienteLVL();
        }
    }

    hitPuntosGrandes(sprite, tile){
        Puntaje1 = Puntaje1 + 15;
        PuntosGrandes.removeTileAt(tile.x, tile.y);
        TextoPuntaje.setText('Puntos: ' + Puntaje1);
        return true;
    }
    hitPuntosChicos(sprite, tile){
        Puntaje1 = Puntaje1 + 5;
        PuntosChicos.removeTileAt(tile.x, tile.y);
        TextoPuntaje.setText('Puntos: ' + Puntaje1);
        return true;
    }

    SiguienteLVL(){
        this.scene.start("Pausa_Siguiente_Nivel1");
    }
}