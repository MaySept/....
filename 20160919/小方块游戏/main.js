(function () {

    var canvas=document.getElementById('myCanvas');
    var pen=canvas.getContext('2d');
    var j1x=0,j1y=0,j1h=0,j1w=60;
    var j2x=0,j2y=0,j2h=0,j2w=0;
    var j3x=0,j3y=0,j3h=0,j3w=0;
    var playx=40,playy=330,fengshu=0;
    var gunzic=0,gunzix=60,gunziy=350;
    /*空格键按下*/
    window.addEventListener('keydown', doKeyDown, true);
    /*空格键弹起*/
    window.addEventListener('keyup', doKeyUp, true);
    /*按下空格时棍子伸长*/
    function doKeyDown(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 13 ) {
            start();
        }
        pen.strokeStyle='black';
        pen.fillStyle='black';
        pen.lineWidth=3;
        pen.lineTo(gunzix,gunziy);
        pen.stroke();
        pen.moveTo(playx+20,playy+20);
        gunziy=gunziy-5;
        gunzic=350-gunziy;
    }
    /*空格弹起 棍子倒下*/
    function doKeyUp(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 32 ) {
            gunziy=350;
            pen.beginPath();
            pen.fillStyle='black';
            pen.strokeStyle='black';
            pen.lineWidth=3;
            pen.moveTo(playx+20,playy+20);
            pen.lineTo(playx+20+gunzic,gunziy);
            pen.stroke();
            pen.beginPath();
            pen.fillStyle='#ABCDEF';
            pen.strokeStyle='#ABCDEF';
            pen.lineWidth=4;
            pen.moveTo(playx+20,playy+20);
            pen.lineTo(playx+20,350-gunzic);
            pen.stroke();
            movePlayer();
        }
    }

    /*初始化的游戏画面*/
    function start(){
        j1x=0,j1y=0,j1h=0,j1w=60;
        j2x=0,j2y=0,j2h=0,j2w=0;
        j3x=0,j3y=0,j3h=0,j3w=0;
        playx=40,playy=330,fengshu=0;
        gunzic=0,gunzix=60,gunziy=350;

        pen.fillStyle='#ABCDEF';
        pen.fillRect(0,0,300,500);
        /*第一块*/
        pen.fillStyle='#000000';
        pen.fillRect(j1x,350,j1w,150);
        /*第二块*/
        j2x=Math.floor(Math.random()*160+20)+j1x+j1w;
        j2w=Math.floor(Math.random()*50+20);
        pen.fillRect(j2x,350,j2w,150);
        /*第三块*/
        j3x=Math.floor(Math.random()*160+20)+j2x+j2w;
        j3w=Math.floor(Math.random()*50+20);
        pen.fillRect(j3x,350,j3w,150);
        /*红色方块*/
        pen.fillStyle='red';
        pen.fillRect(playx,playy,20,20);
        changeScore();
    }
    /*移动红色方块*/
    function movePlayer(){
        pen.beginPath();
        pen.fillStyle='#ABCDEF';
        pen.strokeStyle='#ABCDEF';
        pen.fillRect(playx,playy,20,20);
        pen.stroke();

        pen.beginPath();
        pen.fillStyle='red';
        pen.strokeStyle='red';
        playx=playx+5;/*横坐标自加5的移动*/
        pen.fillRect(playx,playy,20,20);
        pen.stroke();

        if(playx<=(gunzic+j1w-20)){
            setTimeout(movePlayer,30);/*每30毫秒执行一次*/
        }
        else{
            if((j1w+gunzic)>j2x && j1w+gunzic<(j2x+j2w)){
                pen.beginPath();
                pen.fillStyle='#ABCDEF';
                pen.strokeStyle='#ABCDEF';
                pen.fillRect(playx,playy,20,20);
                pen.stroke();
                pen.beginPath();
                pen.fillStyle='red';
                pen.strokeStyle='red';
                playx=j2x+j2w-20;
                pen.fillRect(playx,playy,20,20);
                pen.stroke();
                moveAll();
                fengshu++;
            }
            else{
                setTimeout(game0ver,200);
            }
        }
    }
    function moveAll(){
        pen.fillStyle='#ABCDEF';
        pen.fillRect(0,0,300,500);
        pen.fillStyle='black';
        j1x--;
        j2x--;
        j3x--;
        playx--;
        pen.fillRect(j1x,350,j1w,150);
        pen.fillRect(j2x,350,j2w,150);
        pen.fillRect(j3x,350,j3w,150);
        pen.fillStyle='red';
        pen.fillRect(playx,playy,20,20);
        changeScore();
        if(j2x!=0){
            setTimeout(moveAll,3);
        }
        else{
            rectchange();
        }
    }
    function game0ver(){
        pen.fillStyle='#6495ED';
        pen.fillRect(0,0,300,500);
        pen.fillStyle='white';
        pen.font = "40px 宋体";
        pen.fillText("Point:"+fengshu,80,250);
        pen.fillStyle='red';
        pen.font = "30px 宋体";
        pen.fillText("GAME OVER",80,140);
        pen.font = "25px 宋体";
        pen.fillText("press Enter to play",30,350);
        window.removeEventListener('keydown', doKeyDown, true);
        window.removeEventListener('keyup', doKeyUp, true);

    }
    function rectchange(){
        j1x=j2x;
        j1w=j2w;
        j2x=j3x;
        j2w=j3w;
        j3x=Math.floor(Math.random()*160+20)+j2x+j2w;
        j3w=Math.floor(Math.random()*50+20);
        gunzix=j1w;
    }
    function changeScore(){
        pen.fillStyle='white';
        pen.font = "40pt 宋体";
        pen.fillText(fengshu,140,40);
    }

    start();
})();