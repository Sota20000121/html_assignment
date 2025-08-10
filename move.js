window.onload = function() {
    const fade = document.getElementsByClassName('img_move');
fade[0].classList.add('show');
}

$(window).scroll(function(){
    $(".anime_wrap").each(function(){
        var offset =$(this).offset().top;
        var scroll =$(window).scrollTop();
        var wHeight =$(window).height();

        if (scroll>offset-wHeight+wHeight/2){
            $(this).addClass("show");
        }
    });
});


