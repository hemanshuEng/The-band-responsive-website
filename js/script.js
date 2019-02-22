$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $('.link-item').css("display", "none");
        }

        if ($(window).width() > 768) {
            $('.link-item').css("display", "inline-block");
        }


    });
    $('.link-item a').click(function () {
        if ($(window).width() <= 768) {
            $('.link-item').toggle();
        }
    });
    $('#home-icon').click(function () {
        if ($(window).width() <= 768) {
            $('.link-item').toggle();
        }
        console.log('buttonclicked')
    });
    if ($(window).width() <= 768) {
        $('.link-item').css("display", "none");
    }
    //

    if ($(window).width() > 768) {
        $('.link-item').css("display", "inline-block");
    }

    var galleryimg=$('.image-slide').find('img').first();
    var images = [
      'img/keagan-henman-408265-unsplash.jpg',
      'img/matthew-kalapuch-304316-unsplash.jpg',
       'img/pexels-photo-92080.jpeg'
    ];
    var i =0;
    setInterval(()=>{
    i= (i+1)%images.length;
    galleryimg.fadeOut(function () {
        $(this).attr('src',images[i]).fadeIn();
      });
    },5000);

});