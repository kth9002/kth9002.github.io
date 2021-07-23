$(function(){
    $(".main_slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
    
    
    $(".main_slider figure").eq(1).addClass("on")
    $(".main_slider").on("afterChange", function(e,s,c){
        $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
    });



$("#content05 .xi-pause").on("click", function(){
    $(".movie01").trigger("pause");
});
$("#content05 .xi-play").on("click", function(){
    $(".movie01").trigger("play");
});










});