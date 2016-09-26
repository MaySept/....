(function () {
  var music = document.querySelector(".music");
  var btn = document.querySelectorAll(".music_btn");
    var lightOff=document.querySelector(".lightOff");
    var lightBg=document.querySelector(".lightBg");
    var index = 0;
    lightOff.onclick=function () {
        this.src="images/lightOn.png"
        lightBg.src="images/lightOnBg.jpg"
        
    };



    for(var i=0;i<=btn.length;i++){
        (function (i) {
            btn[i].onclick=function () {
                index++;
                if((index%2)==1){
                    music.pause();
                    btn[i].style.background = "url(images/musicBtnOff.png)";
                }else if((index%2)==0){
                    music.play();
                    btn[i].style.background ="url(images/musicBtn.png)";
                }
                console.log(index);
            }
        })(i);
    }


})();
