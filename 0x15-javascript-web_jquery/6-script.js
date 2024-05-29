//use jquery to update thr text of the header element to New Header!!!

$(document).ready(function () {
  $('DIV#update_header').click(function () {
    $('HEADER').text('New Header!!!');
  });
});
