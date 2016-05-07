//vimrioゲームのJavaScript
var GameClass=function(){

	this.stageIndex=0;
	this.stages=new Array();
	
	this.createStages=function(stageNum){
		this.stages=new Array();
		var i;
		for(i=0;i<stageNum;i++){
			var stage=new StageClass();
			
			stage.initStage(i);
			this.addStage(stage);
		}
	};
	
	this.initStage=function(){
		this.stages[this.stageIndex].initStage(this.stageIndex);
	};
	
	this.getStageNum=function(){
		return this.stages.length;
	}
	
	this.setStageIndex=function(stageIndex){
		this.stageIndex=stageIndex;
	};
	
	this.getStageIndex=function(){
		return this.stageIndex;
	};
	
	this.addStage=function(stage){
		this.stages.push(stage);
	};
	
	this.getStage=function(){
		return this.stages[this.stageIndex];
	};
	
	this.getDivString=function(){
		var stage=this.getStage();
		var items=stage.getItems();
		var ansStr=stage.getAnsStr();

		var str='<div class="keystring ansStr"><p>'+ansStr+'</p></div>';
		str+='<div class="keystring typeStr"><p></p></div>';
		var i;
		for(i=0;i<items.length;i++){
			var id=items[i].getId();
			var name=items[i].getName();
			str+='<div id="'+id+'" class="item '+name+'" ></div>';
		}
		
		return str;
	};

}

