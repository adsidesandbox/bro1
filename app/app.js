window.addEventListener('DOMContentLoaded', function(){
const app = new PIXI.Application({ autoResize: true, resolution: 1, backgroundColor: 0xd1e4ef });

document.body.appendChild(app.view);





//var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight,{backgroundColor : 0x000000});

var gameBoxSize=(Math.min(window.innerWidth, window.innerHeight)*0.11);
if(window.innerHeight>window.innerWidth )gameBoxSize=(Math.min(window.innerWidth, window.innerHeight)*0.11);
var gameBoxSizeConst=(Math.min(window.innerWidth, window.innerHeight)*0.1);
console.log(gameBoxSize);

//var gameIntervalIconMultyplicator=0.7;


///
window.addEventListener('resize', resize);
function resize() {

	gameBoxSize=(Math.min(window.innerWidth, window.innerHeight)*0.11);
if(window.innerHeight>window.innerWidth )gameBoxSize=(Math.min(window.innerWidth, window.innerHeight)*0.11);
  gameBoxSizeConst=(Math.min(window.innerWidth, window.innerHeight)*0.1);

	app.renderer.resize(window.innerWidth, window.innerHeight);
	//app.renderer.resize(800, 600);


}


resize();



var gameInitialBalance=0;

var gameIconInBox=false;
var person1done=false;
var person2done=false;
var person3done=false;
var person4done=false;

var gameUIOpen=false;
var gameUIOpenFor=0;

function uiOpen()
{
	uiStars1.alpha=1;
	uiStars5.alpha=0;
	gameSoundStep.currentTime=0; gameSoundStep.play();
gameUIOpen=true;
uiBackgroundSprite.alpha=1;
uiIconBlank.alpha=1;
uiPanel.alpha=1;
uiIcon1Empty.alpha=1;
uiIcon2Empty.alpha=1;
uiIcon3Empty.alpha=1;
uiIcon4Empty.alpha=1;


if (person1done==true) uiIcon1.alpha=0; else uiIcon1.alpha=1;
if (person2done==true) uiIcon2.alpha=0; else uiIcon2.alpha=1;
if (person3done==true) uiIcon3.alpha=0; else uiIcon3.alpha=1;
if (person4done==true) uiIcon4.alpha=0; else uiIcon4.alpha=1;

if (person1done==true) uiIcon1.interactive=false; else uiIcon1.interactive=true;
if (person2done==true) uiIcon2.interactive=false; else uiIcon2.interactive=true;
if (person3done==true) uiIcon3.interactive=false; else uiIcon3.interactive=true;
if (person4done==true) uiIcon4.interactive=false; else uiIcon4.interactive=true;



playerFrontBlank.alpha=1;
player1Front.alpha=0;
player2Front.alpha=0;
player3Front.alpha=0;
player4Front.alpha=0;



player1IsoBlank.interactive=false;
player2IsoBlank.interactive=false;
player3IsoBlank.interactive=false;
player4IsoBlank.interactive=false;


}

function uiClose()
{

	gameSoundStep.currentTime=0; gameSoundStep.play();
uiStars1.alpha=0;
uiStars5.alpha=0;

gameUIOpen=false;
uiBackgroundSprite.alpha=0;
uiIconBlank.alpha=0;
uiPanel.alpha=0;
uiIcon1Empty.alpha=0;
uiIcon2Empty.alpha=0;
uiIcon3Empty.alpha=0;
uiIcon4Empty.alpha=0;
uiIcon1.alpha=0;
uiIcon2.alpha=0;
uiIcon3.alpha=0;
uiIcon4.alpha=0;

playerFrontBlank.alpha=0;
player1Front.alpha=0;
player2Front.alpha=0;
player3Front.alpha=0;
player4Front.alpha=0;

uiIcon1.interactive=false;
uiIcon2.interactive=false;
uiIcon3.interactive=false;
uiIcon4.interactive=false;

if (person1done==false) player1IsoBlank.interactive=true;
if (person2done==false) player2IsoBlank.interactive=true;
if (person3done==false) player3IsoBlank.interactive=true;
if (person4done==false) player4IsoBlank.interactive=true;


}






var stage = new PIXI.Container();
var animatedSprite=[];
var enemyUnits=[];









//BG
var backgroundSpriteTexture = new PIXI.Texture.from(backgroundSpriteTextureFile);
var backgroundSprite = new PIXI.Sprite(backgroundSpriteTexture);
backgroundSprite.anchor.set(0.5, 0.5);
backgroundSprite.x=(window.innerWidth/2);
backgroundSprite.y=(window.innerHeight/2);
app.stage.addChild(backgroundSprite);




//Characters ISO
{
var playerBlankIsoTexture=[];
for (let i=0; i < playerBlankIsoTextureFiles.length; i++)
{
     let texture = PIXI.Texture.from(playerBlankIsoTextureFiles[i]);
     playerBlankIsoTexture.push(texture);
}

var player1lankIsoTexture=[];
for (let i=0; i < player1IsoTextureFiles.length; i++)
{
     let texture = PIXI.Texture.from(player1IsoTextureFiles[i]);
     player1lankIsoTexture.push(texture);
}

var player2lankIsoTexture=[];
for (let i=0; i < player1IsoTextureFiles.length; i++)
{
     let texture = PIXI.Texture.from(player2IsoTextureFiles[i]);
     player2lankIsoTexture.push(texture);
}

var player3lankIsoTexture=[];
for (let i=0; i < player3IsoTextureFiles.length; i++)
{
     let texture = PIXI.Texture.from(player3IsoTextureFiles[i]);
     player3lankIsoTexture.push(texture);
}

var player4lankIsoTexture=[];
for (let i=0; i < player4IsoTextureFiles.length; i++)
{
     let texture = PIXI.Texture.from(player4IsoTextureFiles[i]);
     player4lankIsoTexture.push(texture);
}

///
var player1IsoBlank = new PIXI.AnimatedSprite(playerBlankIsoTexture);
player1IsoBlank.anchor.set(0.5, 0.5);
app.stage.addChild(player1IsoBlank);
console.log(player1IsoBlank.currentFrameCustom);
player1IsoBlank.durationMsFrame=47;

var player2IsoBlank = new PIXI.AnimatedSprite(playerBlankIsoTexture);
player2IsoBlank.anchor.set(0.5, 0.5);
app.stage.addChild(player2IsoBlank);
player2IsoBlank.durationMsFrame=66;

var player3IsoBlank = new PIXI.AnimatedSprite(playerBlankIsoTexture);
player3IsoBlank.anchor.set(0.5, 0.5);
app.stage.addChild(player3IsoBlank);
player3IsoBlank.durationMsFrame=59;

var player4IsoBlank = new PIXI.AnimatedSprite(playerBlankIsoTexture);
player4IsoBlank.anchor.set(0.5, 0.5);
app.stage.addChild(player4IsoBlank);
player4IsoBlank.durationMsFrame=52;
///

var player1Iso = new PIXI.AnimatedSprite(player1lankIsoTexture);
player1Iso.anchor.set(0.5, 0.5);
app.stage.addChild(player1Iso);
console.log(player1Iso.currentFrameCustom);

var player2Iso = new PIXI.AnimatedSprite(player2lankIsoTexture);
player2Iso.anchor.set(0.5, 0.5);
app.stage.addChild(player2Iso);

var player3Iso = new PIXI.AnimatedSprite(player3lankIsoTexture);
player3Iso.anchor.set(0.5, 0.5);
app.stage.addChild(player3Iso);

var player4Iso = new PIXI.AnimatedSprite(player4lankIsoTexture);
player4Iso.anchor.set(0.5, 0.5);
app.stage.addChild(player4Iso);


player1IsoBlank.interactive=true;
player1IsoBlank.on('mousedown',  function(){gameUIOpenFor=1; uiOpen(); });
player1IsoBlank.on('touchstart', function(){gameUIOpenFor=1; uiOpen(); });

player2IsoBlank.interactive=true;
player2IsoBlank.on('mousedown',  function(){gameUIOpenFor=2; uiOpen(); });
player2IsoBlank.on('touchstart', function(){gameUIOpenFor=2; uiOpen(); });

player3IsoBlank.interactive=true;
player3IsoBlank.on('mousedown',  function(){gameUIOpenFor=3; uiOpen(); });
player3IsoBlank.on('touchstart', function(){gameUIOpenFor=3; uiOpen(); });

player4IsoBlank.interactive=true;
player4IsoBlank.on('mousedown',  function(){gameUIOpenFor=4; uiOpen(); });
player4IsoBlank.on('touchstart', function(){gameUIOpenFor=4; uiOpen(); });




}




const basicTextStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: gameBoxSize*0.5,
    fontWeight: 'bold',
    fill: ['#ffffff'],
    stroke: '#000000',
    strokeThickness: 5,
    lineJoin: 'round',
});

var basicText = new PIXI.Text('PROGRESS: ' + gameInitialBalance + '%' , basicTextStyle);
basicText.x = window.innerWidth-gameBoxSizeConst*1.5;
basicText.y = gameBoxSizeConst;


app.stage.addChild(basicText);









// UI



var uiBackgroundSpriteTexture = new PIXI.Texture.from(uiBackgroundSpriteTextureFile);
var uiBackgroundSprite = new PIXI.Sprite(uiBackgroundSpriteTexture);
uiBackgroundSprite.anchor.set(0.5, 0.5);
uiBackgroundSprite.x=(window.innerWidth/2);
uiBackgroundSprite.y=(window.innerHeight/2);
uiBackgroundSprite.alpha=0;
app.stage.addChild(uiBackgroundSprite);


// FRONT SPRITES
{
	var playerBlankFrontTexture=[];
	for (let i=0; i < playerBlankFrontTextureFiles.length; i++)
	{
	     let texture = PIXI.Texture.from(playerBlankFrontTextureFiles[i]);
	     playerBlankFrontTexture.push(texture);
	}

	var player1FrontTexture=[];
	for (let i=0; i < player1FrontTextureFiles.length; i++)
	{
	     let texture = PIXI.Texture.from(player1FrontTextureFiles[i]);
	     player1FrontTexture.push(texture);
	}

	var player2FrontTexture=[];
	for (let i=0; i < player1FrontTextureFiles.length; i++)
	{
	     let texture = PIXI.Texture.from(player2FrontTextureFiles[i]);
	     player2FrontTexture.push(texture);
	}

	var player3FrontTexture=[];
	for (let i=0; i < player3FrontTextureFiles.length; i++)
	{
	     let texture = PIXI.Texture.from(player3FrontTextureFiles[i]);
	     player3FrontTexture.push(texture);
	}

	var player4FrontTexture=[];
	for (let i=0; i < player4FrontTextureFiles.length; i++)
	{
	     let texture = PIXI.Texture.from(player4FrontTextureFiles[i]);
	     player4FrontTexture.push(texture);
	}

	///
	var playerFrontBlank = new PIXI.AnimatedSprite(playerBlankFrontTexture);
	playerFrontBlank.anchor.set(0.5, 0.5);
	app.stage.addChild(playerFrontBlank);


	///

	var player1Front = new PIXI.AnimatedSprite(player1FrontTexture);
	player1Front.anchor.set(0.5, 0.5);
	app.stage.addChild(player1Front);

	var player2Front = new PIXI.AnimatedSprite(player2FrontTexture);
	player2Front.anchor.set(0.5, 0.5);
	app.stage.addChild(player2Front);

	var player3Front = new PIXI.AnimatedSprite(player3FrontTexture);
	player3Front.anchor.set(0.5, 0.5);
	app.stage.addChild(player3Front);

	var player4Front = new PIXI.AnimatedSprite(player4FrontTexture);
	player4Front.anchor.set(0.5, 0.5);
	app.stage.addChild(player4Front);

}




var uiIconBlankTexture = new PIXI.Texture.from(uiIconBlankTextureFile);
var uiIconBlank = new PIXI.Sprite(uiIconBlankTexture);
uiIconBlank.anchor.set(0.5, 0.5);
uiIconBlank.x=(window.innerWidth/2);
uiIconBlank.y=(window.innerHeight);
app.stage.addChild(uiIconBlank);





var uiPanelTexture = new PIXI.Texture.from(uiPanelTextureFile);
var uiPanel = new PIXI.Sprite(uiPanelTexture);
uiPanel.anchor.set(0.5, 0.5);
uiPanel.x=(window.innerWidth/2);
uiPanel.y=(window.innerHeight);
app.stage.addChild(uiPanel);


///

var uiIconEmptyTexture = new PIXI.Texture.from(uiIconEmptyTextureFile);


var uiIcon1Empty = new PIXI.Sprite(uiIconEmptyTexture);
uiIcon1Empty.anchor.set(0.5, 0.5);
uiIcon1Empty.x=(window.innerWidth/2);
uiIcon1Empty.y=(window.innerHeight);
app.stage.addChild(uiIcon1Empty);

var uiIcon2Empty = new PIXI.Sprite(uiIconEmptyTexture);
uiIcon2Empty.anchor.set(0.5, 0.5);
uiIcon2Empty.x=(window.innerWidth/2);
uiIcon2Empty.y=(window.innerHeight);
app.stage.addChild(uiIcon2Empty);

var uiIcon3Empty = new PIXI.Sprite(uiIconEmptyTexture);
uiIcon3Empty.anchor.set(0.5, 0.5);
uiIcon3Empty.x=(window.innerWidth/2);
uiIcon3Empty.y=(window.innerHeight);
app.stage.addChild(uiIcon3Empty);

var uiIcon4Empty = new PIXI.Sprite(uiIconEmptyTexture);
uiIcon4Empty.anchor.set(0.5, 0.5);
uiIcon4Empty.x=(window.innerWidth/2);
uiIcon4Empty.y=(window.innerHeight);
app.stage.addChild(uiIcon4Empty);

















///

var uiIcon1Texture = new PIXI.Texture.from(uiIcon1TextureFile);
var uiIcon1 = new PIXI.Sprite(uiIcon1Texture);
uiIcon1.anchor.set(0.5, 0.5);
uiIcon1.x=(window.innerWidth/2);
uiIcon1.y=(window.innerHeight);
app.stage.addChild(uiIcon1);

var uiIcon2Texture = new PIXI.Texture.from(uiIcon2TextureFile);
var uiIcon2 = new PIXI.Sprite(uiIcon2Texture);
uiIcon2.anchor.set(0.5, 0.5);
uiIcon2.x=(window.innerWidth/2);
uiIcon2.y=(window.innerHeight);
app.stage.addChild(uiIcon2);

var uiIcon3Texture = new PIXI.Texture.from(uiIcon3TextureFile);
var uiIcon3 = new PIXI.Sprite(uiIcon3Texture);
uiIcon3.anchor.set(0.5, 0.5);
uiIcon3.x=(window.innerWidth/2);
uiIcon3.y=(window.innerHeight);
app.stage.addChild(uiIcon3);

var uiIcon4Texture = new PIXI.Texture.from(uiIcon4TextureFile);
var uiIcon4 = new PIXI.Sprite(uiIcon4Texture);
uiIcon4.anchor.set(0.5, 0.5);
uiIcon4.x=(window.innerWidth/2);
uiIcon4.y=(window.innerHeight) ;
app.stage.addChild(uiIcon4);







////////dragging
{
uiIcon1.dragging=false;
uiIcon1.interactive = true;
uiIcon1
	 .on('mousedown', onDragStart1)
	 .on('touchstart', onDragStart1)
	 .on('mouseup', onDragEnd1)
	 .on('mouseupoutside', onDragEnd1)
	 .on('touchend', onDragEnd1)
	 .on('touchendoutside', onDragEnd1)
	 .on('mousemove', onDragMove1)
	 .on('touchmove', onDragMove1);

function onDragStart1(event)
{
	     // store a reference to the data
	     // the reason for this is because of multitouch
	     // we want to track the movement of this particular touch
	     this.data = event.data;
	     this.alpha = 0.7;
	     this.dragging = true;
}

function onDragEnd1()
{
	if (Math.abs(this.position.x-uiIconBlank.x)  < gameBoxSizeConst*0.75 && gameUIOpenFor==1)
 {
	 gameSoundStep.currentTime=0; gameSoundStep.play();
	 	 player1IsoBlank.interactive=false;
     uiIcon1.interactive=false;
		 person1done=true;
		 gameInitialBalance=gameInitialBalance+25;


		 setTimeout(()=>{playerFrontBlank.alpha=0; player1Front.alpha=1; gameSoundDone.play();},500);
		 setTimeout(()=>{uiStars5.alpha=1; gameSoundDone.currentTime=0; gameSoundDone.play(); },1000);
		 setTimeout(()=>{uiClose(); uiIcon1.alpha=0; uiIcon1.interactive=false; },2500);
 }
else {gameSoundStep.currentTime=0; gameSoundStep.play();}

	     this.dragging = false;
	     this.data = null;
			 this.alpha = 1;
}


function onDragMove1()
{
	     if (this.dragging)
	     {
	         var newPosition = this.data.getLocalPosition(this.parent);
	         this.position.x = newPosition.x;
	         this.position.y = newPosition.y;
	     }
}




uiIcon2.dragging=false;
uiIcon2.interactive = true;
uiIcon2
	 .on('mousedown', onDragStart2)
	 .on('touchstart', onDragStart2)
	 .on('mouseup', onDragEnd2)
	 .on('mouseupoutside', onDragEnd2)
	 .on('touchend', onDragEnd2)
	 .on('touchendoutside', onDragEnd2)
	 .on('mousemove', onDragMove2)
	 .on('touchmove', onDragMove2);

function onDragStart2(event)
{
	     // store a reference to the data
	     // the reason for this is because of multitouch
	     // we want to track the movement of this particular touch
	     this.data = event.data;
	     this.alpha = 0.7;
	     this.dragging = true;
}

function onDragEnd2()
{

	if (Math.abs(this.position.x-uiIconBlank.x)  < gameBoxSizeConst*0.75 && gameUIOpenFor==2)
 {
	 gameSoundStep.currentTime=0; gameSoundStep.play();

	 	 player2IsoBlank.interactive=false;
     uiIcon2.interactive=false;
		 person2done=true;
		 gameInitialBalance=gameInitialBalance+25;


		 setTimeout(()=>{playerFrontBlank.alpha=0; player2Front.alpha=1; gameSoundDone.play();},500);
		 setTimeout(()=>{uiStars5.alpha=1; gameSoundDone.currentTime=0; gameSoundDone.play(); },1000);
		 setTimeout(()=>{uiClose(); uiIcon2.alpha=0; uiIcon2.interactive=false; },2500);
 }
else {gameSoundStep.currentTime=0; gameSoundStep.play();}
	     this.dragging = false;
	     this.data = null;
			 this.alpha = 1;
}


function onDragMove2()
{
	     if (this.dragging)
	     {
	         var newPosition = this.data.getLocalPosition(this.parent);
	         this.position.x = newPosition.x;
	         this.position.y = newPosition.y;






	     }
}


uiIcon3.dragging=false;
uiIcon3.interactive = true;
uiIcon3
	 .on('mousedown', onDragStart3)
	 .on('touchstart', onDragStart3)
	 .on('mouseup', onDragEnd3)
	 .on('mouseupoutside', onDragEnd3)
	 .on('touchend', onDragEnd3)
	 .on('touchendoutside', onDragEnd3)
	 .on('mousemove', onDragMove3)
	 .on('touchmove', onDragMove3);

function onDragStart3(event)
{
	     // store a reference to the data
	     // the reason for this is because of multitouch
	     // we want to track the movement of this particular touch
	     this.data = event.data;
	     this.alpha = 0.7;
	     this.dragging = true;
}

function onDragEnd3()
{
	if (Math.abs(this.position.x-uiIconBlank.x)  < gameBoxSizeConst*0.75 && gameUIOpenFor==3)
 {
	 	 gameSoundStep.currentTime=0; gameSoundStep.play();
	   player3IsoBlank.interactive=false;
     uiIcon3.interactive=false;
		 person3done=true;
		 gameInitialBalance=gameInitialBalance+25;


		 setTimeout(()=>{playerFrontBlank.alpha=0; player3Front.alpha=1; gameSoundDone.play();},500);
		 setTimeout(()=>{uiStars5.alpha=1;gameSoundDone.currentTime=0; gameSoundDone.play(); },1000);
		 setTimeout(()=>{uiClose(); uiIcon3.alpha=0; uiIcon3.interactive=false; },2500);
 }
else {gameSoundStep.currentTime=0; gameSoundStep.play();}

	     this.dragging = false;
	     this.data = null;
			 this.alpha = 1;
}


function onDragMove3()
{
	     if (this.dragging)
	     {
	         var newPosition = this.data.getLocalPosition(this.parent);
	         this.position.x = newPosition.x;
	         this.position.y = newPosition.y;
	     }
}

uiIcon4.dragging=false;
uiIcon4.interactive = true;
uiIcon4
	 .on('mousedown', onDragStart4)
	 .on('touchstart', onDragStart4)
	 .on('mouseup', onDragEnd4)
	 .on('mouseupoutside', onDragEnd4)
	 .on('touchend', onDragEnd4)
	 .on('touchendoutside', onDragEnd4)
	 .on('mousemove', onDragMove4)
	 .on('touchmove', onDragMove4);

function onDragStart4(event)
{
	     // store a reference to the data
	     // the reason for this is because of multitouch
	     // we want to track the movement of this particular touch
	     this.data = event.data;
	     this.alpha = 0.7;
	     this.dragging = true;
}

function onDragEnd4()
{
	if (Math.abs(this.position.x-uiIconBlank.x)  < gameBoxSizeConst*0.75 && gameUIOpenFor==4)
 {
	 	 gameSoundStep.currentTime=0; gameSoundStep.play();
	   player4IsoBlank.interactive=false;
     uiIcon4.interactive=false;
		 person4done=true;
		 gameInitialBalance=gameInitialBalance+25;

		 setTimeout(()=>{playerFrontBlank.alpha=0; player4Front.alpha=1; gameSoundDone.play();},500);
		 setTimeout(()=>{uiStars5.alpha=1;gameSoundDone.currentTime=0; gameSoundDone.play(); },1000);
		 setTimeout(()=>{uiClose(); uiIcon4.alpha=0; uiIcon4.interactive=false; },2500);
 }
else {gameSoundStep.currentTime=0; gameSoundStep.play();}

	     this.dragging = false;
	     this.data = null;
			 this.alpha = 1;
}


function onDragMove4()
{
	     if (this.dragging)
	     {
	         var newPosition = this.data.getLocalPosition(this.parent);
	         this.position.x = newPosition.x;
	         this.position.y = newPosition.y;
	     }
}

///
}








var uiStars1Texture= new PIXI.Texture.from(uiStars1TextureFile);
var uiStars1 = new PIXI.Sprite(uiStars1Texture);
uiStars1.anchor.set(0.5, 0.5);
uiStars1.x=(window.innerWidth/2);
uiStars1.y=0+gameBoxSizeConst;
uiStars1.width  = gameBoxSizeConst * 4;
uiStars1.height = gameBoxSizeConst * 1;
app.stage.addChild(uiStars1);
uiStars1.alpha=0;


var uiStars5Texture= new PIXI.Texture.from(uiStars5TextureFile);
var uiStars5 = new PIXI.Sprite(uiStars5Texture);
uiStars5.anchor.set(0.5, 0.5);
uiStars5.x=(window.innerWidth/2);
uiStars5.y=0+gameBoxSizeConst;
uiStars5.width  = gameBoxSizeConst * 4;
uiStars5.height = gameBoxSizeConst * 1;
app.stage.addChild(uiStars5);
uiStars5.alpha=0;



//fade _box
var fadeLayer = PIXI.Sprite.from(PIXI.Texture.WHITE);
fadeLayer.width  = 200;
fadeLayer.height = 200;
fadeLayer.tint = 0x000000;
fadeLayer.anchor.set(0.5);
fadeLayer.alpha=0;
app.stage.addChild(fadeLayer);

//uiHandSpriteTextureFile
var uiHandSpriteTexture = new PIXI.Texture.from(uiHandSpriteTextureFile);
var uiHandSprite = new PIXI.Sprite(uiHandSpriteTexture);
uiHandSprite.anchor.set(0, 1);
uiHandSprite.x=(window.innerWidth/2);
uiHandSprite.y=(window.innerHeight/2);
uiHandSprite.width  = gameBoxSize * 0.2;
uiHandSprite.height = gameBoxSize * 0.2;
app.stage.addChild(uiHandSprite);




uiBackgroundSprite.alpha=0;
uiIconBlank.alpha=0;
uiPanel.alpha=0;

uiIcon1Empty.alpha=0;
uiIcon2Empty.alpha=0;
uiIcon3Empty.alpha=0;
uiIcon4Empty.alpha=0;

uiIcon1.alpha=0;
uiIcon2.alpha=0;
uiIcon3.alpha=0;
uiIcon4.alpha=0;

playerFrontBlank.alpha=0;
player1Front.alpha=0;
player2Front.alpha=0;
player3Front.alpha=0;
player4Front.alpha=0;




var gamePhase=1;

//setTimeout(function(){gamePhase=5},3000)
var gameDelta=0;
var gameLastTimeForDelta=Date.now();

uiIcon1.interactive=false;
uiIcon2.interactive=false;
uiIcon3.interactive=false;
uiIcon4.interactive=false;

// start animating
animate();
function animate()
{
	gameSoundLoop.play();
requestAnimationFrame(animate);


gameDelta=Date.now()-gameLastTimeForDelta;
gameLastTimeForDelta=Date.now();


backgroundSprite.x=(window.innerWidth/2);
backgroundSprite.y=(window.innerHeight/2);
backgroundSprite.height = gameBoxSize * 18;
backgroundSprite.width  = gameBoxSize * 18;

uiBackgroundSprite.x=(window.innerWidth/2);
uiBackgroundSprite.y=(window.innerHeight/2);
uiBackgroundSprite.height = window.innerHeight;
uiBackgroundSprite.width  = window.innerWidth;


//backgroundSprite.alpha=0.1;


if(person1done==false) player1IsoBlank.alpha=1;
if(person1done==true) player1IsoBlank.alpha=0;
if(person1done==false) player1Iso.alpha=0;
if(person1done==true) player1Iso.alpha=1;

if(person2done==false) player2IsoBlank.alpha=1;
if(person2done==true) player2IsoBlank.alpha=0;
if(person2done==false) player2Iso.alpha=0;
if(person2done==true) player2Iso.alpha=1;

if(person3done==false) player3IsoBlank.alpha=1;
if(person3done==true) player3IsoBlank.alpha=0;
if(person3done==false) player3Iso.alpha=0;
if(person3done==true) player3Iso.alpha=1;

if(person4done==false) player4IsoBlank.alpha=1;
if(person4done==true) player4IsoBlank.alpha=0;
if(person4done==false) player4Iso.alpha=0;
if(person4done==true) player4Iso.alpha=1;





player1IsoBlank.nextFrameInLoop(0,11);
player2IsoBlank.nextFrameInLoop(0,11);
player3IsoBlank.nextFrameInLoop(0,11);
player4IsoBlank.nextFrameInLoop(0,11);

player1Iso.nextFrameInLoop(0,11);
player2Iso.nextFrameInLoop(0,11);
player3Iso.nextFrameInLoop(0,11);
player4Iso.nextFrameInLoop(0,11);

playerFrontBlank.nextFrameInLoop(0,11);


player1Front.nextFrameInLoop(0,11);
player2Front.nextFrameInLoop(0,11);
player3Front.nextFrameInLoop(0,11);
player4Front.nextFrameInLoop(0,11);



///ISO
{
player1IsoBlank.x=(window.innerWidth/2) - gameBoxSize * 0.90;
player1IsoBlank.y=(window.innerHeight/2)- gameBoxSize * 2.7;
player1IsoBlank.height = gameBoxSize * 2;
player1IsoBlank.width  = gameBoxSize * 2;

player2IsoBlank.x=(window.innerWidth/2) - gameBoxSize * 1.0;
player2IsoBlank.y=(window.innerHeight/2)- gameBoxSize * -2.7;
player2IsoBlank.height = gameBoxSize * 2;
player2IsoBlank.width  = gameBoxSize * 2;

player3IsoBlank.x=(window.innerWidth/2) - gameBoxSize * 4.0;
player3IsoBlank.y=(window.innerHeight/2)- gameBoxSize * 0.4;
player3IsoBlank.height = gameBoxSize * 2;
player3IsoBlank.width  = gameBoxSize * 2;

player4IsoBlank.x=(window.innerWidth/2) + gameBoxSize * 2.2;
player4IsoBlank.y=(window.innerHeight/2)- gameBoxSize * 0.3;
player4IsoBlank.height = gameBoxSize * 2;
player4IsoBlank.width  = gameBoxSize * 2;

///
player1Iso.x=(window.innerWidth/2) - gameBoxSize * 0.90;
player1Iso.y=(window.innerHeight/2)- gameBoxSize * 2.7;
player1Iso.height = gameBoxSize * 2;
player1Iso.width  = gameBoxSize * 2;

player2Iso.x=(window.innerWidth/2) - gameBoxSize * 1.0;
player2Iso.y=(window.innerHeight/2)- gameBoxSize * -2.7;
player2Iso.height = gameBoxSize * 2;
player2Iso.width  = gameBoxSize * 2;

player3Iso.x=(window.innerWidth/2) - gameBoxSize * 4.0;
player3Iso.y=(window.innerHeight/2)- gameBoxSize * 0.4;
player3Iso.height = gameBoxSize * 2;
player3Iso.width  = gameBoxSize * 2;

player4Iso.x=(window.innerWidth/2) + gameBoxSize * 2.2;
player4Iso.y=(window.innerHeight/2)- gameBoxSize * 0.3;
player4Iso.height = gameBoxSize * 2;
player4Iso.width  = gameBoxSize * 2;
}

///front
{
	playerFrontBlank.x=(window.innerWidth/2) ;
	playerFrontBlank.y=(window.innerHeight/2) - gameBoxSize * 1.2;

	///
	player1Front.x=(window.innerWidth/2)  ;
	player1Front.y=(window.innerHeight/2) - gameBoxSize * 1.2;

	player2Front.x=(window.innerWidth/2) ;
	player2Front.y=(window.innerHeight/2) - gameBoxSize * 1.2;

	player3Front.x=(window.innerWidth/2) ;
	player3Front.y=(window.innerHeight/2) - gameBoxSize * 1.2;

	player4Front.x=(window.innerWidth/2) ;
	player4Front.y=(window.innerHeight/2) - gameBoxSize * 1.2;




	playerFrontBlank.width  =				playerFrontBlank.height  =		player1Front.width  =		player1Front.height  =		player2Front.width  =			player2Front.height  =			player3Front.width  =			player3Front.height  =			player4Front.width  =				player4Front.height
	 =  gameBoxSize *5;

	if(window.innerHeight > window.innerWidth){

		playerFrontBlank.width  =				playerFrontBlank.height  =		player1Front.width  =		player1Front.height  =		player2Front.width  =			player2Front.height  =			player3Front.width  =			player3Front.height  =			player4Front.width  =				player4Front.height
		 =  gameBoxSize *9;

			}

}


//uiIconBlank
let iconSize=2;
let gameIntervalIconMultyplicator=0.9;
let bottomShift=gameBoxSizeConst*0.2;

if(window.innerHeight>window.innerWidth)
{
	 iconSize=2.5;
	 gameIntervalIconMultyplicator=1.2;
	 bottomShift=gameBoxSizeConst*0.4;

}


uiPanel.x=(window.innerWidth/2);
uiPanel.y=(window.innerHeight) - gameBoxSizeConst*1.0 - bottomShift;
uiPanel.width=gameBoxSizeConst  * 7    + gameIntervalIconMultyplicator * gameBoxSizeConst *0.5 ;
if(window.innerHeight>window.innerWidth) uiPanel.width=gameBoxSizeConst  * 7    +  gameBoxSizeConst *2.6;
uiPanel.height=gameBoxSizeConst * iconSize;

uiIconBlank.x=(window.innerWidth/2);
uiIconBlank.y=(window.innerHeight) - gameBoxSizeConst*3.3;
if(window.innerHeight>window.innerWidth)uiIconBlank.y=(window.innerHeight) - gameBoxSizeConst*4;
uiIconBlank.width  = gameBoxSizeConst * iconSize;
uiIconBlank.height = gameBoxSizeConst * iconSize;







if (uiIcon1.dragging==false) uiIcon1.x=(window.innerWidth/2) - gameBoxSizeConst*3 * gameIntervalIconMultyplicator ;
if (uiIcon1.dragging==false) uiIcon1.y=(window.innerHeight) - gameBoxSizeConst*1.0 - bottomShift;

if (person1done==true) uiIcon1.x=uiIconBlank.x;
if (person1done==true) uiIcon1.y=uiIconBlank.y;

uiIcon1.width=gameBoxSizeConst * iconSize;
uiIcon1.height=gameBoxSizeConst *iconSize;

if (uiIcon2.dragging==false) uiIcon2.x=(window.innerWidth/2) - gameBoxSizeConst*1 * gameIntervalIconMultyplicator ;
if (uiIcon2.dragging==false) uiIcon2.y=(window.innerHeight) - gameBoxSizeConst*1.0  - bottomShift;

if (person2done==true) uiIcon2.x=uiIconBlank.x;
if (person2done==true) uiIcon2.y=uiIconBlank.y;

uiIcon2.width=gameBoxSizeConst* iconSize;
uiIcon2.height=gameBoxSizeConst*iconSize;

if (uiIcon3.dragging==false) uiIcon3.x=(window.innerWidth/2) + gameBoxSizeConst*1 * gameIntervalIconMultyplicator ;
if (uiIcon3.dragging==false) uiIcon3.y=(window.innerHeight) - gameBoxSizeConst*1.0  - bottomShift;

if (person3done==true) uiIcon3.x=uiIconBlank.x;
if (person3done==true) uiIcon3.y=uiIconBlank.y;

uiIcon3.width=gameBoxSizeConst*  iconSize;
uiIcon3.height=gameBoxSizeConst* iconSize;

if (uiIcon4.dragging==false) uiIcon4.x=(window.innerWidth/2) + gameBoxSizeConst*3 * gameIntervalIconMultyplicator ;
if (uiIcon4.dragging==false) uiIcon4.y=(window.innerHeight) - gameBoxSizeConst*1.0  - bottomShift;

if (person4done==true) uiIcon4.x=uiIconBlank.x;
if (person4done==true) uiIcon4.y=uiIconBlank.y;

uiIcon4.width=gameBoxSizeConst* iconSize;
uiIcon4.height=gameBoxSizeConst*iconSize;


///
uiIcon1Empty.x=(window.innerWidth/2) - gameBoxSizeConst*3 * gameIntervalIconMultyplicator ;
uiIcon1Empty.y=(window.innerHeight) - gameBoxSizeConst*1.0 - bottomShift;
uiIcon1Empty.width=gameBoxSizeConst * iconSize;
uiIcon1Empty.height=gameBoxSizeConst *iconSize;

uiIcon2Empty.x=(window.innerWidth/2) - gameBoxSizeConst*1 * gameIntervalIconMultyplicator ;
uiIcon2Empty.y=(window.innerHeight) - gameBoxSizeConst*1.0  - bottomShift;
uiIcon2Empty.width=gameBoxSizeConst* iconSize;
uiIcon2Empty.height=gameBoxSizeConst*iconSize;

uiIcon3Empty.x=(window.innerWidth/2) + gameBoxSizeConst*1 * gameIntervalIconMultyplicator ;
uiIcon3Empty.y=(window.innerHeight) - gameBoxSizeConst*1.0  - bottomShift;
uiIcon3Empty.width=gameBoxSizeConst*  iconSize;
uiIcon3Empty.height=gameBoxSizeConst* iconSize;

uiIcon4Empty.x=(window.innerWidth/2) + gameBoxSizeConst*3 * gameIntervalIconMultyplicator ;
uiIcon4Empty.y=(window.innerHeight) - gameBoxSizeConst*1.0  - bottomShift;
uiIcon4Empty.width=gameBoxSizeConst* iconSize;
uiIcon4Empty.height=gameBoxSizeConst*iconSize;


uiStars1.x=uiStars5.x=(window.innerWidth/2);
uiStars1.y=uiStars5.y=0+gameBoxSizeConst;
uiStars1.width  = uiStars5.width  = gameBoxSizeConst * 4;
uiStars1.height = uiStars5.height = gameBoxSizeConst * 1;



if (gameUIOpen==false){
	let multipicatorForHand=(Math.sin(Date.now()/150)+1)/2;
	//let multipicatorForHand=(Math.sin(Date.now()/200)+1)/2;
	//if (Math.cos(Date.now()/200) < 0) uiHandSprite.alpha=0; else uiHandSprite.alpha=1;
	let deltaDistanceForX= 0;
	let deltaDistanceForY= 0;


	if (person4done==false) deltaDistanceForX = gameBoxSizeConst;
	if (person4done==false) deltaDistanceForY = player4Iso.y;
	if (person3done==false) deltaDistanceForX = gameBoxSizeConst;
	if (person3done==false) deltaDistanceForY = player3Iso.y;
	if (person2done==false) deltaDistanceForX = gameBoxSizeConst;
	if (person2done==false) deltaDistanceForY = player2Iso.y;
	if (person1done==false) deltaDistanceForX = gameBoxSizeConst;
	if (person1done==false) deltaDistanceForY = player1Iso.y;

	if (person4done==false) uiHandSprite.x  = player4Iso.x + multipicatorForHand * gameBoxSizeConst*0.5+ gameBoxSizeConst*0.2 ;
	if (person4done==false) uiHandSprite.y  = player4Iso.y - multipicatorForHand * gameBoxSizeConst*0.5- gameBoxSizeConst*0.2 ;
	if (person3done==false) uiHandSprite.x  = player3Iso.x + multipicatorForHand * gameBoxSizeConst*0.5+ gameBoxSizeConst*0.2 ;
	if (person3done==false) uiHandSprite.y  = player3Iso.y - multipicatorForHand * gameBoxSizeConst*0.5- gameBoxSizeConst*0.2 ;
	if (person2done==false) uiHandSprite.x  = player2Iso.x + multipicatorForHand * gameBoxSizeConst*0.5+ gameBoxSizeConst*0.2 ;
	if (person2done==false) uiHandSprite.y  = player2Iso.y - multipicatorForHand * gameBoxSizeConst*0.5- gameBoxSizeConst*0.2 ;
	if (person1done==false) uiHandSprite.x  = player1Iso.x + multipicatorForHand * gameBoxSizeConst*0.5+ gameBoxSizeConst*0.2 ;
	if (person1done==false) uiHandSprite.y  = player1Iso.y - multipicatorForHand * gameBoxSizeConst*0.5 - gameBoxSizeConst*0.2 ;


	uiHandSprite.width  = gameBoxSizeConst * 1;
	uiHandSprite.height = gameBoxSizeConst * 1;

}

if (gameUIOpen==true){

	let multipicatorForHand=(Math.sin(Date.now()/200)+1)/2;
	//let multipicatorForHand=(Math.sin(Date.now()/200)+1)/2;
	//if (Math.cos(Date.now()/400) < 0.3) uiHandSprite.alpha=1; else uiHandSprite.alpha=0;
	let deltaDistanceForX= 0;
	let deltaDistanceForY= 0;


	if (gameUIOpenFor==4) deltaDistanceForX = uiIconBlank.x - uiIcon4.x;
	if (gameUIOpenFor==4) deltaDistanceForY = uiIconBlank.y - uiIcon4.y;
	if (gameUIOpenFor==3) deltaDistanceForX = uiIconBlank.x - uiIcon3.x;
	if (gameUIOpenFor==3) deltaDistanceForY = uiIconBlank.y - uiIcon3.y;
	if (gameUIOpenFor==2) deltaDistanceForX = uiIconBlank.x - uiIcon2.x;
	if (gameUIOpenFor==2) deltaDistanceForY = uiIconBlank.y - uiIcon2.y;
	if (gameUIOpenFor==1) deltaDistanceForX = uiIconBlank.x - uiIcon1.x;
	if (gameUIOpenFor==1) deltaDistanceForY = uiIconBlank.y - uiIcon1.y;




 uiHandSprite.x  = uiIconBlank.x - multipicatorForHand * deltaDistanceForX;
 uiHandSprite.y  = uiIconBlank.y - multipicatorForHand * deltaDistanceForY;


	uiHandSprite.width  = gameBoxSizeConst * 1;
	uiHandSprite.height = gameBoxSizeConst * 1;


	if (Math.cos(Date.now()/200) > 0) uiHandSprite.x  = uiIconBlank.x;
	if (Math.cos(Date.now()/200) > 0) uiHandSprite.y  = uiIconBlank.y;
	//if (Math.cos(Date.now()/400) < 0.3) uiHandSprite.alpha=1; else uiHandSprite.alpha=0;

}
if(person1done==true && person2done==true && person3done==true && person4done==true )uiHandSprite.alpha=0;



basicText.x = window.innerWidth-gameBoxSizeConst*4.0;
basicText.y = gameBoxSizeConst*0.3;
basicText.text='PROGRESS: ' + gameInitialBalance + '%' ;
basicText.style.fontSize = gameBoxSizeConst*0.4;


    // render the container
  renderer.render(stage);

}







});
