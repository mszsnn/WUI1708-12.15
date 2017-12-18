$(function () {
    myScroll = new IScroll('#wrapper',
        {
            scrollX: true, scrollY: false
        })
    var swiper = new Swiper('.swiper-container',{autoplay:true}, {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
    });
})

