$(function(){

    $(".pul").slideUp("fast");
    $(".pul:eq(0)").slideDown("fast");

    $(".ulp").click(function(){

        $(".pul").slideUp("normal");
        $(this).next().slideDown("normal");

    });
});