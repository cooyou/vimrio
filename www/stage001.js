//vimrioゲームのJavaScript

	
function initStage001(stage){
		var item;
		var u=10;
		//{"dsp":true,"x":20,"y":20,"w":u,"h":u,"bgc":"BlanchedAlmond","bdc":"NavajoWhite","opc":1.0}
		stage.setAnsStr("jjjjlllllkkkhhh");
		
		item=stage.createNewItem();
		item.setName("vimrio");
		item.setFrameStartIndex(0);
		item.addAnimation({"dsp":true,"x":1*u,"y":1*u,"w":u,"h":u});
		item.addAnimation({"y":2*u});
		item.addAnimation({"y":3*u});
		item.addAnimation({"y":4*u});
		item.addAnimation({"y":5*u});
		item.addAnimation({"x":2*u});
		item.addAnimation({"x":3*u});
		item.addAnimation({"x":4*u});
		item.addAnimation({"x":5*u});
		item.addAnimation({"x":6*u});
		item.addAnimation({"y":4*u});
		item.addAnimation({"y":3*u});
		item.addAnimation({"y":2*u});
		item.addAnimation({"x":5*u});
		item.addAnimation({"x":4*u});
		item.addAnimation({"x":3*u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("goal");
		item.addAnimation({"dsp":true,"x":3*u,"y":2*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":0,"y":0,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":0,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":2*u,"y":0,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":0,"y":1*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":0,"y":2*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":0,"y":3*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":0,"y":4*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":0,"y":5*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":2*u,"y":1*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":2*u,"y":2*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":2*u,"y":3*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":2*u,"y":4*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":0,"y":6*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":1*u,"y":6*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":2*u,"y":6*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":6*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":4*u,"y":6*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":6*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":6*u,"y":6*u,"w":u,"h":u});
		stage.addItem(item);
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":4*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":4*u,"y":4*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":4*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":6*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":5*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":4*u,"w":u,"h":u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":3*u,"w":u,"h":u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":2*u,"w":u,"h":u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":7*u,"y":1*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":4*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":3*u,"w":u,"h":u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":6*u,"y":1*u,"w":u,"h":u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":5*u,"y":1*u,"w":u,"h":u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":4*u,"y":1*u,"w":u,"h":u});
		stage.addItem(item);

		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":1*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":3*u,"y":3*u,"w":u,"h":u});
		stage.addItem(item);
		
		item=stage.createNewItem();
		item.setName("wall");
		item.addAnimation({"dsp":true,"x":4*u,"y":3*u,"w":u,"h":u});
		stage.addItem(item);
}
