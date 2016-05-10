//Created by VIMRIO helper

//Please rename XXX.
//For example. If current final stage is 012, this function's name is "initStage013" and save "stage013.js".
function initStage003(stage){

var item;
var u=10;
stage.setAnsStr("jlllllkkkhhjhhkkkkllllljjl");
item=stage.createNewItem();
item.setName("vimrio");
item.setFrameStartIndex(0);
stage.addItem(item);
//1 start
item.addAnimation({"dsp":true,"x":2*u,"y":7*u,"w":u,"h":u,"bgc":"transparent","bdc":"blue","img":"vimrio01.png","z":5,"opc":1.0});
//2 j
item.addAnimation({"y":8*u});
//3 l
item.addAnimation({"x":3*u});
//4 l
item.addAnimation({"x":4*u});
//5 l
item.addAnimation({"x":5*u});
//6 l
item.addAnimation({"x":6*u});
//7 l
item.addAnimation({"x":7*u});
//8 k
item.addAnimation({"y":7*u});
//9 k
item.addAnimation({"y":6*u});
//10 k
item.addAnimation({"y":5*u});
//11 h
item.addAnimation({"x":6*u});
//12 h
item.addAnimation({"x":5*u});
//13 j
item.addAnimation({"y":6*u});
//14 h
item.addAnimation({"x":4*u});
//15 h
item.addAnimation({"x":3*u});
//16 k
item.addAnimation({"y":5*u});
//17 k
item.addAnimation({"y":4*u});
//18 k
item.addAnimation({"y":3*u});
//19 k
item.addAnimation({"y":2*u});
//20 l
item.addAnimation({"x":4*u});
//21 l
item.addAnimation({"x":5*u});
//22 l
item.addAnimation({"x":6*u});
//23 l
item.addAnimation({"x":7*u});
//24 l
item.addAnimation({"x":8*u});
//25 j
item.addAnimation({"y":3*u});
//26 j
item.addAnimation({"y":4*u});
//27 l
item.addAnimation({"x":9*u});

//1 goal
item=stage.createNewItem();
item.setName("goal");
item.addAnimation({"dsp":true,"x":9*u,"y":4*u,"w":u,"h":u,"img":"goal01.png","bgc":"yellow","bdc":"yellow"});
stage.addItem(item);

//1
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//2
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//3
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//4
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//5
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//6
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//7
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//8
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//9
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//10
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//11
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//12
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//13
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//14
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//15
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//16
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//17
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//18
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//19
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//20
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//21
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//22
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//23
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//24
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//25
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//26
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//27
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//28
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//29
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//30
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//31
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//32
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//33
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//34
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//35
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//36
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//37
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//38
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//39
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//40
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//41
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//42
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//43
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//44
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//45
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);


}
