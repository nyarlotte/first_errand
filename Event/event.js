enchant();

window.onload = function(){
    var game = new Game(400, 300);
    //ゲーム画面の大きさ
    game.preload("img/character1.png");
    //ゲームで使う画像のパスを入力する。カンマで区切って複数入れることができる
    game.fps = 20;
    //gameオブジェクトkeybind
    //第1因数にキーのASCLLコード　第2因数に割り当てるボタン
    //キーのASCLLコード
    /*
    A～Z   65～90
    0～9   48～57　または　96～105（テンキーの場合）
    tab    9
    enter  10
    del    11
    shift  16
    ctrl   17
    alt    18
    space    32*/
    game.keybind(16,"a");//ShiftキーがAボタン
    game.keybind(17,"b");//CtrlキーがBボタン
    game.onload = function(){
        var char1 = new Sprite(32, 32);
        //char1の　キャラクターの大きさ32*32
        char1.image = game.assets["img/character1.png"];
        //char1にcharacter1を読み込む
        char1.x = 0;
        char1.y = 0;
        char1.addEventListener(enchant.Event.ENTER_FRAME, function(){
            this.frame = this.age % 2;
            //input　入力に関する情報　
            //true=押されている状態　false=離されている状態
            //moveBy移動する座標　注意するべきは-Yは上方向
            if (game.input.up){ this.moveBy(0, -5); }
            if (game.input.down){ this.moveBy(0, 5); }
            if (game.input.left){ this.moveBy(-5, 0); }
            if (game.input.right){ this.moveBy(5, 0); }
            //A/Bボタンの処理
            if(game.input.a){
               game.rootScene.backgroundColor = "#000000";//Aボタンを押されたら
            }else if(game.input.b){
              game.rootScene.backgroundColor = "#FFFFFF";//Bボタンが押されたら
            }else{
              game.rootScene.backgroundColor = "#ffaaaa";//AもBも押されていなかったら
            }
        });
        game.rootScene.backgroundColor = "#ffaaaa";
        game.rootScene.addChild(char1);
    };
    game.start();
};
