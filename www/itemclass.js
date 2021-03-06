//vimrioゲームのJavaScript
var ItemClass=function(){
	this.frameStartIndex=0;
	this.id="id"+Math.floor( Math.random() * 999999999 ) ;
	this.name="";
	this.display=false;
	this.x=0;
	this.y=0;
	this.w=10;
	this.h=10;
	this.backgroundColor="white";
	this.borderColor="gray";
	this.backgroundImage="";
	this.opacity=1.0;
	this.zIndex=2;
	this.wd="";
	
	this.animations=new Array();
	
	this.getId=function(){
		return this.id;
	};
	
	this.setName=function(name){
		this.name=name;
	};
	
	this.getName=function(name){
		return this.name;
	};

	this.setX=function(x){
		this.x=x;
	};
	
	this.setY=function(y){
		this.y=y;
	};
	
	this.setXY=function(x,y){
		this.setX(x);
		this.setY(y);
	};
	
	this.getX=function(){
		return this.x;
	};

	this.getY=function(){
		return this.y;
	};
	
	this.getXY=function(){
		return {"x":this.x,"y":this.y};
	};
	
	this.setW=function(w){
		this.w=w;
	};
	
	this.getW=function(){
		return this.w;
	};
	
	this.getH=function(){
		return this.h;
	};
	
	this.setH=function(h){
		this.h=h;
	};
	
	this.setWH=function(w,h){
		this.setW(w);
		this.setH(h);
	};
	
	this.getWH=function(){
		return {"w":this.w,"h":this.h};
	};
	
	this.setDisplay=function(display){
		this.display=display;
	};
	
	this.getDisplay=function(){
		return this.display;
	};
	
	this.setBackgroundColor=function(backgroundColor){
		this.backgroundColor=backgroundColor;
	};
	
	this.getBackgroundColor=function(){
		return this.backgroundColor;
	};
	
	this.setBorderColor=function(borderColor){
		this.borderColor=borderColor;
	};
	
	this.getBorderColor=function(){
		return this.borderColor;
	};
	
	this.setBackgroundImage=function(backgroundImage){
		this.backgroundImage=backgroundImage;
	};
	
	this.getBackgroundImage=function(){
		return this.backgroundImage;
	};
	
	this.setOpacity=function(opacity){
		this.opacity=opacity;
	};
	
	this.getOpacity=function(){
		return this.opacity;
	};
	
	this.setZIndex=function(zIndex){
		this.zIndex=zIndex;
	};
	
	this.getZIndex=function(){
			return this.zIndex;
	};
	
	this.setWd=function(wd){
		this.wd=wd;
	};
	
	this.getWd=function(){
		return this.wd;
	};

	this.addAnimation=function(param){
		this.animations.push(param);
	};
	

	
	this.addEmptyAnimation=function(){
		this.animations.push({"dsp":true,"x":"","y":"","w":"","h":"","bgc":"","bdc":"","img":"","opc":"","z":"","wd":""});
	};
	
	this.setFrameStartIndex=function(frameStartIndex){
		this.frameStartIndex=frameStartIndex;
	};
	
	this.setFrame=function(frameIndex){
		//console.log("setFrame");
		var i=frameIndex-this.frameStartIndex;
		if(i<0 || i>=this.animations.length){
			this.setDisplay(false);
			return;
		}
		var animation=this.animations[i];
		
		this.setDisplay(animation.dsp);
		this.setXY(animation.x,animation.y);
		this.setWH(animation.w,animation.w);
		this.setBackgroundColor(animation.bgc);
		this.setBorderColor(animation.bdc);
		this.setBackgroundImage(animation.img);
		this.setOpacity(animation.opc);
		this.setZIndex(animation.z);
		this.setWd(animation.wd);

	};
}

