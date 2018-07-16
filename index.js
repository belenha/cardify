

$(document).ready(function(){
    $('.imgCardify').cardify({});

});

const cardify = () => {
    $('img').wrap('<figure class="cardified"/>');
    $('img').each(function(){
        $(this).after('<figcaption class="title">' + $(this).attr("alt") + '</figcaption>');
    }
};

