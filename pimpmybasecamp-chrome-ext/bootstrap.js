$('head').append('<script type="text/javascript" src="https://raw.github.com/CMN/PimpMyBasecamp/develop/pimpmybasecamp-chrome-ext/recipes/all.js"></script>');

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.github.com/CMN/PimpMyBasecamp/develop/pimpmybasecamp-chrome-ext/recipes/all.css", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    $('head').append('<style type="text/css">' + xhr.responseText + '</style>');
  }
}
xhr.send();
