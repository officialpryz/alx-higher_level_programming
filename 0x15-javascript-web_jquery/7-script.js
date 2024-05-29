//use jquery to fetch the character name from this URL:https://swapi-api.alx-tools.com/api/people/5/?format=json

$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
    success: function (data) {
      $('DIV#character').text(data.name);
    }
  });
});