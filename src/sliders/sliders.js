$(document).ready(function () {
    // DOM Ready
    var el, newPoint, newPlace, offset;

// Select all range inputs, watch for change
    $("input[type='range']").change(function () {

        // Cache this for efficiency
        el = $(this);

        // Measure width of range input
        width = el.width();

        // Figure out placement percentage between left and right of input
        newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

        offset = -1;

        // Prevent bubble from going beyond left or right (unsupported browsers)
        if (newPoint < 0) {
            newPlace = 0;
        }
        else if (newPoint > 1) {
            newPlace = width;
        }
        else {
            newPlace = width * newPoint + offset;
            offset -= newPoint;
        }

        // Move bubble
        el
            .next("output")
            .css({
                left: newPlace,
                marginLeft: offset + "%"
            })
            .text(el.val());
    })
    // Fake a change to position bubble at page load
        .trigger('change');
});


/*
var leftSlider = document.getElementById('leftSl');
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

