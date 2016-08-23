window.ucai = window.ucai || {};
(function () {
    function Moveball() {
        this.ball = document.createElement("div");
        this.ball.style.width = "30px";
        this.ball.style.height = "30px";
        this.ball.style.backgroundColor = "black";
        this.ball.style.borderRadius = "50%";
        this.ball.style.position = "fixed";

        this.X =  Math.floor(Math.random()*1100);
        this.Y =  Math.floor(Math.random()*550);
        this.ball.style.left = this.X + "px";
        this.ball.style.top = this.Y+ "px";

        var  pro = Moveball.prototype;
        pro.move = function () {
            var X = parseInt(this.ball.style.left);
            var Y = parseInt(this.ball.style.top);
            while(true){
                var speedX = 10 - Math.floor(Math.random()*21);
                var speedY = 10 - Math.floor(Math.random()*21);
                if(!(speedX==0&&speedY==0))break;
            }

            var id= setInterval(function () {
                X += speedX;
                Y +=  speedY;
                this.ball.style.left = X + "px";
                this.ball.style.top = Y + "px";

                if((X<-30||X>1200)||(Y<-30||Y>600)){
                    clearInterval(id);
                    this.ball.parentNode.removeChild(this.ball);
                }
            }.bind(this),20)

        }
    }

    Moveball.prototype.getHtmlNode = function () {
        this.move();
        return this.ball;

    }


    ucai.Moveball = Moveball;
})();
