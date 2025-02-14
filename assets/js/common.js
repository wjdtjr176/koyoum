











$('#header .btn-menu').click(function(){
    if ($('.pop-list').hasClass('on')) {
        $('.pop-list').removeClass('on');
        $('#header').removeClass('on');
    } else {
        $('.pop-list').addClass('on');
        $('#header').addClass('on');
    }    
})








