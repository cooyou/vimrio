//vimrioゲームのJavaScript

	
function initStage002(stage){
	
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
		//opc : opacity (0.0-1.0) default=1.0
		//z : z-index (default=2)
		
		
		//Answer String
		stage.setAnsStr("hhhhhhkkkkklllllljjj");
		
		item=stage.createNewItem();
		
		//class name. Anything is ok.
		item.setName("vimrio");
		
		//frame offset. default startindex=0
		item.setFrameStartIndex(0);
		
		//first frame
		item.addAnimation({"dsp":true,"x":8*u,"y":8*u,"w":u,"h":u,"bgc":"transparent","bdc":"blue","img":"vimrio01.png","z":5,"opc":1.0});
		//second frame. In this case,the object only moves x. Actually, you can set plural parameters.
		item.addAnimation({"x":7*u});
		//3rd frame
		item.addAnimation({"x":6*u});
		item.addAnimation({"x":5*u});
		item.addAnimation({"x":4*u});
		item.addAnimation({"x":3*u});
		item.addAnimation({"x":2*u});
		item.addAnimation({"y":7*u});
		item.addAnimation({"y":6*u});
		item.addAnimation({"y":5*u});
		item.addAnimation({"y":4*u});
		item.addAnimation({"y":3*u});
		item.addAnimation({"x":3*u});
		item.addAnimation({"x":4*u});
		item.addAnimation({"x":5*u});
		item.addAnimation({"x":6*u});
		item.addAnimation({"x":7*u});
		item.addAnimation({"x":8*u});
		item.addAnimation({"y":4*u});
		item.addAnimation({"y":5*u});
		//last frame = Answer String length
		item.addAnimation({"y":6*u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("goal");
		//first frame only, because goal does not change. if object changes, set FrameStartIndex and add other frames.
		item.addAnimation({"dsp":true,"x":8*u,"y":6*u,"w":u,"h":u,"img":"goal01.png","bgc":"yellow","bdc":"yellow"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":9*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":8*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":6*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":4*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":2*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":9*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":4*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":6*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":8*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":9*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":9*u,"y":8*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":9*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":9*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":9*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":9*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":9*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":6*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":4*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":7*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":6*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":5*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":4*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":3*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":2*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":4*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":6*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":8*u,"y":2*u,"w":u,"h":u,"img":"brick01.png","bgc":"BlanchedAlmond","bdc":"peru"});
		stage.addItem(item);
}
