// jquery to change color of div#red_header to red on click

$(function () {
    $('DIV#red_header').click(function () {
	$('HEADER').css({ color: '#FF0000' });
    });
});
