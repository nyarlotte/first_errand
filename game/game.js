enchant();
var char_arr = new Array(new Array(),new Array(),new Array());
var enemy_arr = new Array();

window.onload = function(){
    var game = new Game(1000, 700);
    game.preload("img/character1.png", "img/enemy.png");
    game.fps = 20;
    game.rootScene.backgroundColor = "#ffaaaa";

    game.onload = function(){

    // 敵キャラ
        for(var i = 0;i < 3;i++){
            var enemy = new Sprite(32, 32);
            //enemyの大きさ
            enemy.image = game.assets["img/enemy.png"];
            //enemyの画像
            enemy.x = game.width - 50;
            enemy.y = game.height - 50;
            //enemyはゲーム画面端上下50　左右50の中には入れない
            enemy.counter = Math.floor(Math.random() * 100) + 100;
            //counter=
            enemy.dx = Math.floor(Math.random() * 10);
            enemy.dy = Math.floor(Math.random() * 10);
            enemy.addEventListener(enchant.Event.ENTER_FRAME, function(){
                this.counter--;
                if (this.counter <= 0){
                    this.counter = Math.floor(Math.random() * 100) + 100;
                    //
                    this.dx = Math.floor(Math.random() * 10);
                    this.dy = Math.floor(Math.random() * 10);
                    //
                }
                this.x += this.dx;
                this.y += this.dy;
                //
                if (this.x < 0 || this.x > game.width - 50){
                    this.dx *= -1;
                    //enemyが領域外に置かれた場合
                }
                if (this.y < 0 || this.y > game.height - 50){
                    this.dy *= -1;
                }
            });
            game.rootScene.addChild(enemy);
            enemy_arr[i] = enemy;
        }

        //操作するキャラ
        for(var i = 0;i < 3;i++){
            for(var j = 0;j < 3;j++){
                var char1 = new Sprite(32, 32);
                char1.image = game.assets["img/character1.png"];
                char1.x = i * 100;
                char1.y = j * 100;
                char1.addEventListener(enchant.Event.ENTER_FRAME, function(){
                    this.frame = this.age % 2;
                    if (game.input.up){ this.moveBy(0, -5); }
                    if (game.input.down){ this.moveBy(0, 5); }
                    if (game.input.left){ this.moveBy(-5, 0); }
                    if (game.input.right){ this.moveBy(5, 0); }

                    for(var i = 0;i < 3;i++){//
                        if (this.within(enemy_arr[i],50)){
　　　　　　　　　　  //もし　within=ぶつかったら　enemy_arrと
                            var parent = this.parentNode;
                            parent.removeChild(this);
    //removechild=　sceneから除ける　(this)を
                            if (parent.childNodes.length == 3){
                                game.stop();
                                alert("GAME OVER");
  //もしゲーム画面に　parent=キャラクターがchilrnode上で3人になったらゲームストップ
  //ゲームオーバーというアラートが出る
                            }
                        }
                    }
                });
                game.rootScene.addChild(char1);
                char_arr[i][j] = char1;
            }
        }
    };

    game.start();
};
