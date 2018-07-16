const $ = require("jquery");

$(document).ready(function(){
    $('.imgCardify').cardifyRe({});

});

(function( $ ){
    $.fn.cardifyRe = function() {
    $('img').wrap('<figure class="cardified"/>');
    $('img').each(function(){
        $(this).after('<figcaption class="title">' + $(this).attr("alt") + '</figcaption>');
    });
};
})($);