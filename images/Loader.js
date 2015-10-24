// JavaScript Document
var imgArray = [
	"loading.gif",
	"page1_bg.png",
	"message_bg.png",
	"swipe.png",
	"swipe_light.png",
	"hangup.png",
	"mess_footer.png",
	"messImage.png",
	"mix.png",
	"page2_bg.png",
	"page3_bg2.png",
	"page4_bg.png",
	"page5_bg.png",
	"page6_person.png",
	"phonePhoto.png",
	"toAnser.png",
	"Tony.png",
	"boss.png",
	"weixin.png",
	//"voice.mp3",
	//"unlock.mp3",
	//"wordBG2.mp3",
	//"message.mp3",
	//"call.mp3",
	//"dudu.mp3",
	"hangup.png",
	"start.png",
	"huadong01.png",
	"huadong02.png",
	"huadong03.png",
	"huadong04.png",
	"huadong05.png",
	"huadong06.png",
	"huadong07.png",
	"huadong08.png",
	"huadong09.png",
	"huadong10.png",

	"page7-bg.png",
	"page7_gift.png",
	"page7_giftnumber.png",
	"page7_logo.png",
	"page9-check.png",
	"page9-psweye.png",
	"page10_cover.png",
	"newma.png",
	"right.gif",
	"toNext.png",
	"share3.jpg"
];
// 资源加载
var Loader = function(){
	this.currProgress = 0;  // 当前加载进度
	this.isCompleted = false; // 判断是否加载完毕
	this.total = 100;  // 最大值100

	var loaded = 1;

	//var content = document.getElementById('content');
	var number = document.getElementsByClassName('number')[0];
	//var w = document.getElementsByClassName('progress')[0].offsetWidth / 20;
		this.Loading = function(imgArray,success){
		var self = this;
		for( var i = 1 ; i < imgArray.length; i++ ){
			var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
			if( ext == '.png' || ext == '.jpg' || ext == '.jpeg' || ext == '.gif' ){
				var img = new Image();
				img.onload = function(){
					loaded ++;
					//self.currProgress = loaded / imgArray.length * 100;
					//content.style.width = self.currProgress / 100 * w+"rem";
					//number.innerHTML = (self.currProgress).toFixed(1)+"%";
					if( loaded == imgArray.length ){
						success();  // 回调函数
					}
				};
				img.onerror = function(){
					loaded ++;
					if( loaded == imgArray.length ){
						success();  // 回调函数
					}
				};
				img.src = "./images/" + imgArray[i];
			}else{
				this.loadMusic(imgArray[i]);
			}
		}
	};
	this.loadMusic = function(path){
		$.ajax({
			type: 'get',
			url: path,
			data: {},
			async:false,   // false 同步  true  异步
			success: function (data) {
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log("success");
			},
			error: function (xhr, type)  {
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log('error');
			}
		})
	};
	this.success = function(){
		//console.log("加载完毕");
		$('.page').css({width:GC.w,height:GC.h});
		$('.page1 .content').css({width:GC.w,height:GC.h});
		$('.loading').addClass('hidden');
		$('.page1').removeClass('hidden');

		//init.initDate();  // 设置时间
		init.page1Play();  // 播放音乐

		//$('.page5').removeClass('hidden');
		//$('.page5 .message').removeClass('hidden');
		//$('.page5 .messBG').addClass('person').removeClass('hidden');
		//init.nextAnimate();
	};
	this.loadLoading = function(imgArray,obj){
		var img = new Image();
		img.onload = function(){
			obj.Loading(imgArray,obj.success);
		};
		img.onerror = function(){
			obj.Loading(imgArray,obj.success);
		};
		img.src = "./images/" + imgArray[0];
	};
};
//window.onload = function(){
	var loader = new Loader();
	loader.loadLoading(imgArray,loader);
//};