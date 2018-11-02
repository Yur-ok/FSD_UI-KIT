$(document).ready(function () {
    $("body").append('<link rel="stylesheet" href="https://code.jquery.com/ui/1.10.4/themes/flick/jquery-ui.css">');
    $(".slider")
        .slider({
            min: 0,
            max: 100,
            step: 25,
        })
        .slider("pips", {
            rest: 'label'
        });

});


/*
var rightSlider = document.getElementById('rightSl');

noUiSlider.create(leftSlider, {
    start: 40,
    step: 1,
    range: {
        'min': 0,
        'max': 100,
    },
    tooltips: true,


});

noUiSlider.create(rightSlider, {
    start: 75,
    step: 25,
    range: {
        'min': 0,
        '25%': 25,
        '50%': 50,
        '75%': 75,
        'max': 100
    },
    snap: true
});
*/

