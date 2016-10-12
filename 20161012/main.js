(function () {
    var myCanvas = document.querySelector("canvas");
    var btn = document.querySelector("#btn");
     var context= myCanvas.getContext("2d");
     var play=false;
     context.beginPath();
     myCanvas.addEventListener("mousedown",function () {
     play=true;
     var X = event.pageX-this.offsetLeft;
     var Y = event.pageY-this.offsetTop;
     context.moveTo(X,Y);
     });
     myCanvas.addEventListener("mousemove",function () {
     var X1 = event.pageX-this.offsetLeft;
     var Y1 = event.pageY-this.offsetTop;
     if(play){
     context.lineTo(X1,Y1);
     context.strokeStyle="red";
     context.stroke()
     }

     });
     myCanvas.addEventListener("mouseup",function () {
     play=false
     });

    btn.onclick=function () {
        var image=new Image();
        var imgAsDataURL =  myCanvas.toDataURL("image/png");
        localStorage.setItem("img",imgAsDataURL);
        console.log(1)
    };

    window.onload=function () {
        var canvas=document.querySelector("#myCanvas");
        var context=canvas.getContext("2d");
        var pic=new Image();
        pic.src=localStorage.getItem('img');
        context.drawImage(pic,0,0);

    };



})();
