$(function () {
    let brojPogodaka = 0;

    $('.kvadrat').draggable({
        revert: 'invalid',
        cursor: 'grabbing'
    });

    function postaviSpremnik(boja) {
        $('#spremnik-' + boja).droppable({
            accept: '#kvadrat-' + boja,

            over: function () {
                $(this).css('background-color', '#e2efda');
            },

            out: function () {
                if (!$(this).hasClass('popunjen')) {
                    $(this).css('background-color', 'white');
                }
            },

            drop: function (event, ui) {
                const kvadrat = ui.draggable;

                $(this).append(kvadrat);
                kvadrat.css({
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    margin: 0
                });
                kvadrat.draggable('disable');

                $(this).addClass('popunjen');
                $(this).css('background-color', '#e2efda');
                $(this).droppable('disable');

                brojPogodaka++;
                if (brojPogodaka === 2) {
                    $('#poruka').text('Bravo!');
                }
            }
        });
    }

    postaviSpremnik('crni');
    postaviSpremnik('crveni');

    $('#reset').on('click', function () {
        location.reload();
    });
});
