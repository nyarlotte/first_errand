var game = null;
var char1 = null;
var map = null;
var here = {x:32, y:32};

enchant();

window.onload = function(){
    game = new Game(320, 320);
    game.fps = 10;
    game.preload("img/character1.png","img/map.png");
    game.onload = function(){

        map = new Map(32, 32);
        map.image = game.assets['img/map.png'];
        var data = [
           [19,19,19,19,19,19,19,19,8,9],//ここにマップデータを書いていく
           [19,19,19,19,19,19,19,19,24,25],
           [19,19,14,197,198,19,199,183,19,19],
           [19,19,30,19,19,19,19,177,19,19],
           [19,19,19,19,224,225,19,19,19,19],
           [19,19,19,19,240,241,19,19,19,19],
           [19,19,19,19,19,19,19,19,19,19],
           [19,19,19,19,19,19,19,19,19,19],
           [19,19,19,19,19,19,19,19,19,19],
           [19,19,19,19,19,19,19,19,19,19]
        ];
        var hit = [
            [1,1,1,1,1,1,1,1,1,1],//1通れない
            [1,0,0,0,0,0,0,0,1,1],//0通れる
            [1,0,1,1,1,0,1,1,0,1],
            [1,0,1,0,0,0,0,1,0,1],
            [1,0,0,0,1,1,0,1,0,1],
            [1,0,1,0,1,1,0,0,0,1],
            [1,0,1,0,0,0,0,1,0,1],
            [1,0,1,1,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1]
        ];
        map.loadData(data);
        map.collisionData = hit;
        game.rootScene.addChild(map);

        char1 = new Sprite(32, 32);
        char1.image = game.assets["img/character1.png"];
        char1.x = 50;
        char1.y = 50;
        char1.frame = 0;
        char1.addEventListener(enchant.Event.ENTER_FRAME, charMove);
        game.rootScene.addChild(char1);
    };

    game.start();
};

function charMove(){
    this.frame = this.age % 2;
    var nx = here.x;
    var ny = here.y;
    if (game.input.right) { nx += 32; }
    if (game.input.left) { nx -= 32; }
    if (game.input.up) { ny -= 32; }
    if (game.input.down) { ny += 32; }
    if (!map.hitTest(nx, ny)){
        here.x = nx;
        here.y = ny;
        char1.moveTo(here.x, here.y);
    }
}
