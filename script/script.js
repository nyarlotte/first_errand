enchant();
//enchant.jsを使うためのコマンドこれを呼び出さないと動かない

 window.onload = function(){
  　//ゲーム画面の大きさ　
    var game = new Game(320, 320);
    //ゲームに使う画像や音声(※要検証)データなどを入れる　charcter1.png=主人公画像
    game.preload("img/character1.png");
    /*ゲームの処理スピードを入力
    アニメ8~24fps　映画24fps
    ３D映画48fps　ゲーム30~60fps100以上も*/
    game.fps=30;


    //ゲームに利用するデータを下に入れていく
     game.onload = function(){
      /*spriteオブジェクトの作成(,)にはキャラの大きさを入れる
      キャラクターの大きさは要検討char1=主人公*/
      var char1 = new Sprite(32,32);
      /*char1のイメージ画像を読み込む
      上のgame.preloadに入力していないと呼び出すことができない*/
      char1.image = game.assets["img/character1.png"];
      //char1の座標を入力
      char1.x = 100;
      char1.y = 100;
      //以上が主人公の基本的な設定

      //フレームが切り替わるときに発生するイベント
      //(イベントの種類,呼び出される処理(関数))
      //enchant.Event.ENTER_FRAME→
      char1.addEventListener(enchant.Event.ENTER_FRAME, function(){
        char1.moveBy(5,5);//右に5下に5移動
        if(char1.x>game.width){char1.x=-100;}
        if(char1.y>game.heigth){char1.y=-100;}
      });
      //背景データを下に記述
      /*enchant.jsではいくつかのシーンを用意し、切り替えて別のシーンに移すという
      方法らしいです。*/
      /*下は一番最初に表示される基本シーン
      ルートシーンの背景色はrgbで統一したいと考えています　
      画像を読み込めるかは現段階では分かりません*/
      game.rootScene.backgroundColor = "rgb(240, 217, 182)";
      //上で作った主人公のデータをrootsceneに乗せる?重ねるイメージです
      game.rootScene.addChild(char1);
    };

    game.start();
};
