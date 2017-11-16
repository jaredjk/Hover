$(document).ready(function () {

    $("img").hover(function () {
        $(this).attr("src", "dojocat.jpg");
        }, function (){
            $(this).attr("src","kantana.jpg");
        });
    });
 

    // $(".samurai").hover(function () {
    //     $(".samurai").attr("src", "dojocat.jpg");
    //     }, function (){
    //         $( ".samurai" ).attr("src","kantana.jpg");
    //     });
    // });
 
