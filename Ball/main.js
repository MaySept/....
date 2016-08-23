(function () {
    var box = document.querySelector("#box");
    for(var i = 0;i<30;i++){
        var MoveBall = new ucai.Moveball();
        box.appendChild(MoveBall.getHtmlNode());
      
    }


    
})();
