let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: "0xffcc00",

    scene: {
        preload: loadAss,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function loadAss(){}
function create(){}
function update(){}