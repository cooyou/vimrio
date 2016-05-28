//Created by VIMRIO helper

//Please rename XXX.
//For example. If current final stage is 013, this function's name is "initStage014" and save "stage014.js".
function initStage016(stage){

var item;

// Percent of one unit.  if you want to change unit size, change this.
var u=8;

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
//helper original string=kkFb"abcdef ghij"kkhkk$"abcdef ghij"kkFd"abcdef ghij"kk
stage.setAnsStr("kkFbkkhkk$kkFdkk");
item=stage.createNewItem();

//class name
item.setName("vimrio");

//frame offset. default startindex=0
item.setFrameStartIndex(0);
stage.addItem(item);

//first frame
//1 start
item.addAnimation({"dsp":true,"x":11*u,"y":11*u,"w":u,"h":u,"bgc":"transparent","bdc":"blue","img":"vimrio01.png","z":5,"opc":1.0,"wd":""});
//following next frames

//2 k
item.addAnimation({"y":10*u});
//3 k
item.addAnimation({"y":9*u});
//4 Fb
item.addAnimation({"x":2*u});
//5 k
item.addAnimation({"y":8*u});
//6 k
item.addAnimation({"y":7*u});
//7 h
item.addAnimation({"x":1*u});
//8 k
item.addAnimation({"y":6*u});
//9 k
item.addAnimation({"y":5*u});
//10 $
item.addAnimation({"x":11*u});
//11 k
item.addAnimation({"y":4*u});
//12 k
item.addAnimation({"y":3*u});
//13 Fd
item.addAnimation({"x":4*u});
//14 k
item.addAnimation({"y":2*u});
//15 k
item.addAnimation({"y":1*u});

//1 goal
item=stage.createNewItem();
item.setName("goal");
item.addAnimation({"dsp":true,"x":4*u,"y":1*u,"w":u,"h":u,"img":"goal01.png","bgc":"yellow","bdc":"yellow"});
stage.addItem(item);

//word "abcdef ghij" [j] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"j"});
stage.addItem(item);

//word "abcdef ghij" [i] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "abcdef ghij" [h] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "abcdef ghij" [g] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"g"});
stage.addItem(item);

//word "abcdef ghij" [ ] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "abcdef ghij" [f] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"f"});
stage.addItem(item);

//word "abcdef ghij" [e] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "abcdef ghij" [d] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"d"});
stage.addItem(item);

//word "abcdef ghij" [c] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"c"});
stage.addItem(item);

//word "abcdef ghij" [b] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":9*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"b"});
stage.addItem(item);

//word "abcdef ghij" [a] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":1*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "abcdef ghij" [a] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":1*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "abcdef ghij" [b] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"b"});
stage.addItem(item);

//word "abcdef ghij" [c] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"c"});
stage.addItem(item);

//word "abcdef ghij" [d] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"d"});
stage.addItem(item);

//word "abcdef ghij" [e] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "abcdef ghij" [f] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"f"});
stage.addItem(item);

//word "abcdef ghij" [ ] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "abcdef ghij" [g] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"g"});
stage.addItem(item);

//word "abcdef ghij" [h] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "abcdef ghij" [i] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "abcdef ghij" [j] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":5*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"j"});
stage.addItem(item);

//word "abcdef ghij" [j] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"j"});
stage.addItem(item);

//word "abcdef ghij" [i] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "abcdef ghij" [h] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "abcdef ghij" [g] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"g"});
stage.addItem(item);

//word "abcdef ghij" [ ] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "abcdef ghij" [f] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"f"});
stage.addItem(item);

//word "abcdef ghij" [e] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "abcdef ghij" [d] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":3*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"d"});
stage.addItem(item);

//word "abcdef ghij" [c] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"c"});
stage.addItem(item);

//word "abcdef ghij" [b] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"b"});
stage.addItem(item);

//word "abcdef ghij" [a] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":1*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);



//wall 1
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 2
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 3
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 4
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 5
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 6
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 7
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 8
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 9
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 10
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 11
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 12
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 13
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 14
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 15
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 16
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 17
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 18
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 19
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 20
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 21
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 22
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 23
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 24
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 25
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 26
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 27
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 28
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 29
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 30
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 31
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 32
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 33
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 34
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 35
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 36
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 37
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 38
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 39
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 40
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 41
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 42
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 43
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 44
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 45
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 46
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 47
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 48
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 49
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 50
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 51
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 52
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 53
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 54
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 55
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 56
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 57
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 58
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 59
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 60
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 61
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 62
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 63
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 64
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 65
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 66
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 67
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 68
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 69
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 70
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 71
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 72
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 73
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 74
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":11*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 75
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":11*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 76
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 77
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 78
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);


}
