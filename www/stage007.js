//Created by VIMRIO helper

//Please rename XXX.
//For example. If current final stage is 013, this function's name is "initStage014" and save "stage014.js".
function initStage007(stage){

var item;

// Percent of one unit.  if you want to change unit size, change this.
var u=10;

/////Animation Parameter/////
//
//dsp :display (true/false)  startIndex.... display or hide
//x : position x (percent)
//y : position y (percent)
//w : width (percent)
//h : height (percent)
//bgc : background-color
//bdc : border-color
//img : background-image (filename)
//opc : opacity (0.0....1.0) default=1.0
//z : z-index (default=2)
//wd : character of word

//Answer String
//helper original string=kkb"zz"b"xx word "jj
stage.setAnsStr("kkbbjj");
item=stage.createNewItem();

//class name
item.setName("vimrio");

//frame offset. default startindex=0
item.setFrameStartIndex(0);
stage.addItem(item);

//first frame
//1 start
item.addAnimation({"dsp":true,"x":9*u,"y":4*u,"w":u,"h":u,"bgc":"transparent","bdc":"blue","img":"vimrio01.png","z":5,"opc":1.0,"wd":""});
//following next frames

//2 k
item.addAnimation({"y":3*u});
//3 k
item.addAnimation({"y":2*u});
//4 b
item.addAnimation({"x":8*u});
//5 b
item.addAnimation({"x":3*u});
//6 j
item.addAnimation({"y":3*u});
//7 j
item.addAnimation({"y":4*u});

//1 goal
item=stage.createNewItem();
item.setName("goal");
item.addAnimation({"dsp":true,"x":3*u,"y":4*u,"w":u,"h":u,"img":"goal01.png","bgc":"yellow","bdc":"yellow"});
stage.addItem(item);

//word "zz" [z] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":2*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"z"});
stage.addItem(item);

//word "zz" [z] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":2*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"z"});
stage.addItem(item);

//word "xx word " [ ] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":2*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "xx word " [d] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":2*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"d"});
stage.addItem(item);

//word "xx word " [r] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":2*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"r"});
stage.addItem(item);

//word "xx word " [o] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":2*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "xx word " [w] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":2*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"w"});
stage.addItem(item);

//word "xx word " [ ] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":2*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "xx word " [x] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":1*u,"y":2*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"x"});
stage.addItem(item);

//word "xx word " [x] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":0*u,"y":2*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"x"});
stage.addItem(item);



//wall 1
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 2
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 3
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 4
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 5
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 6
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 7
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 8
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 9
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 10
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 11
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 12
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 13
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 14
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 15
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 16
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 17
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 18
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 19
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 20
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 21
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 22
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 23
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 24
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 25
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 26
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);


}
