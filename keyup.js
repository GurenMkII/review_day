var field = document.querySelector('#inpt');

field.addEventListener('keyup',function(event){
    if (event.keyCode === 13){
        alert($('input').val())
        $('body').append('<div>'+$('input').val()+'</div>');
        $('input').val('');
    };
})