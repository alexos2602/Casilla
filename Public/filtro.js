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

function valideKey(evt) {
    var code = evt.which ? evt.which : evt.keyCode;
    
    if (code >= 48 && code <= 53) {
        return true;
    } else {
        
        return false;
    }

    } 

/*----------------------Preloader----------------------*/
window.onload = function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
};
/*------------------------------------------------------*/



