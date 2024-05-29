//use jquery to fetch from https://hellosalut.stefanbohacek.dev/?lang=fr and display the value of hello

$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
    success: function (data) {
      $('DIV#hello').append(data.hello);
    }
  });
});
