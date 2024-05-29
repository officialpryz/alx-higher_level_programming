// use jquery to toggle the class of the header element

$(document).ready(function () {
    $('DIV#toggle_header').click(function () {
	$('HEADER').toggleClass('red');
	$('HEADER').toggle.Class('green');
    });
});
