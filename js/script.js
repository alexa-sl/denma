/*====================== слайдер ======================*/
$(function(){
    if ($.fn.bjqs) {
        $('#slider').bjqs({
            'height': 365,
            'width': 670,
            'display': 'inline-block',
            'position': 'relative',
            'responsive': false,
            'automatic': true,
            'nexttext' : '', // Text for 'next' button (can use HTML)
            'prevtext' : '', // Text for 'previous' button (can use HTML)
            'animtype': 'slide'
        });
    }
});