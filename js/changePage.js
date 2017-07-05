/**
 * Created by Administrator on 2016/8/13 0013.
 */
//导航切换页面的文件
var navPageId;
window.onload = function(){
    navPageId = "navIndex";
    if(sessionStorage.navPageId)
        navPageId = sessionStorage.navPageId;
    showPage();
    $("#mineContent").attr("src","html/minePage.html");
};
$(document).ready(function(){
    addNavEvent();
});

function addNavEvent(){
    var $navButtons = $(".navButton");
    $navButtons.each(function(){
        var $this = $(this);
        $this.on("touchend",function(){
            var thisId = $this[0].id;
            if(thisId == navPageId)
                return 0;
            else{
                $("#" + navPageId).removeClass("isClecked");
                $("#" + thisId).addClass("isClecked");
                sessionStorage.navPageId = navPageId = thisId;
                showPage()
            }
        });
    })
}
function showPage(){
    $("header").text($("#" + navPageId + " p").text());
    var $mainContent = $("#mainContent");
    var $main = $("#main");
    $mainContent.remove();
    var iframe = document.createElement("iframe");
    iframe.id = "mainContent";
    switch (navPageId.charAt(3)){
        case 'I':iframe.src = "html/indexPage.html";break;
        case 'F':iframe.src = "html/findPage.html";break;
        case 'T':iframe.src = "html/travelPage.html";break;
    }
    $main.append(iframe);
    $(".navButton").each(function(){
        var $this = $(this);
        $this.removeClass("isClecked");
    });
    $("#" + navPageId).addClass("isClecked");
}