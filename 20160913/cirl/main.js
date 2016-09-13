(function () {

    var myCanvas = document.querySelector("canvas");
    var ctx= myCanvas.getContext("2d");

    CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
// 初始保存
        this.save();
// 位移到目标点
        this.translate(x, y);
        this.beginPath();
// 画出圆弧
        this.arc(0,0,radius,sDeg, eDeg);
// 再次保存以备旋转
        this.save();
// 旋转至起始角度
        this.rotate(eDeg);
// 移动到终点，准备连接终点与圆心
        this.moveTo(radius,0);
// 连接到圆心
        this.lineTo(0,0);
// 还原
        this.restore();
// 旋转至起点角度
        this.rotate(sDeg);
// 从圆心连接到起点
        this.lineTo(radius,0);
        this.closePath();
// 还原到最初保存的状态
        this.restore();
        return this;
    };

    var deg = Math.PI/180;
    ctx.sector(250,250,200,30*deg,111*deg).fill();
    ctx.fillStyle="red";
    ctx.sector(250,250,200,111*deg,190*deg).fill();
    ctx.fillStyle="#0f0";
    ctx.sector(250,250,200,190*deg,233*deg).fill();
    ctx.fillStyle="#00f";
    ctx.sector(250,250,200,233*deg,345*deg).fill();
    ctx.fillStyle="#abcdef";
    ctx.sector(250,250,200,345*deg,30*deg).fill();

    var i=0;
    var deg = Math.PI/180;
    myCanvas.onclick=function () {
        var id=setInterval(function () {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle="grey";
                ctx.sector(250,250,200,0,i*deg).fill();
                ctx.closePath();
                ctx.restore();
                i +=1;
            if(i>60){
                clearInterval(id);
                i=60;
                setInterval(function () {
                    ctx.save();
                    ctx.beginPath();
                    ctx.fillStyle="red";
                    ctx.sector(250,250,200,60,i*deg).fill();
                    ctx.closePath();
                    ctx.restore();
                    i +=1;
                    
                },50)
            }
        },50);
        
    }
})();
