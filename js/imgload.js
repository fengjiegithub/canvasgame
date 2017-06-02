function imageLoad(imgObjss){
	this.imgObjs=imgObjss;
	this.urlArr=[];
}
imageLoad.prototype={
	geturl:function(){
		for(var i=0;i<this.imgObjs.length;i++){
			this.urlArr.push(this.imgObjs[i].src);
		}
	},
	load:function(url,callback){
		var imgObj=new Image();
		imgObj.src=url;
		imgObj.onload=function(){
			if(callback){
				callback();
			}
		}
	},
	loadAll:function(callback){
		this.geturl();
		var that=this;
		var num=1;
		for(var i=0;i<this.urlArr.length;i++){
			(function(index){
				that.load(that.urlArr[index],function(){
					that.load(that.urlArr[index]);
					num++;
					if(num==that.urlArr.length){
						callback();
					}
				})
			})(i)
		}
	}
}
