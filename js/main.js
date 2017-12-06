$(".side-bar a").click(function (){
    console.log("This button is working");

    $(this).toggleClass("open");

    if($(this).hasClass("open")) {

        $(".side-bar").animate({
            
            width: "40%"
            }, 1000, function(){
                $(".side-bar a").text("Close");
                
            
         });

    } else {

        $(".side-bar").animate({
            
            width: "12%"
            }, 1000, function(){
                $(".side-bar a").text("Open");
            
            
         });

    }

    
});