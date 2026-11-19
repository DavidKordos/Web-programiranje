
function izvrsiPrimjere() {
    console.log('Verzija jQueryja:', $.fn.jquery);
    console.log('Tekst naslova:', $('h1').text());
    $('#odlomak').text('Tekst je promijenjen pomoću jQueryja.');
    $('#odlomak').css('background-color','yellow');
    $('#slika').attr('src','druga_slika.svg');
}
