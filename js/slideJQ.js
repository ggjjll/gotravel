/**
 * Created by Administrator on 2016/8/12 0012.
 */
//第一次搞面向对象的，想用一个类似接口的东西下次可以直接用
function SlideObj(obj){
    this.obj = obj;
    this.obj.on("touchstart",onTouchStart);
    this.obj.on("touchmove",onTouchMove);
    this.obj.on("touchend",onTouchEnd);
    this.obj.slideToUp = function(){};
    this.obj.slideToDown = function(){};
    this.obj.slideToLeft = function(){};
    this.obj.slideToRight = function(){};
    this.obj.slideEnd = function(){};
    this.obj.changeX = 0;
    this.obj.changeY = 0;
    var startX;
    var startY;
    var endX;
    var endY;
    var dir;
    function onTouchStart(e){
        e.preventDefault();
        dir = 'N';
        var touchP = e.originalEvent.targetTouches[0];
        startX = touchP.clientX;
        startY = touchP.clientY;
    }
    function onTouchMove(e){
        e.preventDefault();
        var touchP = e.originalEvent.targetTouches[0];
        endX = touchP.clientX;
        endY = touchP.clientY;
        getChangeXY();
        if (dir == 'N'){
            dir = getDir();
        }
        switch (dir){
            case 'U':obj.slideToUp();break;
            case 'D':obj.slideToDown();break;
            case 'L':obj.slideToLeft();break;
            case 'R':obj.slideToRight();break;
        }
    }
    function onTouchEnd(e){
        e.preventDefault();
        dir = 'N';
        obj.changeX = 0;
        obj.changeY = 0;
        obj.slideEnd();
    }
    function getChangeXY(){
        obj.changeX = parseInt(endX - startX);
        obj.changeY = parseInt(endY - startY);
    }
    function getDir(){
        if(Math.abs(obj.changeX) > Math.abs(obj.changeY)){
            //以水平为主
            if(obj.changeX > 20)
                return 'R';
            else if(obj.changeX < -20)
                return 'L';
            else
                return 'N';
        }else if(Math.abs(obj.changeX) < Math.abs(obj.changeY)){
            //以垂直为主
            if(obj.changeY > 20)
                return 'D';
            else if(obj.changeY < -20)
                return 'U';
            else
                return 'N';
        }else{
            return 'N';
        }
    }
}
