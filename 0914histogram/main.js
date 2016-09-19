/**
 * Created by Administrator on 2016/9/14 0014.
 */
(function () {
    var myCanvas=document.querySelector("#myCanvas");
    var context=myCanvas.getContext("2d");    
    function shu() {
        for(var i=0;i<2;i++){
            context.beginPath();
            context.moveTo(i*700+50,10);
            context.lineTo(i*700+50,230);
            context.stroke();            
        }      
    }
    function font(content,x,y) {
        context.beginPath();
        context.fillStyle="#000";
        context.fillText(content,x,y);
        context.closePath();
    }
    function heng() {
        for(var i=0;i<12;i++){
            context.beginPath();
            context.moveTo(50,i*20+10);
            context.lineTo(750,i*20+10);
            context.stroke();
            font(i*20,30,230-i*20);
        }

    }
    function rect() {
        var arr=[60,90,150,130,170,190,125,175,155,165,155,145];
        for(var i=0;i<arr.length;i++){
            context.beginPath();
            context.lineWidth=20;
            context.moveTo(i*60+70,230-arr[i]);
            context.lineTo(i*60+70,230);
            context.strokeStyle="#00ff00";
            context.stroke();
            font(i+1+"月",i*60+58,245);
            font(arr[i],i*60+65,225-arr[i]);
        }
    }
    function zhe() {
        context.beginPath();
        context.moveTo(80,170);
        var arr=[60,90,150,130,170,190,125,175,155,165,155,145];
        for(var i=1;i<arr.length;i++){
            context.lineWidth=2;
            context.lineTo(i*60+65,230-arr[i]);
            context.strokeStyle="#000";
            context.stroke();
        }
    }

    shu();
    heng();
     rect();
    zhe();
})();