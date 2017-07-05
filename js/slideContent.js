/**
 * Created by Administrator on 2016/8/12 0012.
 */
var contentObj;
$(document).ready(function(){
    var $content = $("#content");
    addEvent($content);
});

//主要是相当于SlideObj的一个实例化一个类
function Content(obj){
    this.obj.slideToRight = function(){
        moving(obj.changeX - 20);
    };
    this.obj.slideToLeft = function(){
        moving(obj.changeX + 20);
    };
    this.obj.slideEnd = function(){
        autoMove();
    };
    var $content = $("#content");
    var $mine = $("#mine");
    var $mine_width = $mine.width();

    function moving(changeX){
        var $content_left = $content.offset().left;
        if($content_left >= 0 && $content_left < $mine_width && changeX > 0)
            $content.css("left",changeX + "px");
        if($content_left > 0 && $content_left <= $mine_width && changeX < 0)
            $content.css("left",($content_left + changeX / 10) + "px");
        if($content_left < 0)
            $content.css("left", "0px");
        if($content_left > $mine_width)
            $content.css("left",$mine_width + "px");
    }
    function autoMove(){
        var $content_left = $content.offset().left;
        if($content_left < $mine_width / 2)
            obj.autoClose($content_left,true);
        else
            obj.autoOpen($content_left,true)
    }
    this.obj.autoClose = function($content_left,isAnmi){
        if(isAnmi){
            var timer = setInterval(function(){
                $content_left -= $mine_width / 10;
                if($content_left <= 0){
                    $content_left = 0;
                    $content.css("left", "0px");
                    clearInterval(timer);
                }
                $content.css("left", $content_left + "px");
            },20);
        }
        else
            $content.css("left", "0px");

    };
    this.obj.autoOpen = function($content_left,isAnmi){
        if(isAnmi){
            var timer = setInterval(function(){
                $content_left += $mine_width / 10;
                if($content_left >= $mine_width){
                    $content_left = $mine_width;
                    $content.css("left", $content_left + "px");
                    clearInterval(timer);
                }
                $content.css("left", $content_left + "px");
            },20);
        }
        else
            $content.css("left", $content_left + "px");
    }
}

//实例化类的对象
function addEvent(obj){
    Content.prototype = new SlideObj(obj);
    contentObj = new Content(obj);
}