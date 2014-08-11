$(function(){

    $(".pul").slideUp("fast");
    $(".pul:eq(3)").slideDown("fast");
    $(".ulp:eq(3)").children().removeClass('glyphicon-plus').addClass('glyphicon-minus');

    $(".ulp").click(function(){
        $(".pul").slideUp("normal");
        $(".ulp").children().removeClass('glyphicon-minus').addClass('glyphicon-plus');
        $(this).next().slideDown("normal");
        $(this).children().removeClass('glyphicon-plus').addClass('glyphicon-minus');
    });
});