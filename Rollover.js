$('div').hover(
    function(){
        $(this).append('<span id="over">over</span>');
        $(this).find('#out').remove();
    },
    function(){
        $(this).append('<span id="out">out</span>');
        $(this).find('#over').remove();
    }
)