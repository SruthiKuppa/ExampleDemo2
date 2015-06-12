
var stage: createjs.Stage;
var canvas = document.getElementById("canvas");


function init() {
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameloop);
    main();
}

function gameloop() {
    stage.update();
}
function main() {
    console.log("game is running");
    var helloText: createjs.Text = new createjs.Text("hello sruthi!", "50px consolas", "#FFFF00");
    helloText.x = 30;
    helloText.y = 200;
    stage.addChild(helloText);
}