$('body *').each(function(){
    var rTop = Math.floor(Math.random()*500)+'px';
    var rLeft = Math.floor(Math.random()*500)+'px';
    console.log(rTop);
    console.log(rLeft);

    // for (i=0;i<$('body').length;i++){
        $(this).css({
            position:'absolute',
            top: rTop,
            left: rLeft
        })
        console.log($(this));
    // }

})