(function () {

    var myCanvas = document.querySelector("#myCanvas");
    var pen = myCanvas.getContext("2d");
    var index = 0;
    var score = 0;
    pen.fillText("SCORE: "+score,150,50);
    function blackBox(startX,endX) {
        pen.beginPath();
        pen.lineWidth=30;
        pen.moveTo(startX,400);
        pen.lineTo(endX,500);
        pen.stroke();
        pen.closePath();
    }
    blackBox(50,50);
    blackBox(150,150);
    function brdige() {
        document.onkeydown=function (event) {
            if (event.keyCode==32){
                index += 15;
                pen.beginPath();
                pen.lineWidth=3;
                pen.moveTo(65,400);
                pen.lineTo(65,400-index);
                pen.stroke();
                pen.closePath();
            }

        };

    }
    function rotateBridge() {
        document.onkeyup = function () {
            if (event.keyCode == 32) {
            pen.clearRect(60, 400 - index, 10, index);
            pen.beginPath();
            pen.lineWidth = 3;
            pen.moveTo(65, 400);
            pen.lineTo(65 + index, 400);
            pen.stroke();
            pen.closePath();
            var i = 0;
            var id = setInterval(function () {
                pen.beginPath();
                pen.rect(40 + i, 400, 15, -15);
                pen.clearRect(40, 400, i, -15);
                pen.fillStyle = "red";
                pen.fill();
                pen.closePath();
                if (i > index + 18) {
                    clearInterval(id);
                      if(index<70||index>100){
            	alert("GAME OVER")
            }else{
            	score++;
            	pen.clearRect(0,0,300,100)
             pen.fillText("score: "+score,150,50);
            }
                }
                i += 3;
            }, 50)
          
        }
    }
    }
   function red() {
        pen.beginPath();
        pen.rect(40,400,15,-15);
        pen.fillStyle="red";
        pen.fill();
        pen.closePath();
    }


    brdige();
    rotateBridge();
    red();


})();




