//vimrioゲームのJavaScript
var StageClass=function(){
	
	this.ansStr="";
	this.typeStr="";
	
	this.frameIndex=0;
	this.items=new Array();
	this.dicitems = new Object();
	
	this.setAnsStr=function(ansStr){
		this.ansStr=ansStr;
	};
	
	this.isFinish=function(){
		if(this.frameIndex>=this.ansStr.length){
			return true;
		}
		return false;
	};
	
	this.getAnsStr=function(){
			return this.ansStr;
	};
	
	this.getTypeStr=function(){
		return this.typeStr;
	};
	
	this.setFrameIndex=function(frameIndex){
		this.frameIndex=frameIndex;
	};
	
	this.getFrameIndex=function(){
		return this.frameIndex;
	};

	this.typeKeyboard=function(c){
		var ansc=this.ansStr.substr(this.frameIndex,1);

		if(ansc===c){
			//console.log("correct");
			this.typeStr+=c;
			this.frameIndex++;
			this.setFrame();
			return true;
		}
		else{
			//console.log("fail");
			return false;
		}
		
	};
	
	
	this.addItem=function(item){
		this.items.push(item);
		var ary=this.dicitems[item.getName()];
		if(ary==null){
			this.dicitems[item.getName()]=new Array();
		}
		this.dicitems[item.getName()].push(item);
	};
	
	this.getItemsByName=function(name){
		return this.dicitems[name];
	};
	
	this.getItems=function(){
		return this.items;
	};

	this.createNewItem=function(){
		var item=new ItemClass();
		return item;
	}
	
	this.initStage=function(stageIndex){
		this.items=new Array();
		this.dicitems=new Object();
		this.typeStr="";
		
		var nostr=('00'+(stageIndex+1)).slice(-3);
		var stage=this;

		eval("initStage"+nostr+"(stage)");
		
	};
	
	this.setFrame=function(){

		var num=this.items.length;
		var i;
		for(i=0;i<num;i++){
			var item=this.items[i];
			item.setFrame(this.frameIndex);
		}
	};
	
	this.getItems=function(){
		return this.items;
	}
	

}

