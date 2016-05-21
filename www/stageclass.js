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
		if(this.typeStr.length>=this.ansStr.length){
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

	this.typeKeyboard=function(c,shift,ctrl){
		var ansc=this.ansStr[this.typeStr.length];
		var hit=false;
		if(typeof keymap[ansc] !== "undefined" ){
			
			var map=keymap[ansc];
			var ans_c=map[0];
			var ans_shift=map[1];
			var ans_ctrl=map[2];
			//console.log("ans_c="+ans_c+" ans_shift="+ans_shift+" ans_ctrl="+ans_ctrl+" c="+c+" shift="+shift+" ctrl="+ctrl);
			if(ans_c==c && ans_shift==shift && ans_ctrl==ctrl){
				//console.log("hit initchars");
				hit=true;
			}
		}
		else{
			if(ansc==c){
				//console.log("hit char");
				hit=true;
			}
		}
		var prec="";
		if(this.typeStr.length>0){
				prec=this.typeStr.substr(-1);
		}
		
		if(hit){
			//console.log("correct");

			this.typeStr+=ansc;
			if(ansc==="g" && prec!=="g"){
				;
			}
			else{
				this.frameIndex++;
				this.setFrame();
			}
			return true;
		}
		else{
			//console.log("fail");
			if(prec==="g"){
				this.typeStr=this.typeStr.substr(0,this.typeStr.length-1);
			}
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

