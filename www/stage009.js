//Created by VIMRIO helper

//Please rename XXX.
//For example. If current final stage is 012, this function's name is "initStage013" and save "stage013.js".
function initStage009(stage){

var item;
var u=7;
stage.setAnsStr("hjjwwjjwjjbbbbjjwwjjbbjjwkk");
item=stage.createNewItem();
item.setName("vimrio");
item.setFrameStartIndex(0);
stage.addItem(item);
//1 start
item.addAnimation({"dsp":true,"x":1*u,"y":1*u,"w":u,"h":u,"bgc":"transparent","bdc":"blue","img":"vimrio01.png","z":5,"opc":1.0});
//2 h
item.addAnimation({"x":0*u});
//3 j
item.addAnimation({"y":2*u});
//4 j
item.addAnimation({"y":3*u});
//5 w
item.addAnimation({"x":4*u});
//6 w
item.addAnimation({"x":7*u});
//7 j
item.addAnimation({"y":4*u});
//8 j
item.addAnimation({"y":5*u});
//9 w
item.addAnimation({"x":11*u});
//10 j
item.addAnimation({"y":6*u});
//11 j
item.addAnimation({"y":7*u});
//12 b
item.addAnimation({"x":10*u});
//13 b
item.addAnimation({"x":7*u});
//14 b
item.addAnimation({"x":3*u});
//15 b
item.addAnimation({"x":1*u});
//16 j
item.addAnimation({"y":8*u});
//17 j
item.addAnimation({"y":9*u});
//18 w
item.addAnimation({"x":6*u});
//19 w
item.addAnimation({"x":9*u});
//20 j
item.addAnimation({"y":10*u});
//21 j
item.addAnimation({"y":11*u});
//22 b
item.addAnimation({"x":8*u});
//23 b
item.addAnimation({"x":2*u});
//24 j
item.addAnimation({"y":12*u});
//25 j
item.addAnimation({"y":13*u});
//26 w
item.addAnimation({"x":11*u});
//27 k
item.addAnimation({"y":12*u});
//28 k
item.addAnimation({"y":11*u});

//1 goal
item=stage.createNewItem();
item.setName("goal");
item.addAnimation({"dsp":true,"x":11*u,"y":11*u,"w":u,"h":u,"img":"goal01.png","bgc":"yellow","bdc":"yellow"});
stage.addItem(item);

//word "vim " [v] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":0*u,"y":3*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"v"});
stage.addItem(item);

//word "vim " [i] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":1*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "vim " [m] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"m"});
stage.addItem(item);

//word "vim " [ ] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "is best" [i] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":3*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"i"});
stage.addItem(item);

//word "is best" [s] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word "is best" [ ] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "is best" [b] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":3*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"b"});
stage.addItem(item);

//word "is best" [e] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "is best" [s] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word "is best" [t] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":3*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word "for you" [f] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":5*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"f"});
stage.addItem(item);

//word "for you" [o] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":5*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "for you" [r] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":5*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"r"});
stage.addItem(item);

//word "for you" [ ] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":5*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "for you" [y] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":5*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"y"});
stage.addItem(item);

//word "for you" [o] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":5*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "for you" [u] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":13*u,"y":5*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"u"});
stage.addItem(item);

//word "it" [t] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word "it" [i] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":7*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"i"});
stage.addItem(item);

//word "do " [ ] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "do " [o] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "do " [d] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":7*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"d"});
stage.addItem(item);

//word "can " [ ] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "can " [n] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"n"});
stage.addItem(item);

//word "can " [a] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "can " [c] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":7*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"c"});
stage.addItem(item);

//word "I " [ ] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "I " [I] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":1*u,"y":7*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"I"});
stage.addItem(item);

//word "this " [t] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":1*u,"y":9*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"t"});
stage.addItem(item);

//word "this " [h] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "this " [i] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "this " [s] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word "this " [ ] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "is mine" [i] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":9*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"i"});
stage.addItem(item);

//word "is mine" [s] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word "is mine" [ ] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "is mine" [m] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":9*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"m"});
stage.addItem(item);

//word "is mine" [i] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "is mine" [n] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"n"});
stage.addItem(item);

//word "is mine" [e] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":9*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "up" [p] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":11*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"p"});
stage.addItem(item);

//word "up" [u] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":11*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"u"});
stage.addItem(item);

//word "cheer " [ ] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":11*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "cheer " [r] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":11*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"r"});
stage.addItem(item);

//word "cheer " [e] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":11*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "cheer " [e] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":11*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "cheer " [h] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":11*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "cheer " [c] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":11*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"c"});
stage.addItem(item);

//word "favorite one" [f] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":13*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"f"});
stage.addItem(item);

//word "favorite one" [a] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "favorite one" [v] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"v"});
stage.addItem(item);

//word "favorite one" [o] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "favorite one" [r] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"r"});
stage.addItem(item);

//word "favorite one" [i] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "favorite one" [t] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word "favorite one" [e] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "favorite one" [ ] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "favorite one" [o] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":13*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"o"});
stage.addItem(item);

//word "favorite one" [n] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"n"});
stage.addItem(item);

//word "favorite one" [e] 12
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":13*u,"y":13*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);


//wall 1
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 2
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 3
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 4
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 5
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 6
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 7
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 8
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 9
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 10
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 11
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 12
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 13
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 14
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 15
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 16
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 17
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 18
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 19
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 20
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 21
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 22
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 23
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 24
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 25
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 26
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 27
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 28
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 29
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 30
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 31
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 32
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 33
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 34
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
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
item.addAnimation({"dsp":true,"x":12*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 45
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 46
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 47
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 48
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 49
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 50
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 51
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 52
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 53
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 54
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 55
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 56
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 57
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 58
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 59
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 60
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 61
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 62
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 63
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 64
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 65
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 66
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 67
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 68
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 69
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 70
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 71
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 72
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 73
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 74
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 75
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 76
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 77
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":11*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 78
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":11*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 79
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":11*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 80
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 81
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 82
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 83
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 84
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 85
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 86
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 87
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 88
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 89
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 90
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 91
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 92
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":13*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 93
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":13*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 94
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 95
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 96
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 97
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 98
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 99
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 100
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 101
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 102
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 103
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 104
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 105
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 106
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 107
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);


}
