// use jquery to add the class red to the header element

$(function () {
    $('DIV#red_header').click(function () {
	$('HEADER').addClass('red');
    });
});
