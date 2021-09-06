let prizeConfig = {
    count: 12,
    prizeList: [ 
        "3000 Credits",
        "35% Off",
        "Hard Luck",
        "70% OFF",
        "Swagpack",
        "100% OFF",
        "Netflix",
        "50% Off",
        "Amazon Voucher",
        "2 Extra Spin", 
        "CB Tshirt",
        "CB Book"
    ]
};

let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: "0xffcc00",

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload(){
    this.load.image('background', './assets/back.jpg');
    this.load.image('wheel', './assets/wheel.png');
    this.load.image('pin', './assets/pin.png');
    this.load.image('stand', './assets/stand.png')
}

function create(){
    let W = game.config.width;
    let H = game.config.height;

    let background = this.add.sprite(0, 0, 'background');
    background.setPosition(W/2, H/2);
    background.setScale(0.20);
    
    let stand = this.add.sprite(W/2, H/2+250, 'stand');
    stand.setScale(0.25);    
    
    let pin = this.add.sprite(W/2, H/2-250, 'pin');
    pin.setScale(0.25);
    pin.depth = 1;
    
    this.wheel = this.add.sprite(W/2, H/2, 'wheel');
    this.wheel.setScale(0.25);

    this.input.on("pointerdown", spinWheel, this);

    fontStyle = {
        font: "bold 20px Arial",
        color: "white"
    }
    this.game_text = this.add.text(10, 10, "Welcome to Spin and Win", fontStyle);
}

function update(){}

function spinWheel(){
    this.game_text.setText("Hold up, Spinnin'");

    let rounds = Phaser.Math.Between(2, 4);
    let degrees = Phaser.Math.Between(0, 11)*30;

    let totalAngle = rounds*360 + degrees;

    let idx = prizeConfig.count - 1 - Math.floor(degrees/(360/prizeConfig.count));

    tween = this.tweens.add({
        targets: this.wheel,
        ease: "Cubic.easeOut",
        angle: totalAngle,
        duration: 3000,
        onComplete: () => {
            this.game_text.setText("You Won " + prizeConfig.prizeList[idx]);
        }
    })
}