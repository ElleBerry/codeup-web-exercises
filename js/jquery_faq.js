"use strict";
$(document).ready(function() {
    $('#button').click(function(e) {
        $('dd').toggleClass('invisible');
    });

    $('#yellow').click(function() {
        $('ul').each(function(e){
            $(this).children().last().css('background-color', 'yellow');
        })
    });

    $('h3').click(function(e) {
        $(this).next().children().css('font-weight', 'bold');
    });

    $('li').click(function(e) {
        $('ul').parent().children().first().css('color', 'blue');
    });
});

