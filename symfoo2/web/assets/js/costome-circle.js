;(function($) {
    "use strict";
    
    $('.circle1').circleProgress({
        value: .8,
        size: 80,
        startAngle: -1.5,
        fill: {gradient: ['#ff1e41', '#ff5f43']}
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
    });
    
    $('.circle2').circleProgress({
        value: .15,
        size: 80,
        startAngle: -1.5,
        fill: {gradient: ['#2e3c43', '#2e3c43']}
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(15 * progress) + '<i>%</i>');
    });
    

})(jQuery)