/**
 * Created by Administrator on 2016/8/14 0014.
 */
var $adv_box;
var $adv_imgs;
var $anv_ball;
var adv_boxWidth;
var adv_imgIndex = 0;
var adv_spend = 10;
var adv_imgMach;
$(document).ready(function(){
    $adv_box = $("#headerAdv");
    adv_boxWidth = $adv_box.innerWidth();
    $adv_imgs = $adv_box.find(".advImg");
    adv_imgMach = $adv_imgs.length;
    $anv_ball = $adv_box.find(".smallBall");
    playAdv();
});
function playAdv(){
    var playTimer = setInterval(function(){
        var index = adv_imgIndex + 1;
        if(index >= adv_imgMach)
            index = 0;

        changeAdv(index);
    },5000);
}
function changeAdv(index){
    $($adv_imgs[adv_imgIndex]).addClass("isShowImg");
    var changeTimer = setInterval(function(){
        $($adv_imgs[adv_imgIndex]).css("left",$($adv_imgs[adv_imgIndex]).offset().left - adv_boxWidth/adv_spend + "px");
        $($adv_imgs[index]).css("left",$($adv_imgs[index]).offset().left - adv_boxWidth/adv_spend + "px");
        if($($adv_imgs[adv_imgIndex]).offset().left <= 0 - adv_boxWidth){
            $($adv_imgs[adv_imgIndex]).css("left",adv_boxWidth + "px");
            $($adv_imgs[index]).css("left","0px");
            $($anv_ball[adv_imgIndex]).removeClass("isSelectBall");
            $($anv_ball[index]).addClass("isSelectBall");
            $($adv_imgs[adv_imgIndex]).removeClass("isShowImg");
            $($adv_imgs[index]).addClass("isShowImg");
            adv_imgIndex = index;
            clearInterval(changeTimer);
        }
    },80);
}