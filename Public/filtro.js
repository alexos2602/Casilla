$(document).ready(function(){

    $('span').hide();
    $('.alert').hide();

$('.btn').click(function () {
    let valorx = $('.valorx').val();
    let valory = $('.valory').val();
    let valor = valorx+valory;
    
    $('span').filter('.' + valor).show();
    $('span').not('.' + valor).hide();
    
    if (valor == '43') {
        $('.alert').show('1000');
        $('.pt-1').hide('1000');
    }

    $(".valorx").val("");
    $(".valory").val("");
    });


});

/*----------------------Preloader----------------------*/
window.onload = function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
};
/*------------------------------------------------------*/



