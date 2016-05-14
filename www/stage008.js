//Created by VIMRIO helper

//Please rename XXX.
//For example. If current final stage is 012, this function's name is "initStage013" and save "stage013.js".
function initStage008(stage){

var item;
var u=10;
stage.setAnsStr("hhkkwjjjlljjjbbkkhhjjjjlll");
item=stage.createNewItem();
item.setName("vimrio");
item.setFrameStartIndex(0);
stage.addItem(item);
//1 start
item.addAnimation({"dsp":true,"x":4*u,"y":3*u,"w":u,"h":u,"bgc":"transparent","bdc":"blue","img":"vimrio01.png","z":5,"opc":1.0});
//2 h
item.addAnimation({"x":3*u});
//3 h
item.addAnimation({"x":2*u});
//4 k
item.addAnimation({"y":2*u});
//5 k
item.addAnimation({"y":1*u});
//6 w
item.addAnimation({"x":7*u});
//7 j
item.addAnimation({"y":2*u});
//8 j
item.addAnimation({"y":3*u});
//9 j
item.addAnimation({"y":4*u});
//10 l
item.addAnimation({"x":8*u});
//11 l
item.addAnimation({"x":9*u});
//12 j
item.addAnimation({"y":5*u});
//13 j
item.addAnimation({"y":6*u});
//14 j
item.addAnimation({"y":7*u});
//15 b
item.addAnimation({"x":7*u});
//16 b
item.addAnimation({"x":3*u});
//17 k
item.addAnimation({"y":6*u});
//18 k
item.addAnimation({"y":5*u});
//19 h
item.addAnimation({"x":2*u});
//20 h
item.addAnimation({"x":1*u});
//21 j
item.addAnimation({"y":6*u});
//22 j
item.addAnimation({"y":7*u});
//23 j
item.addAnimation({"y":8*u});
//24 j
item.addAnimation({"y":9*u});
//25 l
item.addAnimation({"x":2*u});
//26 l
item.addAnimation({"x":3*u});
//27 l
item.addAnimation({"x":4*u});

//1 goal
item=stage.createNewItem();
item.setName("goal");
item.addAnimation({"dsp":true,"x":4*u,"y":9*u,"w":u,"h":u,"img":"goal01.png","bgc":"yellow","bdc":"yellow"});
stage.addItem(item);

//word "aaaa bbb" [a] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":1*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"a"});
stage.addItem(item);

//word "aaaa bbb" [a] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":1*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "aaaa bbb" [a] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":1*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "aaaa bbb" [a] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":1*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "aaaa bbb" [ ] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":1*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "aaaa bbb" [b] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":1*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"b"});
stage.addItem(item);

//word "aaaa bbb" [b] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":1*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"b"});
stage.addItem(item);

//word "aaaa bbb" [b] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":1*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"b"});
stage.addItem(item);

//word "ddd" [d] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"d"});
stage.addItem(item);

//word "ddd" [d] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"d"});
stage.addItem(item);

//word "ddd" [d] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":7*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"d"});
stage.addItem(item);

//word "ccc " [ ] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "ccc " [c] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"c"});
stage.addItem(item);

//word "ccc " [c] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":7*u,"w":u,"h":u,"img":"word02.png","bgc":"transparent","bdc":"lightgray","wd":"c"});
stage.addItem(item);

//word "ccc " [c] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":7*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"c"});
stage.addItem(item);


//wall 1
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 2
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 3
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 4
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 5
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 6
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 7
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 8
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 9
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":0*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 10
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":1*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 11
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 12
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 13
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 14
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 15
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 16
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 17
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 18
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 19
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 20
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 21
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 22
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 23
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 24
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 25
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 26
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 27
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 28
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 29
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 30
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 31
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 32
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 33
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 34
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 35
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 36
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
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
item.addAnimation({"dsp":true,"x":0*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 43
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 44
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 45
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 46
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 47
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 48
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 49
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 50
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 51
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 52
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 53
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":0*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 54
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);


}
