$(function () {
    const slike = $('.slike img');
    let slikeSkrivene = false;

    $('#zelena').on('click', function () {
        $('ul').first().addClass('zelena');
    });

    slike.on('mouseenter', function () {
        $(this).addClass('okvir');
    });

    slike.on('mouseleave', function () {
        $(this).removeClass('okvir');
    });

    slike.on('click', function () {
        $(this).stop(true, true).hide();
    });

    $('#abrakadabra').on('click', function () {
        slike.stop(true, true);

        if (!slikeSkrivene) {
            slike.eq(0).fadeOut('fast');
            slike.eq(1).fadeOut('slow');
            slike.eq(2).fadeOut(5000);
            slikeSkrivene = true;
        } else {
            slike.show();
            slikeSkrivene = false;
        }
    });
});
