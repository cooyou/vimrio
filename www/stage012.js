//Created by VIMRIO helper

//Please rename XXX.
//For example. If current final stage is 012, this function's name is "initStage013" and save "stage013.js".
function initStage012(stage){

var item;

// 1unit=10%  if you want to change unit size, change this.
var u=10;

/////Animation Parameter/////
//
//dsp :display (true/false)  startIndex....number of frames : (dsp) , other frame : (false)
//x : position x (percent)
//y : position y (percent)
//w : width (percent)
//h : height (percent)
//bgc : background-color
//bdc : border-color
//img : background-image (filename)
//opc : opacity (0.0....1.0) default=1.0
//z : z-index (default=2)
//wd: character of word

//Answer String
//helper original string=lGllggllGllggl
stage.setAnsStr("lGllggllGllggl");
item=stage.createNewItem();

//class name
item.setName("vimrio");

//frame offset. default startindex=0
item.setFrameStartIndex(0);
stage.addItem(item);

//first frame
//1 start
item.addAnimation({"dsp":true,"x":0*u,"y":2*u,"w":u,"h":u,"bgc":"transparent","bdc":"blue","img":"vimrio01.png","z":5,"opc":1.0,"wd":""});
//following next frames

//2 l
item.addAnimation({"x":1*u});
//3G
item.addAnimation({"y":9*u});
//3 l
item.addAnimation({"x":2*u});
//4 l
item.addAnimation({"x":3*u});
//5gg
item.addAnimation({"y":0});
//5 l
item.addAnimation({"x":4*u});
//6 l
item.addAnimation({"x":5*u});
//7G
item.addAnimation({"y":9*u});
//7 l
item.addAnimation({"x":6*u});
//8 l
item.addAnimation({"x":7*u});
//9gg
item.addAnimation({"y":0});
//9 l
item.addAnimation({"x":8*u});

//1 goal
item=stage.createNewItem();
item.setName("goal");
item.addAnimation({"dsp":true,"x":8*u,"y":0*u,"w":u,"h":u,"img":"goal01.png","bgc":"yellow","bdc":"yellow"});
stage.addItem(item);


//door 1
item=stage.createNewItem();
item.setName("door");
item.addAnimation({"dsp":true,"x":1*u,"y":2*u,"w":u,"h":u,"img":"door03.png","bgc":"transparent","bdc":"lightgray","z":"3"});
stage.addItem(item);

//door 2
item=stage.createNewItem();
item.setName("door");
item.addAnimation({"dsp":true,"x":1*u,"y":9*u,"w":u,"h":u,"img":"door01.png","bgc":"transparent","bdc":"lightgray","z":"3"});
stage.addItem(item);

//door 3
item=stage.createNewItem();
item.setName("door");
item.addAnimation({"dsp":true,"x":3*u,"y":9*u,"w":u,"h":u,"img":"door02.png","bgc":"transparent","bdc":"lightgray","z":"3"});
stage.addItem(item);

//door 4
item=stage.createNewItem();
item.setName("door");
item.addAnimation({"dsp":true,"x":3*u,"y":0*u,"w":u,"h":u,"img":"door01.png","bgc":"transparent","bdc":"lightgray","z":"3"});
stage.addItem(item);

//door 5
item=stage.createNewItem();
item.setName("door");
item.addAnimation({"dsp":true,"x":5*u,"y":0*u,"w":u,"h":u,"img":"door03.png","bgc":"transparent","bdc":"lightgray","z":"3"});
stage.addItem(item);

//door 6
item=stage.createNewItem();
item.setName("door");
item.addAnimation({"dsp":true,"x":5*u,"y":9*u,"w":u,"h":u,"img":"door01.png","bgc":"transparent","bdc":"lightgray","z":"3"});
stage.addItem(item);

//door 7
item=stage.createNewItem();
item.setName("door");
item.addAnimation({"dsp":true,"x":7*u,"y":9*u,"w":u,"h":u,"img":"door02.png","bgc":"transparent","bdc":"lightgray","z":"3"});
stage.addItem(item);

//door 8
item=stage.createNewItem();
item.setName("door");
item.addAnimation({"dsp":true,"x":7*u,"y":0*u,"w":u,"h":u,"img":"door01.png","bgc":"transparent","bdc":"lightgray","z":"3"});
stage.addItem(item);


//wall 1
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 2
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 3
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 4
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 5
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 6
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 7
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 8
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 9
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 10
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 11
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 12
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 13
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 14
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 15
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 16
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 17
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 18
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 19
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 20
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 21
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 22
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 23
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 24
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 25
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 26
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 27
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 28
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 29
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);


}
