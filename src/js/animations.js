$(document).ready(function() {
    const zytkowskiPhotoBox = $('#zytkowskiPhotoBox');
    const kowalskiPhotoBox = $('#kowalskiPhotoBox');
    const jaworskiPhotoBox = $('#jaworskiPhotoBox');

    zytkowskiPhotoBox.hide();
    kowalskiPhotoBox.hide();
    jaworskiPhotoBox.hide();

    const zytkowskiPhotoBoxLink = $('#zytkowskiPhotoBoxLink');
    zytkowskiPhotoBoxLink.on("click", function(event) {
        event.preventDefault();
        if (zytkowskiPhotoBox.is(':hidden')) {
            zytkowskiPhotoBox.show();
        } else {
            zytkowskiPhotoBox.hide();
        }
    });

    const kowalskiPhotoBoxLink = $('#kowalskiPhotoBoxLink');
    kowalskiPhotoBoxLink.on("click", function(event) {
        event.preventDefault();
        if (kowalskiPhotoBox.is(':hidden')) {
            kowalskiPhotoBox.show();
        } else {
            kowalskiPhotoBox.hide();
        }
    });
    const jaworskiPhotoBoxLink = $('#jaworskiPhotoBoxLink');
    jaworskiPhotoBoxLink.on("click", function(event) {
        event.preventDefault();
        if (jaworskiPhotoBox.is(':hidden')) {
            jaworskiPhotoBox.show();
        } else {
            jaworskiPhotoBox.hide();
        }
    });
});
