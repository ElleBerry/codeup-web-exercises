// alert($('#main-header').html());
//
// jQuery("li").css("font-sze", "20px").css("background-color", "yellow");
// $("p").css("background-color", "pink");
// $("h1").css("background-color", "blue");
//
// var contents = $.html('h1');
// console.log(contents);
//
// $("p, h1, li").css("background-color", "pink");

$('h1').click(function() {
    $(this).css("background-color", "skyblue");
});

$('p').dblclick(function(e){
    $('p').css('font-size', '18px');
})

$('li').hover(
    function(){
        $('li').css('color', 'red');
    },
    function(){
        $('li').css('color', 'black');
    }
    );
