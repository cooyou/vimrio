//vimrioゲームのJavaScript
var width=800;
var height;
var offsetleft=0;
var offsetright=0;
var cvsw,cvsh;
var stagenum=0;
var game=null;
var errorcnt=0;
var stageIndex=0;

var initialize=false;
var keymap=[];
var keymapindex=0;
var initchars=["$","^"];
var prekey="";

$(function() {
	if(localStorage) {

		var mapst = localStorage.getItem('keymap');
		if(typeof mapst !=="undefined" && mapst!=null){
			var ary=JSON.parse(mapst);
			
			if(typeof ary !=="undefined" && ary!=null && ary.length===initchars.length){
				
				var mapindex;
				var map=[]; 
				for(mapindex=0;mapindex<ary.length;mapindex++){
					//console.log(JSON.parse(ary[mapindex]));
					map[initchars[mapindex]]=JSON.parse(ary[mapindex]);
				}
				
				if(typeof map !=="undefined" && map!=null && mapindex===initchars.length){
					keymap=map;
					keymapindex=mapindex;
					initialize=true;
				}
			}
		}
		
	}
	
	//console.log("jquery init");
	$.getScript("itemclass.js", function(){
		$.getScript("stageclass.js", function(){
			$.getScript("gameclass.js", function(){
				jqInit();
			});
		});
	});
});

function showAns(success){
	
	if(success){
		var typeStr=game.getStage().getTypeStr();
		$("p",".typeStr").text(typeStr);
		$(".ansStr").css("display","none");
	}
	else{
		$(".ansStr").css("display","none");
		$(".ansStr").delay(0).fadeIn("fast",function(){
			$(".ansStr").delay(1000).fadeOut("fast",function(){
					var typeStr=game.getStage().getTypeStr();
					$("p",".typeStr").text(typeStr);
			});
		});
		
	}
}

function jqInit(){
	//console.log("jqInit");

	width=$(window).width();
	height=$(window).height();
	if(height<width){
		width=height;
		
		offsetleft=($(window).width()-width)/2;
		offsettop=0;
	}
	else{
		height=width;
		offsettop=($(window).height()-height)/2;
		offsetleft=0;
	}
	cvsw=width*0.9;
	cvsh=height*0.9;
	game=new GameClass();
	
	$("body").keydown(function(e){
	    //console.log(e.keyCode);


		var stage=game.getStage();

		var c=String.fromCharCode(e.keyCode);
		//console.log("code=["+c.charCodeAt(0)+"] c="+c+" shift="+e.shiftKey+" ctrl="+e.ctrlKey+" len="+c.length+" keycode="+e.keyCode);
		var code=c.charCodeAt(0);
		if(code==16 || code==17){
			return;
		}
		var shift=false;
		var ctrl=false;
		if(e.ctrlKey){
			ctrl=true;
		}
		if(e.shiftKey){
			shift=true;
			//console.log("shift");
		}
		else{
			c=c.toLowerCase();
		}
		
		if(initialize==false){
		  
			initKeyDown(e.keyCode,c,shift,ctrl);
		}
		else{
			//console.log("type="+c);
			var isfinish=stage.isFinish();
			if(isfinish==false){
				var success=stage.typeKeyboard(c,shift,ctrl);
				if(success==false){
					errorcnt++;
					showFooter();
				}
				showAns(success);
			}
			
			switch(e.keyCode){
	
				 case 32: // space
					 //console.log("space");
				 break;
				 
				 case 13: // enter
					 //console.log("enter");
					 if(isfinish){
						 nextStage();
						 return ;
					 }
				 break;
				 
			}
			if(isfinish==false){
				stageUpdate(stage);
			}
			prekey=c;
		}
    });
}    

function reInitialize(clear){
	$(".hlp").css("display","none");
	initialize=false;
	keymapindex=0;
	keymap=[];
	if(clear && localStorage){
		localStorage.clear();
	}
	$("#keytxt").text("");
	$("#ktxt").text(initchars[keymapindex]);
	$("#ktxt").css("display","block");
	$("#keytxt").css("display","block");
	$("#initdone").css("display","none");
	$("#initpanel").css("display","block");
}

function initClose(){
	$("#initpanel").css("display","none");
	initialize=true;
}
	
function initKeyDisp(){
	keymapindex++;
	$("#ktxt").text(initchars[keymapindex]);
	$("#keytxt").text("");

	
	if(keymapindex==initchars.length){
		if(localStorage){
			
			var i;
			var ary=[];
			for(i=0;i<keymapindex;i++){
				ary[i]=JSON.stringify(keymap[initchars[i]]);
			}
			
			localStorage.setItem('keymap',JSON.stringify(ary));
			
		
		}
		
		$("#ktxt").css("display","none");
		$("#keytxt").css("display","none");
		$("#initdone").css("display","block");

		setTimeout("initClose()",800);
		
	}
}

function initKeyDown(code,c,shift,ctrl){
		 $('#keytxt').html("code:"+code+"<br/>shift:"+shift+"<br/>ctrl:"+ctrl);
		var keytemp=[c,shift,ctrl];
		keymap[initchars[keymapindex]]=keytemp;
		setTimeout("initKeyDisp()",300);

}

function getGameItemPixX(per){
	var pixx=Math.floor(cvsw*per*0.01);
	if(pixx<0){
		pixx=0;
	}
	return pixx;
}

function getGameItemPixY(per){
	var pixy=Math.floor(cvsh*per*0.01);
	if(pixy<0){
		pixy=0;
	}
	return pixy;
}



function loadScriptAjax(fname,i){
	var nostr=('00'+(i+1)).slice(-3);
	var fullfname=(fname+nostr)+".js";
	//console.log("load "+fullfname);
	$.ajax({
		type: 'GET',
		dataType: 'script',
		url:fullfname,
		success: function(data){
			i++;
			//console.log("stagei="+i);
			loadScriptAjax(fname,i);
		},
		error: function(){

            stagenum=i;
            
            //console.log("stagenum="+stagenum);
   			stageIndex=0;
			initStages();
		}
		
	});
	
}

function initAll(){
	if(initialize==false){
		$('#ktxt').text(initchars[0]);
	}
	//name : [width,height,left,top]
    $("*").css("border-width",""+(height*0.003)+"px");
    $("#area").css("width",""+width+"px");
    $("#area").css("height",""+height+"px");
    $("#area").css("left",""+offsetleft+"px");
    $("#area").css("top",""+offsettop+"px");
    //console.log("offsetleft:"+offsetleft+" offsettop:"+offsettop);
	var whlt=
	{	 ".header":[width*1.0,height*0.05,0,0]
			,".ttl":[width*1.0*1.0*0.2,height*0.05*0.8,width*1.0*0.4,0]
			,".cmbstage":[width*1.0*1.0*0.2,height*0.05*0.8,width*1.0*0.05,height*0.05*0.05]
			,".notebtn":[width*1.0*1.0*0.1,height*0.05*0.8,width*1.0*0.85,height*0.05*0.05]

		,".leftside":[width*0.05,height*0.9,0,height*0.05]


		,".rightside":[width*0.05,height*0.9,width*0.95,height*0.05]


		,".footer":[width*1.0,height*0.05,0,height*0.95]


		,".cvs":[cvsw,cvsh,width*0.05,height*0.05]
			,".game":[cvsw,cvsh,0,0]
			,".endpanel":[cvsw*0.6,cvsh*0.6,cvsw*0.2,cvsh*0.2]
				,".endmsg":[cvsw*0.6,cvsh*0.6*0.5,0,cvsh*0.6*0.1]
				,".retrybtn":[cvsw*0.6*0.3,cvsh*0.6*0.2,cvsw*0.6*0.1,cvsh*0.6*0.7]
				,".nextbtn":[cvsw*0.6*0.3,cvsh*0.6*0.2,cvsw*0.6*0.6,cvsh*0.6*0.7]
	
		,".hlp":[width*0.8,height*0.6,width*0.05,height*0.1]
			,".initbtn":[width*0.8*0.4,height*0.8*0.1,width*0.8*0.2*0.3,height*0.8*0.4]
	};
	

	for (var obj in whlt) {
	//	console.log(obj);

		if(whlt[""+obj][0]>=0){
			$(""+obj).css("width",""+whlt[""+obj][0]+"px");
		}
		if(whlt[""+obj][1]>=0){
			$(""+obj).css("height",""+whlt[""+obj][1]+"px");
		}
		if(whlt[""+obj][2]>=0){
			$(""+obj).css("left",""+whlt[""+obj][2]+"px");
		}
		if(whlt[""+obj][3]>=0){
			$(""+obj).css("top",""+whlt[""+obj][3]+"px");
		}
		
	}
	


	if(game.getStageNum()==0){
		loadScriptAjax("stage",0);
	}
	
	if(initialize==false){
		$('#keytxt').focus();
	}
	
}


function setItem(item){
	var name=item.name;
	var id="#"+item.id;
	var x,y,w,h;
	x=item.getX();
	y=item.getY();
	w=item.getW();
	h=item.getH();
	

	var backgroundColor=item.getBackgroundColor();
	var borderColor=item.getBorderColor();
	
	var backgroundImage=item.getBackgroundImage();
	
	var display=item.getDisplay();
	
	var zIndex=item.getZIndex();
	
	var wd=item.getWd();

	if(typeof(x)!=="undefined" && x!==""){
		$(id).css("left",""+getGameItemPixX(x)+"px");
	}
	if(typeof(y)!=="undefined" && y!==""){
		$(id).css("top",""+getGameItemPixY(y)+"px");
	}
	if(typeof(w)!=="undefined" && w!==""){
		$(id).css("width",""+getGameItemPixX(w)+"px");
	}
	if(typeof(h)!=="undefined" && h!==""){
		$(id).css("height",""+getGameItemPixY(h)+"px");
	}
	if(typeof(backgroundColor)!=="undefined" && backgroundColor!=""){
		$(id).css("background-color",backgroundColor);
	}
	if(typeof(borderColor)!=="undefined" && borderColor!=""){
		$(id).css("border-color",borderColor);
	}
	if(typeof(backgroundImage)!=="undefined" && backgroundImage!=""){
		$(id).css("background-image",'url("'+backgroundImage+'")');
	}
	if(typeof(display)!=="undefined" && display!=""){
		if(display){
			$(id).css("display","block");
		}
		else{
			$(id).css("display","none");
		}
	}
	if(typeof(zIndex)!=="undefined" && zIndex!==""){
		$(id).css("z-index",zIndex);
	}
	if(typeof(w)!=="undefined" && w!=="" && typeof(h)!=="undefined" && h!==""){
		$(id).css("background-size",""+getGameItemPixX(w)+"px "+getGameItemPixY(h)+"px");
		$(id).css("font-size",""+getGameItemPixX(w)*0.7+"px");
	}
	
	if(typeof(wd)!=="undefined" && wd!==""){
		$("p",id).text(wd);
	}

}

function reset(){
	stageIndex=0;
	initStages();
}
function changeStage(){
	console.log("change stage");
	stageIndex=Number($('select','.cmbstage').val());
	$('select','.cmbstage').blur();
	initStages();
}

function createCmbBox(num){
	var i;
	var str="<select onChange='changeStage()'>";
	for(i=0;i<num;i++){
		str+="<option value='"+i+"'>stage"+(i+1)+"</option>";
	}
	str+="</select>";
	$(".cmbstage").html(str);
}

function initStages(){
	//console.log("initStages");
	if(game.getStageNum()==0){
		game.createStages(stagenum);
		createCmbBox(stagenum);
	}

	$('select','.cmbstage').val(stageIndex);
	
	game.setStageIndex(stageIndex);
	game.initStage();
	var divstr=game.getDivString();
	
//	console.log(divstr);

	$(".game").html(divstr);
//	console.log($(".game").html());
	

	var stage=game.getStage();
	errorcnt=0;
	
	
	stage.setFrameIndex(0);
	stageUpdate(stage);
	var fontsize=cvsw*0.04;
	$("p",".fnt").css("font-size",""+fontsize*2+"px");
	$("p",".footer").css("font-size",""+fontsize+"px");
    $("p",".keystring").css("font-size",""+fontsize+"px");
    $("p",".retrybtn").css("font-size",""+fontsize*1.5+"px");
    $("p",".nextbtn").css("font-size",""+fontsize*1.5+"px");
    $("p",".ttl").css("font-size",""+fontsize+"px");
    $("select",".cmbstage").css("font-size",""+fontsize*0.7+"px");
    $("select",".notebtn").css("font-size",""+fontsize*0.7+"px");
    $(".keystring").css("padding-top",""+fontsize/5+"px");
    $(".keystring").css("padding-bottom",""+fontsize/5+"px");
    $(".keystring").css("top",""+fontsize/2+"px");
    $(".keystring").css("left",""+fontsize+"px");

	$(".ansStr").css("display","block");
	$(".endpanel").css("display","none");
	$(".hlp").css("display","none");
	

}

function stageUpdate(stage){
 
    
	stage.setFrame();
	var items=stage.getItems();

	
	var i;
	for(i=0;i<items.length;i++){
	    var item=items[i];
		setItem(item);
	}
	
	if(stage.isFinish()){
		if(errorcnt==0){
			$("p",".endmsg").text("Excellent!");
		}
		else{
			if(errorcnt<3){
			   $("p",".endmsg").text("Good!");
			}
			else{
				if(errorcnt<7){
					$("p",".endmsg").text("Keep it up.");
				}
				else{
			   		$("p",".endmsg").text("Hang in there.");
			   	}
			}

		}
		$(".endpanel").css("display","block");
	}
	else{
		$(".endpanel").css("display","none");
	}
	showFooter();

}

function showFooter(){
	$("p",".footer").html("stage : "+(stageIndex+1)+"&nbsp;&nbsp;&nbsp;&nbsp;  fail : "+errorcnt);
}

function retryStage(){
	initStages();
}

function nextStage(){
	if(stageIndex+1<game.getStageNum()){
		stageIndex++;
	}
	else{
		stageIndex=0;
	}
	initStages();
}

function showHelp(){
	
	if($(".hlp").css("display")=="block"){
		$(".hlp").css("display","none");
	}
	else{
		$(".hlp").css("display","block");
	}
}


function initBody(){
	if(game==null){
		setTimeout(initBody,1000);
		return;
	}
	//console.log("initBody");
	initAll();
	if(initialize==false){
		reInitialize(false);
	}
}
