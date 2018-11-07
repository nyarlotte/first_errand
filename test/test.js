enchant();

window.onload = function(){
    var game = new Game(400, 300);
    game.preload("img/character1.png");
    game.fps = 30;

    game.onload = function(){
        var char1 = new Sprite(32, 32);
        /*キャラクターの大きさ*/
        char1.image = game.assets["img/character1.png"];
        char1.x = 0;
        char1.y = 0;
        char1.addEventListener(enchant.Event.ENTER_FRAME, function(){
            this.frame = this.age % 2;
            /*this=イベント発生したオブジェクトを代入する変数
            char1と入れると拡張が面倒になる(らしい)
            frame=spritに設定されたフレームを示す詳しくはパワポ資料にて
            this.age%2
            age=ゲームがスタートして何フレーム目かを示す
            2で割った余りをフレームに設定することでフレームが切り替わるごとにキャラクターが動く
            この場合　0,1,0,1,0,1,0とキャラクターが動く*/
            this.moveBy(5, 5);
            if (this.x > game.width){ this.x = -100; }
            if (this.y > game.height){ this.y = -100; }
        });
        game.rootScene.backgroundColor = "#ffaaaa";
        game.rootScene.addChild(char1);
    };

    game.start();
};
