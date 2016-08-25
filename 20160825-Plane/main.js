(function () {

    var gun =document.querySelector(".gun");
    
   var box = document.querySelector("#box");
    var planArr = [];
    setInterval(function () {
        var randomNum = Math.floor(Math.random()*5);
        var plane = new Plane(randomNum,randomNum%2);
        planArr.push(plane);
        box.appendChild(plane.htmlNode);
    },1500)

    setInterval(function () {
        for (var i = 0;i<planArr.length;i++) {
            planArr[i].move();
            if (planArr[i].gone) {
                planArr[i].removePlane();
                planArr.splice(i,1);
            }
        }
    },20)


  
    

//控制炮台移动
    function myParseInt(s) {
        var ret = parseInt(s);
        return (isNaN(ret) ? 0 : ret);
    }
    document.onkeydown=function(e){
        e=window.event||e;
        var gun = document.querySelector(".gun");
        switch(e.keyCode){
            case 37: //左键
                if(myParseInt(gun.style.left)>0){
                    gun.style.left =(myParseInt(gun.style.left) - 5) + "px";
                }
                break;
           
            case 39: //右键
                if(myParseInt(gun.style.left)<= 500){
                    gun.style.left =(myParseInt(gun.style.left) + 5) + "px";
                }
                break;


            case 32://空格产生子弹
                var Gun = new ucai.Gun();
                gun.appendChild(Gun.getHtmlNode());



        }
    }




})();