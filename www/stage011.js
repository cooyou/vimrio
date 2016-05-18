//Created by VIMRIO helper

//Please rename XXX.
//For example. If current final stage is 012, this function's name is "initStage013" and save "stage013.js".
function initStage011(stage){

var item;

// 1unit=10%  if you want to change unit size, change this.
var u=5;

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
//helper original string=$"This is my pen  "jj^"That is your pen"jj$" It is a picture"jj^"  It is a letter"jj$"You had books"jj^"I had pens"jj
stage.setAnsStr("$jj^jj$jj^jj$jj^jj");
item=stage.createNewItem();

//class name
item.setName("vimrio");

//frame offset. default startindex=0
item.setFrameStartIndex(0);
stage.addItem(item);

//first frame
//1 start
item.addAnimation({"dsp":true,"x":2*u,"y":3*u,"w":u,"h":u,"bgc":"transparent","bdc":"blue","img":"vimrio01.png","z":5,"opc":1.0,"wd":""});
//following next frames

//2$
item.addAnimation({"x":17*u});
//3 j
item.addAnimation({"y":4*u});
//4 j
item.addAnimation({"y":5*u});
//5$
item.addAnimation({"x":2*u});
//6 j
item.addAnimation({"y":6*u});
//7 j
item.addAnimation({"y":7*u});
//8$
item.addAnimation({"x":17*u});
//9 j
item.addAnimation({"y":8*u});
//10 j
item.addAnimation({"y":9*u});
//11$
item.addAnimation({"x":4*u});
//12 j
item.addAnimation({"y":10*u});
//13 j
item.addAnimation({"y":11*u});
//14$
item.addAnimation({"x":16*u});
//15 j
item.addAnimation({"y":12*u});
//16 j
item.addAnimation({"y":13*u});
//17$
item.addAnimation({"x":7*u});
//18 j
item.addAnimation({"y":14*u});
//19 j
item.addAnimation({"y":15*u});

//1 goal
item=stage.createNewItem();
item.setName("goal");
item.addAnimation({"dsp":true,"x":7*u,"y":15*u,"w":u,"h":u,"img":"goal01.png","bgc":"yellow","bdc":"yellow"});
stage.addItem(item);

//word "This is my pen  " [T] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"T"});
stage.addItem(item);

//word "This is my pen  " [h] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "This is my pen  " [i] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "This is my pen  " [s] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word "This is my pen  " [ ] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "This is my pen  " [i] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "This is my pen  " [s] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word "This is my pen  " [ ] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "This is my pen  " [m] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"m"});
stage.addItem(item);

//word "This is my pen  " [y] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"y"});
stage.addItem(item);

//word "This is my pen  " [ ] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "This is my pen  " [p] 12
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":13*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"p"});
stage.addItem(item);

//word "This is my pen  " [e] 13
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":14*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "This is my pen  " [n] 14
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":15*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"n"});
stage.addItem(item);

//word "This is my pen  " [ ] 15
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":16*u,"y":3*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "This is my pen  " [ ] 16
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":17*u,"y":3*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":" "});
stage.addItem(item);

//word "That is your pen" [T] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":5*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"T"});
stage.addItem(item);

//word "That is your pen" [h] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "That is your pen" [a] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "That is your pen" [t] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word "That is your pen" [ ] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "That is your pen" [i] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "That is your pen" [s] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word "That is your pen" [ ] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "That is your pen" [y] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"y"});
stage.addItem(item);

//word "That is your pen" [o] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "That is your pen" [u] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"u"});
stage.addItem(item);

//word "That is your pen" [r] 12
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":13*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"r"});
stage.addItem(item);

//word "That is your pen" [ ] 13
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":14*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "That is your pen" [p] 14
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":15*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"p"});
stage.addItem(item);

//word "That is your pen" [e] 15
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":16*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "That is your pen" [n] 16
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":17*u,"y":5*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"n"});
stage.addItem(item);

//word " It is a picture" [ ] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word " It is a picture" [I] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"I"});
stage.addItem(item);

//word " It is a picture" [t] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word " It is a picture" [ ] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word " It is a picture" [i] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word " It is a picture" [s] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word " It is a picture" [ ] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word " It is a picture" [a] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word " It is a picture" [ ] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word " It is a picture" [p] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"p"});
stage.addItem(item);

//word " It is a picture" [i] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word " It is a picture" [c] 12
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":13*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"c"});
stage.addItem(item);

//word " It is a picture" [t] 13
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":14*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word " It is a picture" [u] 14
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":15*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"u"});
stage.addItem(item);

//word " It is a picture" [r] 15
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":16*u,"y":7*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"r"});
stage.addItem(item);

//word " It is a picture" [e] 16
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":17*u,"y":7*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"e"});
stage.addItem(item);

//word "  It is a letter" [ ] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":2*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "  It is a letter" [ ] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":3*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "  It is a letter" [I] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":9*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"I"});
stage.addItem(item);

//word "  It is a letter" [t] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word "  It is a letter" [ ] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "  It is a letter" [i] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"i"});
stage.addItem(item);

//word "  It is a letter" [s] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);

//word "  It is a letter" [ ] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "  It is a letter" [a] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "  It is a letter" [ ] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "  It is a letter" [l] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"l"});
stage.addItem(item);

//word "  It is a letter" [e] 12
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":13*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "  It is a letter" [t] 13
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":14*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word "  It is a letter" [t] 14
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":15*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"t"});
stage.addItem(item);

//word "  It is a letter" [e] 15
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":16*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "  It is a letter" [r] 16
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":17*u,"y":9*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"r"});
stage.addItem(item);

//word "You had books" [Y] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":4*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"Y"});
stage.addItem(item);

//word "You had books" [o] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":5*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "You had books" [u] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":6*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"u"});
stage.addItem(item);

//word "You had books" [ ] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "You had books" [h] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "You had books" [a] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "You had books" [d] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"d"});
stage.addItem(item);

//word "You had books" [ ] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "You had books" [b] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"b"});
stage.addItem(item);

//word "You had books" [o] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":13*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "You had books" [o] 11
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":14*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"o"});
stage.addItem(item);

//word "You had books" [k] 12
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":15*u,"y":11*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"k"});
stage.addItem(item);

//word "You had books" [s] 13
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":16*u,"y":11*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"s"});
stage.addItem(item);

//word "I had pens" [I] 1
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":7*u,"y":13*u,"w":u,"h":u,"img":"word01.png","bgc":"transparent","bdc":"white","wd":"I"});
stage.addItem(item);

//word "I had pens" [ ] 2
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":8*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "I had pens" [h] 3
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":9*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"h"});
stage.addItem(item);

//word "I had pens" [a] 4
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":10*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"a"});
stage.addItem(item);

//word "I had pens" [d] 5
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":11*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"d"});
stage.addItem(item);

//word "I had pens" [ ] 6
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":12*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":" "});
stage.addItem(item);

//word "I had pens" [p] 7
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":13*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"p"});
stage.addItem(item);

//word "I had pens" [e] 8
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":14*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"e"});
stage.addItem(item);

//word "I had pens" [n] 9
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":15*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"n"});
stage.addItem(item);

//word "I had pens" [s] 10
item=stage.createNewItem();
item.setName("word");
item.addAnimation({"dsp":true,"x":16*u,"y":13*u,"w":u,"h":u,"img":"word03.png","bgc":"transparent","bdc":"lightgray","wd":"s"});
stage.addItem(item);


//wall 1
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 2
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 3
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 4
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 5
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 6
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 7
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 8
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 9
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 10
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 11
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 12
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 13
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 14
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 15
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":15*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 16
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":16*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 17
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":17*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 18
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 19
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 20
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
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
item.addAnimation({"dsp":true,"x":11*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 32
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 33
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 34
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 35
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":15*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 36
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":16*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 37
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 38
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 39
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 40
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 41
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 42
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 43
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 44
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 45
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 46
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 47
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 48
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 49
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 50
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 51
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 52
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 53
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":15*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 54
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":16*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 55
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":17*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 56
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 57
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 58
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 59
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 60
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 61
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 62
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 63
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 64
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 65
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 66
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 67
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 68
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 69
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 70
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 71
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 72
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 73
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":15*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 74
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":16*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 75
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 76
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 77
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 78
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":1*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 79
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":2*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 80
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 81
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 82
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 83
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 84
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 85
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 86
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 87
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 88
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 89
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 90
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 91
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":15*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 92
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":16*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 93
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":17*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 94
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":18*u,"y":10*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 95
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":11*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 96
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":17*u,"y":11*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 97
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":3*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 98
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":4*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 99
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":5*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 100
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 101
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 102
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 103
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 104
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 105
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 106
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 107
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 108
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 109
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":15*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 110
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":17*u,"y":12*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 111
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":13*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 112
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":17*u,"y":13*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 113
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 114
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 115
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":9*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 116
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":10*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 117
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":11*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 118
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":12*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 119
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":13*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 120
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":14*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 121
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":15*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 122
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":16*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 123
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":17*u,"y":14*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 124
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":15*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 125
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":15*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 126
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":6*u,"y":16*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 127
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":7*u,"y":16*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);

//wall 128
item=stage.createNewItem();
item.setName("wall");
item.addAnimation({"dsp":true,"x":8*u,"y":16*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
stage.addItem(item);


}
