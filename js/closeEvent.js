/**
 * Created by Administrator on 2016/8/15 0015.
 */
$(function(){
    $("#closeButton").on("touchend",finish);
});
function finish(){
    history.go(-1);
}