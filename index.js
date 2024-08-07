$(document).ready(function() {
    $('.drum-pad').on('click', function() {
        var audio = $(this).children('audio')[0];
        audio.play();
        $('#display').text($(this).attr('id'));
    });

    $(document).on('keydown', function(e) {
        var key = e.key.toUpperCase();
        var drumPad = $('#' + key).parent();
        if (drumPad.length) {
            drumPad.click();
        }
    });
});
