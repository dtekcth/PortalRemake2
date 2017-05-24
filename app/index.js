/* jshint browser: true, node: false */

'use strict';

import _ from 'lodash';

import jQuery from 'jquery';

var $ = jQuery;

require('bootstrap');

var maxHeight = 0;

/*$($('.menu2 div').first().children('*:nth-child(2)')).css('position', 'relative');
$($('.menu2 div').first().children('*:nth-child(2)')).mouseenter(function() {
    console.log('Damn!');
    $(this).css('top', '' + getRandomInt(-100, 100) + 'px');
    $(this).css('left', '' + getRandomInt(-100, 100) + 'px');
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}*/

/*
$('.menu2').children().children().each(function(id, el) {
    if($(el).outerHeight() > maxHeight) {
        maxHeight = $(el).outerHeight();
    }
});

console.log(maxHeight);
console.log($('.menu2').children());

$('.menu2').children().children().each(function(id, el) {
    $(el).css('height', '' + maxHeight + 'px');
    $(el).css('min-width', '' + maxHeight + 'px');
});
*/
