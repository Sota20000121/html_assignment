//main画像
window.onload = function() {
    const fade = document.getElementsByClassName('img_move');
fade[0].classList.add('show');
document.querySelector('main').classList.add('show');
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

//ハンバーガー
(function($){
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $(`#mask`);
    var open = 'open';

    $btn.on('click',function(){
        if( ! $nav.hasClass(open)){
            $nav.addClass(open);
        }else{
            $nav.removeClass(open);
        }
    });

    $mask.on(`click`,function(){
        $nav.removeClass(open);
    });
})(jQuery);

//メインのフェードイン
const target = document.querySelectorAll('.fade-slide');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 0.1
});

target.forEach(target => {
    observer.observe(target);
});