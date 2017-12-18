var backgrounds = [
    "images/tech.jpg",
    "images/best-tech-sites.jpg",
    "images/healthtech.jpg",
    "images/high-tech-wallpaper.jpg"
];

$(".side-bar > a").siblings().hide();
$(".side-bar > a").click(function (){

    $(this).siblings().toggle();
    console.log("This button is working");

    $(this).toggleClass("open");

    $(".back1").css("background-image", "url(" + backgrounds[0] +  ")");
    $(".back2").css("background-image", "url(" + backgrounds[1] +  ")");
    $(".back3").css("background-image", "url(" + backgrounds[2] +  ")");
    $(".back4").css("background-image", "url(" + backgrounds[3] +  ")");

    if($(this).hasClass("open")) {

        $(".side-bar").animate({

            width: "40%"
            }, 1000, function(){
                $(".side-bar > a").text("Close");   
         });

    } else {

        $(".side-bar").animate({
            
            width: "12%"
            }, 1000, function(){
                $(".side-bar > a").text("Open");   
         });
    }   
});

$(".newBackgrounds > div").click(function() {
    $(this).toggleClass("addBorder");

    $(this).siblings().removeClass("addBorder");
});



$("#updateButton").click(function() {
    
    var newIntroText = $("#introText").val();
    var newIntroTextColor = $("#introTextColor").val();

    var newJobTitle = $("#jobTitle").val();
    var newJobTitleColor = $("#jobTitleColor").val();

    $(".hero-container > p").text(newIntroText);
    $(".hero-container > p").css("color", newIntroTextColor);

    $(".hero-container > h1").text(newJobTitle);
    $(".hero-container > h1").css("color", newJobTitleColor);

    if( $(".back1").hasClass("addBorder") ) {
        $("header").css("background-image", "url(" + backgrounds[0] + ")");

    } else if ($(".back2").hasClass("addBorder") ){
        $("header").css("background-image", "url(" + backgrounds[1] + ")");

    } else if ($(".back3").hasClass("addBorder") ){
        $("header").css("background-image", "url(" + backgrounds[2] + ")");

    } else {
        $("header").css("background-image", "url(" + backgrounds[3] + ")");
    }
});