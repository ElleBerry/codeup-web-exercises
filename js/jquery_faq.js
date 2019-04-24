"use strict";
$(document).ready(function() {
    $('#button').click(function(e) {
        $('dd').toggleClass('invisible');
    });
});


$('li').last().css('background-color', '#FF0');
