window.ucai = window.ucai || {};

//子弹的类
(function () {
    function Gun() {
        this._htmlNode = document.createElement("div");
        this._htmlNode.style.width = "10px";
        this._htmlNode.style.height = "10px";
        this._htmlNode.style.borderRadius = "50%";
        this._htmlNode.style.backgroundColor = "red";
        this._htmlNode.style.position = "absolute";
        this._htmlNode.style.left = "17px";
        
        
        var pro = Gun.prototype;
        pro.local = function () {
          var Y = 50;
            var id= setInterval(function () {
                Y += 5
                this._htmlNode.style.bottom = Y + "px";
               if((parseInt(this._htmlNode.style.bottom)>380)){
                    clearInterval(id);
                    this._htmlNode.parentNode.removeChild(this._htmlNode);
                }
            }.bind(this),20)
        };
    }

 




    //获得节点
    Gun.prototype.getHtmlNode = function () {
        this.local();
        return this._htmlNode;
    }
    
 
    
    ucai.Gun = Gun;
 
})();
